import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rondè Ceylon | Sri Lanka Travel Agency",
  description:
    "Experience the beauty of Sri Lanka with our personalized travel packages. Explore beaches, wildlife, culture, and more with Rondè Ceylon.",
  icons: {
    icon: "/favicon-green.png",   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
