"use client"

import { useState } from "react"
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+242 06 892 90 95", "+242 06 694 39 09"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@exitravels.com", "info@exitravels.com"],
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Quartier Nkombo à l'enceinte du Centre Commercial Mama Dina", "Brazzaville, Congo"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 14h00"],
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux envoyer à ton API
    console.log("Message envoyé :", formData)
    setIsSubmitted(true) // Affiche la page de confirmation
  }

  // ✅ Page de confirmation après envoi
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-md text-center">
            {/* Logo Exitravels */}
            <div className="mb-8">
              <img
                src="/logo-2.svg"
                alt="Exitravels"
                className="h-16 mx-auto object-contain"
              />
            </div>

            {/* Icône de succès */}
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-[#FF781D] mx-auto" />
            </div>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Votre message a été reçu !
            </h2>
            <p className="text-gray-600 mb-8">
              Merci pour votre message. Notre équipe vous contactera très prochainement.
            </p>

            {/* ✅ Bouton "Retour à l'accueil" – style sexy */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 
                         bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                         hover:from-[#FF9B4D] hover:to-[#FF781D] 
                         text-white font-semibold text-lg px-8 py-4 rounded-full 
                         shadow-lg hover:shadow-xl transition-all duration-300 
                         tracking-wide uppercase"
            >
              <ArrowLeft className="h-5 w-5" />
              Retour à l'accueil
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  // ✅ Formulaire normal (avant envoi)
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white/50 to-white">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
  {/* Fond gradient léger */}
  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5" />
  
  {/* Blobs flous décoratifs */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

  {/* Contenu principal */}
  <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="inline-block mb-6"
      >
        <span className="text-[#FF781D] font-semibold text-lg uppercase tracking-wider block mb-2">
          Contactez-Nous
        </span>
        <div className="h-1 w-20 bg-[#FF781D] mx-auto rounded-full" />
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Parlons de Votre Prochain Voyage
      </h1>
      <p className="text-gray-600">
        Notre équipe est à votre disposition pour répondre à toutes vos questions.
      </p>
    </motion.div>
  </div>
</section>


      {/* Formulaire + Infos */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Infos de contact */}
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-200">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FF781D]/10 rounded-xl flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-[#FF781D]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((d, j) => (
                        <p key={j} className="text-gray-600 text-sm">{d}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <Link
                href="https://wa.me/243971234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full 
                           bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                           hover:from-[#FF9B4D] hover:to-[#FF781D] 
                           text-white font-semibold text-lg px-6 py-4 rounded-full 
                           shadow-lg hover:shadow-2xl transition-all duration-300 
                           tracking-wide uppercase"
              >
                <MessageCircle className="h-5 w-5" />
                Discuter sur WhatsApp
              </Link>
            </div>

            {/* Formulaire */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="prenom"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
                  />
                  <input
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
                />
                <input
                  name="telephone"
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
                />
                <textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                             hover:from-[#FF9B4D] hover:to-[#FF781D] 
                             text-white font-semibold text-lg px-6 py-4 rounded-full 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             tracking-wide uppercase"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}