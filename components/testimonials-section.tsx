"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marie Kabongo",
    role: "Voyageuse Passionnée",
    image: "/african-woman-professional-portrait.png",
    rating: 5,
    text: "Exitravels a organisé notre safari au Virunga de manière impeccable. L'expérience avec les gorilles était magique et tout était parfaitement coordonné. Je recommande vivement!",
  },
  {
    name: "Jean-Pierre Mukendi",
    role: "Entrepreneur",
    image: "/african-man-business-portrait.jpg",
    rating: 5,
    text: "Service professionnel et attentionné. L'équipe d'Exitravels a su répondre à toutes mes exigences pour mes voyages d'affaires. Une agence de confiance!",
  },
  {
    name: "Sophie Lumingu",
    role: "Famille Voyageuse",
    image: "/smiling-african-woman.png",
    rating: 5,
    text: "Nous avons passé des vacances familiales extraordinaires grâce à Exitravels. Tout était bien organisé, du vol à l'hébergement. Nos enfants ont adoré!",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-lg">Témoignages</span>
            <div className="h-1 w-20 bg-accent mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ce Que Disent Nos Clients</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            La satisfaction de nos clients est notre plus grande fierté
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-20 w-20 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
