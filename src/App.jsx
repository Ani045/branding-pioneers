import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ClientShowcase from './components/ClientShowcase'


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
     <ServicesSection/>
     <ClientShowcase/>

       <AboutSection />
    </div>
  )
}

export default App