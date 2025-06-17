import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webhook Backend",
  description: "Simple Next.js webhook backend",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
