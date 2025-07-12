"use client"

import Image from "next/image"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ativo%201-jmmg521tObwFbCmkL6rfQmvOS8FFPY.png"
                alt="CotaFácil"
                width={180}
                height={60}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">Energia solar por assinatura. Sustentável, econômica e sem burocracia.</p>
            <p className="text-sm text-gray-500">
              Em parceria com <span className="text-orange-500 font-semibold">Matrix GD</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("inicio")} className="hover:text-orange-500 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("simulacao")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Simule Agora
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(47) 99967-8465</li>
              <li>atendimento@cotafacil.com</li>
              <li>@cotafacil.bnu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 CotaFácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
