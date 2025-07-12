import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const dados = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      cpfCnpj: formData.get("cpfCnpj") as string,
      endereco: formData.get("endereco") as string,
      cep: formData.get("cep") as string,
      valorConta: formData.get("valorConta") as string,
      dataSimulacao: new Date().toISOString(),
    }

    const fatura = formData.get("fatura") as File
    const documento = formData.get("documento") as File

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const nomePasta = `${dados.nome.replace(/\s+/g, "_")}_${timestamp}`
    const caminhoSimulacao = path.join(process.cwd(), "simulacoes", nomePasta)

    await mkdir(caminhoSimulacao, { recursive: true })

    const dadosJson = JSON.stringify(dados, null, 2)
    await writeFile(path.join(caminhoSimulacao, "dados.json"), dadosJson)

    if (fatura && fatura.size > 0) {
      const faturaBuffer = Buffer.from(await fatura.arrayBuffer())
      const faturaExtensao = fatura.name.split(".").pop()
      await writeFile(path.join(caminhoSimulacao, `fatura.${faturaExtensao}`), faturaBuffer)
    }

    if (documento && documento.size > 0) {
      const documentoBuffer = Buffer.from(await documento.arrayBuffer())
      const documentoExtensao = documento.name.split(".").pop()
      await writeFile(path.join(caminhoSimulacao, `documento.${documentoExtensao}`), documentoBuffer)
    }

    const resumo = `
SIMULAÇÃO DE ENERGIA SOLAR - COTA FÁCIL
=======================================

Data da Simulação: ${new Date(dados.dataSimulacao).toLocaleString("pt-BR")}

DADOS PESSOAIS:
- Nome: ${dados.nome}
- E-mail: ${dados.email}
- Telefone: ${dados.telefone}
- CPF/CNPJ: ${dados.cpfCnpj}

ENDEREÇO:
- Endereço: ${dados.endereco}
- CEP: ${dados.cep}

CONSUMO:
- Valor da Conta de Luz: R$ ${dados.valorConta}

ARQUIVOS ANEXADOS:
- Fatura: ${fatura ? fatura.name : "Não enviada"}
- Documento: ${documento ? documento.name : "Não enviado"}

=======================================
Pasta da simulação: ${nomePasta}
    `

    await writeFile(path.join(caminhoSimulacao, "resumo.txt"), resumo)

    return NextResponse.json({
      success: true,
      message: "Simulação salva com sucesso!",
      pasta: nomePasta,
    })
  } catch (error) {
    console.error("Erro ao salvar simulação:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar simulação" }, { status: 500 })
  }
}
