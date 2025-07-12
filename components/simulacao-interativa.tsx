"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ModalResultado } from "./modal-resultado"

const estados = [
  { value: "", label: "Selecione o Estado" },
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
]

// Mapeamento de distribuidoras por estado
const distribuidorasPorEstado: Record<string, Array<{ value: string; label: string }>> = {
  AC: [{ value: "ENERGISA_AC", label: "Energisa Acre" }],
  AL: [
    { value: "CEAL", label: "CEAL" },
    { value: "ENERGISA_AL", label: "Energisa Alagoas" },
  ],
  AP: [{ value: "CEA", label: "CEA" }],
  AM: [{ value: "AMAZONAS_ENERGIA", label: "Amazonas Energia" }],
  BA: [
    { value: "COELBA", label: "COELBA" },
    { value: "ENERGISA_BA", label: "Energisa Bahia" },
  ],
  CE: [{ value: "ENEL_CE", label: "Enel Ceará" }],
  DF: [{ value: "CEB", label: "CEB Distribuição" }],
  ES: [{ value: "EDP_ES", label: "EDP Espírito Santo" }],
  GO: [
    { value: "ENEL_GO", label: "Enel Goiás" },
    { value: "ENERGISA_GO", label: "Energisa Goiás" },
  ],
  MA: [{ value: "EQUATORIAL_MA", label: "Equatorial Maranhão" }],
  MT: [{ value: "ENERGISA_MT", label: "Energisa Mato Grosso" }],
  MS: [{ value: "ENERGISA_MS", label: "Energisa Mato Grosso do Sul" }],
  MG: [
    { value: "CEMIG", label: "CEMIG" },
    { value: "ENERGISA_MG", label: "Energisa Minas Gerais" },
    { value: "LIGHT_MG", label: "Light" },
  ],
  PA: [
    { value: "EQUATORIAL_PA", label: "Equatorial Pará" },
    { value: "ENERGISA_PA", label: "Energisa Pará" },
  ],
  PB: [{ value: "ENERGISA_PB", label: "Energisa Paraíba" }],
  PR: [
    { value: "COPEL", label: "COPEL" },
    { value: "COCEL", label: "COCEL" },
    { value: "CFLO", label: "CFLO" },
  ],
  PE: [
    { value: "CELPE", label: "CELPE" },
    { value: "ENERGISA_PE", label: "Energisa Pernambuco" },
  ],
  PI: [{ value: "EQUATORIAL_PI", label: "Equatorial Piauí" }],
  RJ: [
    { value: "LIGHT", label: "Light" },
    { value: "ENEL_RJ", label: "Enel Rio" },
  ],
  RN: [{ value: "COSERN", label: "COSERN" }],
  RS: [
    { value: "RGE", label: "RGE" },
    { value: "CEEE", label: "CEEE" },
  ],
  RO: [{ value: "ENERGISA_RO", label: "Energisa Rondônia" }],
  RR: [{ value: "ENERGISA_RR", label: "Energisa Roraima" }],
  SC: [
    { value: "CELESC", label: "CELESC" },
    { value: "ESS", label: "ESS - Energisa Santa Catarina" },
    { value: "COPEL", label: "COPEL" },
  ],
  SP: [
    { value: "CPFL", label: "CPFL Paulista" },
    { value: "ENEL_SP", label: "Enel São Paulo" },
    { value: "ELEKTRO", label: "Elektro" },
    { value: "BANDEIRANTE", label: "Bandeirante Energia" },
  ],
  SE: [{ value: "ENERGISA_SE", label: "Energisa Sergipe" }],
  TO: [{ value: "ENERGISA_TO", label: "Energisa Tocantins" }],
}

