import Hero from './components/Hero.jsx'
import ActivityTicker from './components/ActivityTicker.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyBosqen from './components/WhyBosqen.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
      <main>
        <Hero />
        <ActivityTicker />
        <Services />
        <HowItWorks />
        <WhyBosqen />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
