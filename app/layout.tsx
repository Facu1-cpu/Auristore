import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auristore - Tecnología de Audio Premium",
  description:
    "Tu tienda especializada en auriculares y productos de audio de la más alta calidad. Precios mayoristas y minoristas.",
  keywords: "auriculares, audio, tecnología, mayorista, minorista, AirPods, Sony, JBL, Beats",
  authors: [{ name: "Auristore" }],
  openGraph: {
    title: "Auristore - Tecnología de Audio Premium",
    description: "Tu tienda especializada en auriculares y productos de audio de la más alta calidad.",
    type: "website",
    locale: "es_ES",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
