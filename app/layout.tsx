import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FaviconManager } from "@/components/favicon-manager"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "CotaFácil - Energia Solar por Assinatura",
  description:
    "Energia solar com até 30% de economia, sem precisar instalar nada. Sustentável, econômica e sem burocracia.",
    generator: 'v0.dev',
    icons: [
      { rel: 'icon', url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { rel: 'shortcut icon', url: '/favicon.svg?v=2', type: 'image/svg+xml' },
    ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <FaviconManager />
        {children}
      </body>
    </html>
  )
}
