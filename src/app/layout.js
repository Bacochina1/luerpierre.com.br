// src/app/layout.js
import { Montserrat } from 'next/font/google' // Importação direta
import './globals.css'

// Configuração da Fonte (Google Fonts)
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Criamos a variável CSS
  weight: ['300', '400', '600', '700'], // Pesos: Leve, Normal, Semi-Bold, Bold
})

// Força o modo Edge na Cloudflare
export const runtime = 'edge';

export const metadata = {
  title: 'LUEUR PIERRE — Simplement éclatante.',
  description: 'Moda íntima de alta elegância.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* Injetamos a variável da Montserrat no Body */}
      <body className={`${montserrat.variable} font-sans bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}