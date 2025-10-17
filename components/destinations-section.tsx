"use client"

import { Star, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredDestinations = [
  {
    title: "Dakar, Sénégal",
    rating: 4.9,
    image: "/destinations/dakar.jpg",
    description: "Capitale dynamique, plages dorées et culture vibrante au cœur de l'Afrique de l'Ouest.",
    longDescription:
      "Découvrez Dakar, une ville où l'océan rencontre la culture. Explorez ses marchés colorés, savourez son poulet yassa et laissez-vous emporter par son rythme unique.",
  },
  {
    title: "Dubai, Émirats Arabes Unis",
    rating: 4.8,
    image: "/destinations/dubai.jpg",
    description: "Luxueuse, futuriste et inoubliable — Dubai vous émerveille à chaque coin de rue.",
    longDescription:
      "Vivez l’expérience ultime de luxe et d’aventure : du sommet du Burj Khalifa aux dunes dorées du désert, en passant par les fontaines magiques et les îles artificielles.",
  },
  {
    title: "Paris, France",
    rating: 5.0,
    image: "/destinations/paris.jpg",
    description: "La Ville Lumière, entre romantisme, art et gastronomie raffinée.",
    longDescription:
      "Paris, c’est plus qu’une destination — c’est un rêve. Flânez sur les Champs-Élysées, dégustez un croissant au petit matin, admirez la Seine au coucher du soleil. Magique.",
  },
]

export default function FeaturedDestinationsHariomStyle() {
  return (
    <section className="p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredDestinations.map((dest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative rounded-2xl overflow-hidden h-[450px] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            

            {/* Contenu */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white leading-relaxed">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm tracking-wide">
                  {dest.title}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">
                {dest.description}
              </h4>
              <p className="text-sm opacity-90 mb-5 line-clamp-3">
                {dest.longDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                 <a
                        href="/contact"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-colors inline-block"
                      >
                        Contactez-Nous
                      </a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔗 Bouton "Voir toutes les destinations" avec lien */}
      <div className="flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/destinations">
           <button className="bg-[#ff781d] hover:bg-[#e0650f] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
  Voir toutes les destinations
</button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
