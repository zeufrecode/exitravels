"use client"

import { Clock, Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"

// ⚠️ J'ai corrigé les noms des villes et mis les bonnes images
const allDestinations = [
  {
    title: "Dakar, Sénégal",
    duration: "7 nuits / 8 jours",
    price: "2,400",
    rating: 4.9,
    image: "/destinations/ville-dakar.jpg", // ← à remplacer par ton image
    description: "Capitale dynamique, plages dorées et culture vibrante au cœur de l'Afrique de l'Ouest.",
    highlights: ["Plages de la Corniche", "Île de Gorée", "Cuisine sénégalaise"],
    longDescription:
      "Découvrez Dakar, une ville où l'océan rencontre la culture. Explorez ses marchés colorés, savourez son poulet yassa et laissez-vous emporter par son rythme unique.",
  },
  {
    title: "Cotonou, Bénin",
    duration: "6 nuits / 7 jours",
    price: "3,100",
    rating: 5.0,
    image: "/destinations/cotonou.jpg", // ← à remplacer par ton image
    description: "Porte d'entrée vers le Bénin, entre tradition, modernité et richesse culturelle.",
    highlights: ["Marché de Dantokpa", "Lac Nokoué", "Villes lacustres"],
    longDescription:
      "Cotonou est bien plus qu’une capitale économique. C’est un voyage sensoriel : odeurs d’épices, sons de tam-tams, couleurs des tissus wax. Plongez dans l’âme du Bénin.",
  },
  {
    title: "Lomé, Togo",
    duration: "8 nuits / 9 jours",
    price: "4,200",
    rating: 4.9,
    image: "/destinations/lome.jpg", // ← à remplacer par ton image
    description: "La douceur de vivre côtoie la modernité dans cette capitale côtière africaine.",
    highlights: ["Boulevard de la Mer", "Musée national", "Artisanat local"],
    longDescription:
      "Lomé vous séduira par sa tranquillité, ses plages désertes et son charme colonial. Une destination idéale pour découvrir l’Afrique sans stress, avec style et authenticité.",
  },
  {
    title: "Dubai, Émirats Arabes Unis",
    duration: "5 nuits / 6 jours",
    price: "2,800",
    rating: 4.8,
    image: "/destinations/city.jpg", // ← à remplacer par ton image
    description: "Luxueuse, futuriste et inoubliable — Dubai vous émerveille à chaque coin de rue.",
    highlights: ["Burj Khalifa", "Safari dans le désert", "Dubai Mall"],
    longDescription:
      "Vivez l’expérience ultime de luxe et d’aventure : du sommet du Burj Khalifa aux dunes dorées du désert, en passant par les fontaines magiques et les îles artificielles.",
  },
  {
    title: "Paris, France",
    duration: "7 nuits / 8 jours",
    price: "3,900",
    rating: 5.0,
    image: "/destinations/paris.jpg", // ← à remplacer par ton image
    description: "La Ville Lumière, entre romantisme, art et gastronomie raffinée.",
    highlights: ["Tour Eiffel", "Louvre", "Seine en croisière"],
    longDescription:
      "Paris, c’est plus qu’une destination — c’est un rêve. Flânez sur les Champs-Élysées, dégustez un croissant au petit matin, admirez la Seine au coucher du soleil. Magique.",
  },
  {
    title: "Casablanca, Maroc",
    duration: "5 nuits / 6 jours",
    price: "2,200",
    rating: 4.7,
    image: "/destinations/maroc.jpg", // ← à remplacer par ton image
    description: "Modernité et tradition se rencontrent dans cette métropole méditerranéenne.",
    highlights: ["Hassan II Mosque", "Corniche", "Souks animés"],
    longDescription:
      "Casablanca mêle architecture coloniale, mosquées majestueuses et vie nocturne vibrante. Découvrez la face moderne du Maroc, entre mer, culture et saveurs authentiques.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
}

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section animé */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient de fond identique au hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5" />

        {/* Blobs flous décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label comme hero */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="text-accent font-semibold text-lg">Destinations</span>
              <div className="h-1 w-20 bg-accent mt-2 mx-auto rounded-full" />
            </motion.div>

            {/* Titre principal comme hero */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Destinations <span className="text-accent">Inoubliables</span>
            </h1>

            {/* Sous-texte */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des voyages soigneusement conçus pour vous emmener aux quatre coins du monde.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Section "Voyagez dans le monde entier facilement et sans tracas" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Texte gauche */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Avec Exitravels
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Explorez le monde à votre rythme <br />
                <span className="text-accent">sans stress et avec style</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Passez des moments inoubliables à travers nos voyages sur-mesure ! Que ce soit une aventure dans la savane africaine, une escapade romantique à Paris, ou une exploration futuriste à Dubaï, nous vous guidons pour vivre des expériences uniques. Découvrez de nouvelles cultures, rencontrez des personnes fascinantes, et admirez des merveilles naturelles ou créées par l’homme. Votre voyage, votre histoire.
              </p>
              <Link href="/demande">
                <button
                  className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
             hover:from-[#FF9B4D] hover:to-[#FF781D] 
             text-white font-semibold text-lg px-10 py-4 rounded-full 
             shadow-lg hover:shadow-2xl transition-all duration-300 
             tracking-wide uppercase"
                >
                  Personnalisez votre voyage ✈️
                </button>
              </Link>

            </div>


            {/* Cartes destinations — style Hariom */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {allDestinations.map((dest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-xl overflow-hidden h-[400px] group cursor-pointer"
                >
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />



                  {/* Contenu */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-accent font-semibold text-sm">{dest.title}</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                      {dest.description.split("—")[0]}
                    </h4>
                    <p className="text-sm mb-4 line-clamp-3">{dest.longDescription}</p>
                    <div className="flex gap-2">
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
          </div>
        </div>
      </section>

      {/* Grille de destinations complètes — si tu veux garder aussi la version classique */}
      {/* <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allDestinations.map((dest, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group overflow-hidden border border-border/20 bg-card/60 backdrop-blur-[2px] hover:bg-card transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-sm">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="font-semibold text-xs">{dest.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {dest.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {dest.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted/30 text-foreground px-2.5 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{dest.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}