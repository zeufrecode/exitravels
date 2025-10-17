import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Exitravels - Agence de Voyage Congolaise | Découvrez l'Afrique",
  description:
    "Exitravels, votre agence de voyage congolaise de confiance. Découvrez des destinations exceptionnelles en Afrique et dans le monde entier avec nos forfaits sur mesure.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
