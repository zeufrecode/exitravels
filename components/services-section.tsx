"use client"

import { Card } from "@/components/ui/card"
import { Globe, Plane, Car } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Assistance visa",
      description:
        "L'obtention d'un visa peut parfois s'avérer difficile. Nous gérons toutes vos formalités pour vous assurer un voyage serein.",
      icon: <Globe className="h-8 w-8 text-white" />,
    },
    {
      id: 2,
      title: "Réservation de billets d'avions",
      description:
        "Nous trouvons les meilleurs tarifs et horaires pour votre vol, partout dans le monde, avec une assistance personnalisée.",
      icon: <Plane className="h-8 w-8 text-white" />,
    },
    {
      id: 3,
      title: "Location de véhicules",
      description:
        "Sélection diversifiée de véhicules pour vos déplacements, adaptée à chaque besoin avec une sécurité optimale.",
      icon: <Car className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-muted/10 to-white">
      <div className="container mx-auto px-4">
        {/* Titre + séparateur */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Grille 3 colonnes avec animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="relative bg-[#034784] text-white rounded-[2.5rem] p-8 shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group h-full">

  {/* Demi-ronds décoratifs — invisibles au repos, visibles au hover */}
  <div className="w-40 h-40 rounded-full absolute -top-12 -right-12 opacity-0 group-hover:opacity-80 transition-all duration-700 z-20" style={{ backgroundColor: '#ff781D' }} />
<div className="w-40 h-40 rounded-full absolute -bottom-12 -left-12 opacity-0 group-hover:opacity-80 transition-all duration-700 z-20" style={{ backgroundColor: '#ff781D' }} />


  {/* Icône circulaire — toujours visible au-dessus */}
  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-400 z-30">
    {service.icon}
  </div>

  {/* Texte — toujours au-dessus de tout */}
  <div className="relative z-40">
    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
    <p className="text-lg leading-relaxed">{service.description}</p>
  </div>

</Card>





            </motion.div>
          ))}
        </div>

        {/* Bouton "Voir tous les services" */}
        <div className="mt-16 flex justify-center">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="/services">
      <button
  className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
             hover:from-[#FF9B4D] hover:to-[#FF781D] 
             text-white font-semibold text-lg px-10 py-4 rounded-full 
             shadow-lg hover:shadow-2xl transition-all duration-300 
             tracking-wide uppercase"
>
  Voir tous les services
</button>
    </Link>
  </motion.div>
</div>

      </div>
    </section>
  )
}
