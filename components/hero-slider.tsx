"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Tours Jumelles de Brazzaville",
    subtitle: "Architecture moderne et fierté nationale",
    description: "Admirez les majestueuses Tours Jumelles de Brazzaville, symbole de modernité et de croissance en Afrique centrale. Ces gratte-ciels impressionnants offrent une vue panoramique sur la capitale congolaise.",
    image: "/destinations/tour_4k_rectangle.png",
    destination: "Brazzaville, Congo"
  }
  ,
  {
    id: 2,
    title: "Burj Khalifa",
    subtitle: "Splendeur futuriste",
    description: "Admirez l'architecture emblématique de Dubaï et vivez une expérience urbaine unique",
    image: "/destinations/dubai.jpg",
    destination: "Dubaï, Émirats Arabes Unis"
  },
  {
    id: 3,
    title: "Tour Eiffel",
    subtitle: "Symbole romantique",
    description: "Explorez la célèbre Tour Eiffel et profitez d’une vue imprenable sur Paris",
    image: "/destinations/paris-2.jpg",
    destination: "Paris, France"
  },
  {
    id: 4,
    title: "Musée du Louvre",
    subtitle: "Chef-d'œuvre artistique",
    description: "Plongez au cœur de l’art mondial avec le Louvre, le musée le plus emblématique de Paris",
    image: "/destinations/louvre.jpg",
    destination: "Paris, France"
  },
  {
    id: 5,
    title: "Mosquée Hassan II",
    subtitle: "Merveille architecturale",
    description: "Visitez Casablanca et admirez l'une des plus grandes mosquées du monde",
    image: "/destinations/casablanca.jpg",
    destination: "Casablanca, Maroc"
  },
  {
    id: 6,
    title: "Musée de la Renaissance Africaine",
    subtitle: "Histoire et culture",
    description: "Découvrez le symbole emblématique de Dakar et plongez dans l’histoire africaine moderne",
    image: "/destinations/dakar.jpg",
    destination: "Dakar, Sénégal"
  },
  {
    id: 7,
    title: "Musée de la Renaissance Africaine",
    subtitle: "Histoire et culture",
    description: "Découvrez le symbole emblématique de Dakar et plongez dans l’histoire africaine moderne",
    image: "/destinations/kinshasa.png",
    destination: "Dakar, Sénégal"
  },
]




export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-800 ease-in-out ${index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
        >
          {/* Image + Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out"
              style={{
                transform: `scale(${index === currentSlide ? 1.05 : 1})`,
              }}
            />
            {/* Overlay plus doux et orienté à gauche pour laisser respirer le texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Texte animé */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white">
              <div
                className={`transition-all duration-1000 ${index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#FF9B4D]" />
                  <span className="text-[#FF9B4D] font-semibold text-lg">{slide.destination}</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-light mb-2 text-[#FF9B4D]">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* ✅ Bouton sexy, cohérent avec les autres CTA */}
                  <button
                    className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                               hover:from-[#FF9B4D] hover:to-[#FF781D] 
                               text-white font-semibold text-lg px-10 py-4 rounded-full 
                               shadow-lg hover:shadow-2xl transition-all duration-300 
                               tracking-wide uppercase"
                  >
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Boutons flèches */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Slide suivante"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? "bg-[#FF9B4D] w-8 h-2"
                : "bg-white/50 hover:bg-white/80 w-2 h-2"
              }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}