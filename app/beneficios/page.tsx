import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Benefits } from "@/components/benefits"

export default function BeneficiosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero: texto + vídeo, como na home */}
      <section className="pt-28 md:pt-32 pb-16 bg-[#FF6B00] text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Benefícios que geram economia de verdade
            </h1>
            <p className="text-white/90 md:text-lg leading-relaxed mb-6">
            Com a Matrix, você tem acesso a soluções inteligentes que reduzem custos e aumentam vantagens para sua casa, empresa e colaboradores. Economia, praticidade e resultados no dia a dia.
            </p>
          </div>
          <div>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/u_Uywe4lUo0?rel=0&modestbranding=1"
                title="Energia por Assinatura - Benefícios"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Benefícios (reutilizando componente) */}
      <Benefits />



      <Footer />
      <WhatsAppButton />
    </div>
  )
}
