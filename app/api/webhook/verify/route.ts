import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("x-signature") || request.headers.get("x-hub-signature-256")

    if (!signature) {
      return NextResponse.json(
        {
          error: "Missing signature header",
        },
        { status: 401 },
      )
    }

    // Verify webhook signature (example for GitHub-style webhooks)
    const secret = process.env.WEBHOOK_SECRET
    if (!secret) {
      console.error("WEBHOOK_SECRET environment variable not set")
      return NextResponse.json(
        {
          error: "Server configuration error",
        },
        { status: 500 },
      )
    }

    const expectedSignature = crypto.createHmac("sha256", secret).update(body).digest("hex")

    const providedSignature = signature.replace("sha256=", "")

    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature, "hex"), Buffer.from(providedSignature, "hex"))) {
      return NextResponse.json(
        {
          error: "Invalid signature",
        },
        { status: 401 },
      )
    }

    // Process verified webhook
    const data = JSON.parse(body)
    console.log("Verified webhook received:", data)

    return NextResponse.json(
      {
        success: true,
        message: "Verified webhook processed successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Webhook verification error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to verify webhook",
      },
      { status: 500 },
    )
  }
}
