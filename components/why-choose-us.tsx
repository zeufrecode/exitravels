"use client"

import { Shield, ThumbsUp, DollarSign, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Voyagez en toute sérénité avec nos partenaires certifiés et notre assurance voyage complète.",
  },
  {
    icon: ThumbsUp,
    title: "Expertise Locale",
    description: "Bénéficiez de notre connaissance approfondie du terrain et de nos guides expérimentés.",
  },
  {
    icon: DollarSign,
    title: "Meilleurs Prix",
    description: "Profitez de tarifs compétitifs grâce à nos partenariats avec les meilleures compagnies.",
  },
  {
    icon: Clock,
    title: "Service Rapide",
    description: "Réservation instantanée et confirmation rapide pour tous vos besoins de voyage.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-lg">Pourquoi Nous Choisir</span>
            <div className="h-1 w-20 bg-accent mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">L'Excellence à Votre Service</h2>
          <p className="text-lg text-white/80 text-pretty">
            Découvrez ce qui fait d'Exitravels votre partenaire idéal pour des voyages exceptionnels
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6 inline-block">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300 mx-auto">
                  <feature.icon className="h-10 w-10 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        
      </div>
    </section>
  )
}
