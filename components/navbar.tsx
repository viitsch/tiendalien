"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                StyleWave
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-cyan-600">
              Inicio
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-cyan-600">
              Colecciones
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-cyan-600">
              Personalizar
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-cyan-600">
              Sobre Nosotros
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="default"
              className="hidden md:flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Iniciar Sesión
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block py-2 text-base font-medium hover:text-cyan-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="block py-2 text-base font-medium hover:text-cyan-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Colecciones
            </Link>
            <Link
              href="#"
              className="block py-2 text-base font-medium hover:text-cyan-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Personalizar
            </Link>
            <Link
              href="#"
              className="block py-2 text-base font-medium hover:text-cyan-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Button
              variant="default"
              className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
