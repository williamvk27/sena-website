"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-teal-600">SENA</div>
            <div className="ml-2 text-sm text-gray-600">ENGENHARIA</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-teal-600 transition-colors">
              Serviços
            </Link>
            <Link href="#experiencia" className="text-gray-700 hover:text-teal-600 transition-colors">
              Experiência
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              (11) 5026-4182
            </div>
            <Link href="#formContact">
              <Button>Orçamento Grátis</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-teal-600 transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="text-gray-700 hover:text-teal-600 transition-colors">
                Serviços
              </Link>
              <Link href="#experiencia" className="text-gray-700 hover:text-teal-600 transition-colors">
                Experiência
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contato
              </Link>
              <div className="pt-4 border-t">
                <Link href="#formContact">
                  <Button className="w-full">Orçamento Grátis</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
