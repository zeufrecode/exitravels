"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Ethiopian Airlines", logo: "/ethiopian-airlines-logo.png", category: "Compagnie Aérienne" },
  { name: "Kenya Airways", logo: "/kenya-airways-logo.png", category: "Compagnie Aérienne" },
  { name: "Ecair", logo: "/ecair.png", category: "Compagnie Aérienne" },
  { name: "Air France", logo: "/air-france-logo.png", category: "Compagnie Aérienne" },
  { name: "RwandAir", logo: "/rwandair-logo.png", category: "Compagnie Aérienne" },
  { name: "Air Côte d'Ivoire", logo: "/air-cote-d-ivoire-logo.png", category: "Compagnie Aérienne" },
  { name: "Canadian Airlines", logo: "/canadian.png", category: "Compagnie Aérienne" },
  { name: "Royal Air Maroc", logo: "/royal-air-maroc-logo.png", category: "Compagnie Aérienne" },
  { name: "Trans Air Congo", logo: "/trans-air-congo.png", category: "Compagnie Aérienne" },
  { name: "Asky Airlines", logo: "/asky-airlines-logo.png", category: "Compagnie Aérienne" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-lg">Nos Partenaires</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Ils Nous Font Confiance
          </h2>
        </motion.div>

        {/* Partners Horizontal Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src={partner.logo || `/placeholder.svg?query=${partner.name} logo`}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