export function SimulacaoInterativa() {
  const [valorConta, setValorConta] = useState("")
  const [estado, setEstado] = useState("")
  const [distribuidora, setDistribuidora] = useState("")
  const [economia, setEconomia] = useState(0)
  const [custoMinimo, setCustoMinimo] = useState(0)
  const [gastoConvencional, setGastoConvencional] = useState(0)
  const [gastoAssinatura, setGastoAssinatura] = useState(0)
  const [showModal, setShowModal] = useState(false)

  // Distribuidoras filtradas baseadas no estado selecionado
  const distribuidorasDisponiveis = estado ? distribuidorasPorEstado[estado] || [] : []

  // Reset distribuidora quando estado muda
  useEffect(() => {
    setDistribuidora("")
  }, [estado])

  useEffect(() => {
    if (valorConta && Number.parseFloat(valorConta) > 0) {
      const valor = Number.parseFloat(valorConta)
      const minimo = valor * 0.3 // 30% custo mínimo
      const convencional = valor
      const assinatura = valor * 0.8 // 20% de economia
      const economiaCalculada = valor * 0.2

      setCustoMinimo(minimo)
      setGastoConvencional(convencional)
      setGastoAssinatura(assinatura)
      setEconomia(economiaCalculada)
    } else {
      setCustoMinimo(0)
      setGastoConvencional(0)
      setGastoAssinatura(0)
      setEconomia(0)
    }
  }, [valorConta])

  const handleSimular = () => {
    if (!valorConta || !estado || !distribuidora) {
      alert("Por favor, preencha todos os campos para simular.")
      return
    }
    setShowModal(true)
  }

  const distribuidoraNome = distribuidorasDisponiveis.find((d) => d.value === distribuidora)?.label || distribuidora

  return (
    <>
      <section id="simulacao-interativa" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Lado Esquerdo - Formulário */}
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-4 text-center">Simule sua economia!</h2>
              <p className="text-gray-600 text-center mb-8">
                Preencha os campos abaixo e simule o quanto você pode economizar.
              </p>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quanto você gasta por mês com a sua conta de luz?
                      </label>
                      <input
                        type="number"
                        value={valorConta}
                        onChange={(e) => setValorConta(e.target.value)}
                        placeholder="Valor atual da sua conta de luz"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                        <select
                          value={estado}
                          onChange={(e) => setEstado(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          {estados.map((est) => (
                            <option key={est.value} value={est.value}>
                              {est.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Distribuidora</label>
                        <select
                          value={distribuidora}
                          onChange={(e) => setDistribuidora(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          disabled={!estado}
                        >
                          <option value="">
                            {estado ? "Selecione a Distribuidora" : "Primeiro selecione o Estado"}
                          </option>
                          {distribuidorasDisponiveis.map((dist) => (
                            <option key={dist.value} value={dist.value}>
                              {dist.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Button
                      onClick={handleSimular}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold rounded-lg"
                    >
                      Simular economia
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lado Direito - Visualização da Economia */}
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-4 text-center">Sua economia</h2>
              <p className="text-gray-600 text-center mb-8">Reduza sua conta de luz sem instalar placas solares</p>

              <div className="space-y-6">
                {/* Custo Mínimo */}
                <div className="bg-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">
                      Custo mínimo
                      <br />
                      <span className="text-xs">(distribuição + impostos)</span>
                    </span>
                    <span className="text-lg font-bold text-gray-800">R$ {custoMinimo.toFixed(2)}</span>
                  </div>
                </div>

                {/* Gasto Convencional */}
                <div className="bg-gray-800 rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Gasto com energia convencional</span>
                    <span className="text-lg font-bold">R$ {gastoConvencional.toFixed(2)}</span>
                  </div>
                </div>

                {/* Gasto com Assinatura */}
                <div className="bg-orange-500 rounded-lg p-4 text-white relative">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Gasto com energia por assinatura</span>
                    <span className="text-lg font-bold">R$ {gastoAssinatura.toFixed(2)}</span>
                  </div>
                  {economia > 0 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
                      Economia de até 20%!
                    </div>
                  )}
                </div>

                {/* Resumo da Economia */}
                {economia > 0 && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Você pode economizar</h3>
                    <p className="text-3xl font-black text-green-700">R$ {economia.toFixed(2)}/mês</p>
                    <p className="text-sm text-green-600 mt-2">
                      Isso representa R$ {(economia * 12).toFixed(2)} por ano!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Resultado */}
      <ModalResultado
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        valorConta={Number.parseFloat(valorConta) || 0}
        estado={estado}
        distribuidora={distribuidoraNome}
        economiaMinima={economia * 10} // Economia mínima anual
        economiaMaxima={economia * 15} // Economia máxima anual
        percentualDesconto={28}
      />
    </>
  )
}
