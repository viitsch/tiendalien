import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StyleWave | Poleras Personalizadas",
  description: "Diseños únicos y personalizados que reflejan tu estilo y personalidad",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} StyleWave. Todos los derechos reservados.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
