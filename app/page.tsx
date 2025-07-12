import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SimulacaoInterativa } from "@/components/simulacao-interativa"
import { ComoFuncionaEnergia } from "@/components/como-funciona-energia"
import { EntendaTudo } from "@/components/entenda-tudo"
import { CasesSucesso } from "@/components/cases-sucesso"
import { JaProporcionamos } from "@/components/ja-proporcionamos"
import { Simulacao } from "@/components/simulacao"
import { FAQ } from "@/components/faq"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SimulacaoInterativa />
      <ComoFuncionaEnergia />
      <EntendaTudo />
      <CasesSucesso />
      <JaProporcionamos />
      <Simulacao />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
