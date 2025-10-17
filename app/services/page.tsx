"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    title: "Billetterie",
    description:
      "Nous vous offrons un service de billetterie rapide et fiable pour tous vos déplacements. Nos partenariats avec de nombreuses compagnies aériennes garantissent les meilleurs tarifs disponibles.",
    features: [
      "Réservation de vols nationaux et internationaux",
      "Tarifs compétitifs et promotions exclusives",
      "Support 24h/24 pour toute modification",
      "Assistance à l’enregistrement en ligne",
    ],
  },
  {
    title: "Réservation",
    description:
      "Simplifiez vos réservations grâce à notre équipe. Nous nous chargeons de tout : hôtels, circuits, ou activités, pour vous garantir un séjour fluide et sans stress.",
    features: [
      "Réservation rapide et sécurisée",
      "Partenariats avec les meilleures agences",
      "Flexibilité de dates",
      "Annulations faciles",
    ],
  },
  {
    title: "Visa",
    description:
      "Nous vous accompagnons dans toutes les démarches pour l’obtention de votre visa. Notre équipe vous conseille et s’occupe de la préparation complète de votre dossier.",
    features: [
      "Conseil et vérification des documents",
      "Préparation de dossier complète",
      "Suivi personnalisé de votre demande",
      "Taux de réussite élevé",
    ],
  },
  {
    title: "Tourisme",
    description:
      "Découvrez le monde autrement avec nos circuits touristiques sur mesure. Chaque destination est pensée pour offrir une expérience authentique et inoubliable.",
    features: [
      "Circuits personnalisés selon vos envies",
      "Guides francophones expérimentés",
      "Activités culturelles et excursions incluses",
      "Assistance sur place 24/7",
    ],
  },
  {
    title: "Location véhicule",
    description:
      "Profitez de notre large gamme de véhicules récents et confortables pour vos déplacements personnels ou professionnels, avec ou sans chauffeur.",
    features: [
      "Véhicules récents et bien entretenus",
      "Tarifs flexibles selon la durée",
      "Assurance complète",
      "Livraison et récupération du véhicule",
    ],
  },
  {
    title: "Hébergement",
    description:
      "Trouvez le logement parfait pour votre séjour grâce à nos partenariats avec les meilleurs hôtels et résidences. Confort, sécurité et tranquillité assurés.",
    features: [
      "Hôtels et appartements triés sur le volet",
      "Meilleurs prix garantis",
      "Options de luxe ou économiques",
      "Réservations flexibles",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <span className="text-accent font-semibold text-lg">Nos Offres</span>
              <div className="h-1 w-20 bg-accent mt-2 mx-auto" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Découvrez Nos Services de Voyage
            </h1>

            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Que vous soyez un professionnel ou un particulier, nous vous accompagnons dans l’organisation de vos voyages, séjours et déplacements sur mesure.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Cartes des services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="relative bg-white text-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-xl overflow-hidden border-l-8 border-[#034754] flex flex-col items-start justify-between h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 shadow-[#03475422]">
                  <div className="mb-6">
                    <span className="inline-block bg-[#034754]/5 text-[#034754] font-semibold text-sm px-4 py-1 rounded-full border border-[#034754]/20 shadow-sm">
                      NOS SERVICES
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#034754]">{service.title}</h3>

                  <p className="text-base md:text-lg mb-5 leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF781D] mt-1.5 flex-shrink-0" />
                        <span className="text-base md:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section finale */}
          <div className="text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#034754]">
              Besoin de nos services ?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez notre équipe dès aujourd’hui pour planifier votre prochain voyage en toute sérénité.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
             hover:from-[#FF9B4D] hover:to-[#FF781D] 
             text-white font-semibold text-lg px-10 py-4 rounded-full 
             shadow-lg hover:shadow-2xl transition-all duration-300 
             tracking-wide uppercase block w-fit mx-auto"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
