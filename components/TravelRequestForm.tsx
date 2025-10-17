"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function TravelRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false) // État de confirmation
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    destination: "",
    dateDepart: "",
    dateRetour: "",
    nombrePersonnes: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simuler l'envoi (tu peux remplacer par un appel API)
    console.log("Demande de voyage envoyée:", formData)
    setIsSubmitted(true) // Affiche la page de confirmation
  }

  // Si le formulaire est soumis → affiche la confirmation
  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
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

          {/* Message de confirmation */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Votre message a été reçu !
          </h2>
          <p className="text-gray-600 mb-8">
            Merci pour votre demande. Notre équipe vous contactera très prochainement pour organiser votre voyage sur mesure.
          </p>

          {/* Bouton retour ou contact */}
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                       hover:from-[#FF9B4D] hover:to-[#FF781D] 
                       text-white font-semibold text-lg px-8 py-3 rounded-full 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       tracking-wide uppercase"
          >
            Retour au contact
          </a>
        </div>
      </section>
    )
  }

  // Sinon → affiche le formulaire
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Demande de Voyage
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Remplissez ce formulaire et notre équipe vous contactera pour organiser votre voyage sur mesure.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="destination"
              placeholder="Destination souhaitée"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
            <input
              type="number"
              name="nombrePersonnes"
              placeholder="Nombre de personnes"
              value={formData.nombrePersonnes}
              onChange={handleChange}
              required
              min="1"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              name="dateDepart"
              value={formData.dateDepart}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
            <input
              type="date"
              name="dateRetour"
              value={formData.dateRetour}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message / détails supplémentaires"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF781D]"
          />

          {/* ✅ Bouton sexy, cohérent avec les autres CTA */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                       hover:from-[#FF9B4D] hover:to-[#FF781D] 
                       text-white font-semibold text-lg px-6 py-4 rounded-full 
                       shadow-lg hover:shadow-2xl transition-all duration-300 
                       tracking-wide uppercase"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  )
}