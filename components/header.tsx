"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/destinations", label: "Destinations" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#034784] text-white py-2 px-4 text-xs sm:text-sm shadow-inner">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+242068929095" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Phone size={14} />
              <span className="hidden sm:inline">+242 06 892 90 95</span>
            </a>
            <a href="tel:+242066943909" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Phone size={14} />
              <span className="hidden sm:inline">+242 06 694 39 09</span>
            </a>
            <a href="mailto:contact@exitravels.com" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Mail size={14} />
              <span className="hidden sm:inline">contact@exitravels.com</span>
            </a>
          </div>
          <p className="font-light italic tracking-wide">
            ✨ Keep Calm and Just Travel
          </p>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border/30"
            : "bg-white"
        }`}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                className="h-20 w-auto"
              >
                <img
                  src="/logo.svg"
                  alt="Exitravels"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-foreground font-medium px-3 py-1 rounded-md transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:shadow-[inset_0_0_12px_rgba(0,0,0,0.08)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                <button
                  className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                             hover:from-[#FF9B4D] hover:to-[#FF781D] 
                             text-white font-semibold text-lg px-10 py-4 rounded-full 
                             shadow-lg hover:shadow-2xl transition-all duration-300 
                             tracking-wide uppercase"
                >
                  Réserver Maintenant
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Gradient bottom bar */}
        <div className="h-2 w-full bg-gradient-to-b from-transparent to-muted/10" />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/20"
            >
              <nav className="container mx-auto px-4 py-5 flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.04, duration: 0.15 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary font-medium py-2 block text-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* ✅ Bouton mobile SEXY – harmonisé avec les autres CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="pt-2"
                >
                  <button
                    className="w-full bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
                               hover:from-[#FF9B4D] hover:to-[#FF781D] 
                               text-white font-semibold text-lg px-6 py-4 rounded-full 
                               shadow-lg hover:shadow-xl transition-all duration-300 
                               tracking-wide uppercase"
                  >
                    Réserver Maintenant
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}