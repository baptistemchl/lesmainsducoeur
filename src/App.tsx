import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { PhilosophySection } from './components/sections/PhilosophySection'
import { AyurvedaSection } from './components/sections/AyurvedaSection'
import { SessionSection } from './components/sections/SessionSection'
import { WhyUsSection } from './components/sections/WhyUsSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { FaqSection } from './components/sections/FaqSection'
import { ContactSection } from './components/sections/ContactSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <AyurvedaSection />
        <SessionSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
