"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-2xl z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="Ir para a página inicial">
            <Image src="/images/logo-azul.png" alt="Cota Fácil" width={180} height={60} className="h-10 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu - Centralizado */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <Link
            href="/#inicio"
            className="text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg hover:scale-110"
          >
            Início
          </Link>
          <Link
            href="/como-funciona"
            className="text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg hover:scale-110"
          >
            Como Funciona
          </Link>
          <Link
            href="/#beneficios"
            className="text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg hover:scale-110"
          >
            Benefícios
          </Link>
          <Link
            href="/#simulacao"
            className="text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg hover:scale-110"
          >
            Assine Agora
          </Link>
          <Link
            href="/#contato"
            className="text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg hover:scale-110"
          >
            Contato
          </Link>
        </nav>

        {/* Botão à direita */}
        <Button
          asChild
          className="hidden md:block h-11 leading-none py-0 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-orange-400"
        >
          <Link href="/#simulacao" className="inline-flex items-center justify-center h-full px-8 leading-none">Assine Agora</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          <div
            className={`w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : "mb-1"}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "mb-1"}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-orange-500 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="container mx-auto px-4 py-6 space-y-6">
            <Link
              href="/#inicio"
              className="block text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg py-2 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/como-funciona"
              className="block text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg py-2 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="/#beneficios"
              className="block text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg py-2 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="/#simulacao"
              className="block text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg py-2 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Assine Agora
            </Link>
            <Link
              href="/#contato"
              className="block text-orange-500 font-bold hover:text-orange-600 transition-all duration-300 text-lg py-2 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="pt-4 flex justify-center">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 border-2 border-orange-400"
              >
                <Link
                  href="/#simulacao"
                  className="inline-flex items-center justify-center h-11 px-8 leading-none"
                  onClick={() => scrollToSection("simulacao")}
                >
                  Assine Agora
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
