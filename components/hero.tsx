"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Energia solar com até <span className="text-yellow-300">30% de economia</span>, sem precisar instalar nada.
          </h1>
          <p className="text-lg text-orange-100">
            A CotaFácil, em parceria com a Matrix GD, traz energia por assinatura direto para sua conta de luz.
            Sustentável, econômica e sem burocracia — para residências e empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("simulacao")}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Simular Economia
            </Button>
            <Button
              onClick={() => scrollToSection("como-funciona")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Saiba Como Funciona
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video bg-black/20 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/u_Uywe4lUo0"
              title="Energia por Assinatura - Como funciona"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
