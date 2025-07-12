"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Simulacao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpfCnpj: "",
    endereco: "",
    cep: "",
    valorConta: "",
    fatura: null as File | null,
    documento: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files?.[0] || null,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // Adicionar todos os campos de texto
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value === "string") {
          formDataToSend.append(key, value)
        }
      })

      // Adicionar arquivos
      if (formData.fatura) {
        formDataToSend.append("fatura", formData.fatura)
      }
      if (formData.documento) {
        formDataToSend.append("documento", formData.documento)
      }

      const response = await fetch("/api/simulacao", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        alert("Sua proposta chegará em alguns minutos no seu WhatsApp!")
        // Limpar formulário após sucesso
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          cpfCnpj: "",
          endereco: "",
          cep: "",
          valorConta: "",
          fatura: null,
          documento: null,
        })
        // Limpar inputs de arquivo
        const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>
        fileInputs.forEach((input) => (input.value = ""))
      } else {
        alert("Erro ao enviar simulação. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro ao enviar simulação:", error)
      alert("Erro ao enviar simulação. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="simulacao" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ASSINE AGORAsName="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha os dados abaixo e descubra quanto você pode economizar
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CPF/CNPJ</label>
                  <input
                    type="text"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Endereço Completo</label>
                  <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CEP</label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valor da Conta de Luz (R$)</label>
                <input
                  type="number"
                  name="valorConta"
                  value={formData.valorConta}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fatura de Energia (PDF ou Foto)
                  </label>
                  <input
                    type="file"
                    name="fatura"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documento com Foto (PDF ou Foto)
                  </label>
                  <input
                    type="file"
                    name="documento"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Simular Economia"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
