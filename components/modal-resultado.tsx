"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

interface ModalResultadoProps {
  isOpen: boolean
  onClose: () => void
  valorConta: number
  estado: string
  distribuidora: string
  economiaMinima: number
  economiaMaxima: number
  percentualDesconto: number
}

export function ModalResultado({
  isOpen,
  onClose,
  valorConta,
  estado,
  distribuidora,
  economiaMinima,
  economiaMaxima,
  percentualDesconto,
}: ModalResultadoProps) {
  if (!isOpen) return null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Lado Esquerdo - Informações */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-l-2xl border-4 border-black">
            {/* Header Laranja com margem */}
            <div className="bg-orange-600 rounded-2xl p-6 mb-6 border-4 border-black">
              <h2 className="text-2xl font-bold mb-2">Você poderá economizar</h2>
              <p className="text-3xl font-black">
                R$ {economiaMinima.toFixed(2)} a R$ {economiaMaxima.toFixed(2)} por ano*
              </p>
              <p className="text-sm mt-2 opacity-90">*a depender da bandeira praticada pela distribuidora</p>
            </div>

            {/* Desconto */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-orange-100 mb-2">Desconto de até {percentualDesconto}%</h3>
              <p className="text-xl font-semibold">na sua tarifa de energia!</p>
            </div>

            {/* Dados da Simulação */}
            <div className="space-y-3 mb-8">
              <div>
                <span className="text-orange-200 text-sm">Valor da conta:</span>
                <p className="text-xl font-bold">R$ {valorConta.toFixed(2)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-orange-200 text-sm">UF:</span>
                  <p className="text-lg font-bold">{estado}</p>
                </div>
                <div>
                  <span className="text-orange-200 text-sm">Distribuidora:</span>
                  <p className="text-lg font-bold">{distribuidora}</p>
                </div>
              </div>
            </div>

            {/* Botão Principal com margem */}
            <div>
              <Button
                onClick={() => scrollToSection("simulacao")}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-bold rounded-xl mb-4"
              >
                Quero economizar
              </Button>
            </div>

            {/* Link WhatsApp */}
            <p className="text-sm text-orange-100 text-center">
              Se ainda tem dúvidas,{" "}
              <a
                href="https://wa.me/5547999678465"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                clique aqui e fale conosco via WhatsApp
              </a>
            </p>

            {/* Observações */}
            <div className="mt-6 text-xs text-orange-200 space-y-1">
              <p>*Valores estimados com base na tarifa atual</p>
              <p>**Economia varia conforme bandeira tarifária e consumo mensal</p>
            </div>
          </div>

          {/* Lado Direito - Imagem */}
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-r-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full max-w-md">
                <Image
                  src="/images/usina-solar-modal.png"
                  alt="Usina Solar - Energia Renovável"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-lg"></div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300/20 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-orange-300/30 rounded-full"></div>
            <div className="absolute top-1/2 left-4 w-4 h-4 bg-blue-300/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
