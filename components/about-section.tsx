"use client"

import { Award, Users, Globe, Heart } from "lucide-react"

const stats = [
  { icon: Award, value: "1+", label: "Années d'Expérience" },
  { icon: Users, value: "1k+", label: "Clients Satisfaits" },
  { icon: Globe, value: "1+", label: "Destinations" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
]

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/african-travel-agency-team-professional.jpg" alt="Exitravels Team" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-5xl font-bold mb-2">1+</p>
                <p className="text-xl">Années d'Excellence</p>
              </div>
            </div>
            {/* Floating Card */}
            
          </div>

          {/* Content Side */}
          <div className="space-y-6">
  <div className="inline-block">
    <span className="text-accent font-semibold text-lg">À Propos de Nous</span>
    <div className="h-1 w-20 bg-accent mt-2" />
  </div>

  <h2 className="text-4xl md:text-5xl font-bold text-balance">
    Votre Partenaire de Confiance pour des Voyages Inoubliables
  </h2>

  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
    <span className="font-semibold text-primary">Exitravels</span> est une agence de voyage congolaise jeune et
    dynamique, forte d'une année d'expérience dans l'organisation de séjours, le tourisme et les services de visa.
    Notre passion : vous faire découvrir le monde en toute sérénité.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
    Nous proposons des voyages sur mesure, des circuits touristiques, ainsi qu'une assistance complète pour vos
    démarches de visa et vos réservations internationales. Avec <span className="font-semibold text-primary">Exitravels</span>,
    partez l’esprit tranquille — chaque destination devient une expérience unique, pensée pour vous.
  </p>

  {/* Stats Grid */}
  
</div>

        </div>
      </div>
    </section>
  )
}
