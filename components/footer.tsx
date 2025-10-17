"use client"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  if (currentYear === null) return null // ou un loader léger

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="h-16 w-auto">
                <img
                  src="/logo-2.svg"
                  alt="Exitravels"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Keep Calm and Just Travel
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-white/70 hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-white/70 hover:text-accent transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-white/70 hover:text-accent transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {/* man page */}
              <li className="text-white/70">Billeterie</li>
              <li className="text-white/70">Réservation</li>
              <li className="text-white/70">Visa</li>
              <li className="text-white/70">Tourisme</li>
              <li className="text-white/70">Location de vehicule</li>
              <li className="text-white/70">Hébergement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Quartier Nkombo à l'enceinte du Centre Commercial Mama Dina 
                  <br />
                  Brazzaville, Congo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+242068929095" className="text-white/70 hover:text-accent transition-colors">
                    +242 06 892 90 95
                  </a>
                  <a href="tel:+242066943909" className="text-white/70 hover:text-accent transition-colors">
                    +242 06 694 39 09
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@exitravels.com" className="text-white/70 hover:text-accent transition-colors">
                  contact@exitravels.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Exitravels. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
