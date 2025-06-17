import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const data = await request.json()

    console.log("Webhook received:", data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "Webhook endpoint ready" })
}
