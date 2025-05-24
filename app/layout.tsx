import type React from "react"
import "@/app/globals.css"
import "@/styles/select-styles.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "VelaEstate - Phuket Real Estate Agency",
  description: "Find your dream property in Phuket with VelaEstate, your trusted partner in Thai real estate.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
