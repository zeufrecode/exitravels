"use client"

import { ArrowLeft, Award, Users, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const stats = [
  { icon: Users, value: "100+", label: "Clients Satisfaits" },
  { icon: Globe, value: "10+", label: "Destinations" },
  { icon: Award, value: "1+", label: "Années d'Expérience" },
  { icon: Heart, value: "98%", label: "Taux de Satisfaction" },
]

const values = [
  {
    title: "Toujours au top",
    description: "On fait tout pour que ton voyage soit smooth et mémorable, sans stress.",
  },
  {
    title: "Authentique vibes",
    description: "On te connecte aux vrais coins et à la culture locale, comme un vrai insider.",
  },
  {
    title: "Voyage responsable",
    description: "On respecte la planète et les communautés, pour que ton kiff reste clean.",
  },
  {
    title: "Toujours innovant",
    description: "On trouve des manières stylées et futées pour rendre ton trip encore meilleur.",
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-muted/10 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-block mb-6"
      >
        <span className="text-accent font-semibold text-lg">À Propos de Nous</span>
        <div className="h-1 w-20 bg-accent mt-2 mx-auto" />
      </motion.div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
        Votre Partenaire de Voyage de Confiance
      </h1>
      <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
        Exitravels vous accompagne pour découvrir les merveilles du Congo et au-delà, avec des voyages sur mesure, des circuits touristiques, 
        et une assistance complète pour vos démarches de visa et réservation de billets.
      </p>
    </motion.div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 bg-white/70 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À Propos de Nous</h2>
<div className="space-y-4 text-muted-foreground leading-relaxed">
  <p>
    <strong>Exitravels</strong> est votre partenaire de confiance à Brazzaville pour tous vos besoins en voyage, tourisme et services de visa. 
    Jeune et dynamique, notre agence congolaise se consacre à rendre chaque séjour unique et sans stress, que vous partiez à la découverte du Congo ou à l’international.
  </p>
  <p>
    Nous vous accompagnons dans toutes les démarches de visa : préparation des documents, conseils personnalisés selon la destination, suivi complet et remise rapide de vos visas. 
    Plus de tracas administratifs, vous partez l’esprit tranquille.
  </p>
  <p>
    Notre service de <strong>vente de billets</strong> est simple, rapide et sécurisé. Que ce soit pour des vols nationaux au départ de Brazzaville ou des vols internationaux, nous vous proposons 
    les meilleures options et tarifs pour que votre voyage commence sereinement.
  </p>
  <p>
    En plus de cela, nous organisons des circuits touristiques locaux et régionaux, des excursions culturelles et naturelles, ainsi que des voyages sur mesure selon vos envies. 
    Notre réseau de partenaires fiables vous garantit qualité, sécurité et expériences mémorables à chaque étape.
  </p>
  <p>
    Avec <strong>Exitravels</strong>, le voyage, le tourisme et vos formalités de visa deviennent simples et agréables. 
    Chaque destination devient une expérience unique, pensée pour vous et votre confort.
  </p>
</div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground">
              Les principes qui guident notre travail et notre engagement envers nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/70 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
