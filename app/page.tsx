import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import FlightSearchForm from '@/components/FlightSearchForm';
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import DestinationsSection from "@/components/destinations-section"
import WhyChooseUs from "@/components/why-choose-us"
import PartnersSection from "@/components/partners-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
     <FlightSearchForm />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseUs />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
