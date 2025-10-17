"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import TravelRequestForm from "@/components/TravelRequestForm"

export default function DemandePage() {
  return (
    <>
      <Header /> {/* Ton header existant avec nav */}
      <main>
        <TravelRequestForm />
      </main>
      <Footer /> {/* Ton footer existant */}
    </>
  )
}
