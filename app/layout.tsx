import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pulse Dashboard",
  description: "Self-hosted Pulse management platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <div className="relative flex min-h-screen w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 app-mesh-bg" />
            <SidebarProvider className="relative z-10">
              <AppSidebar />
              <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 md:p-4">
                <Header />
                <main className="glass-panel min-h-0 flex-1 overflow-auto p-6 md:p-8">{children}</main>
              </div>
            </SidebarProvider>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
