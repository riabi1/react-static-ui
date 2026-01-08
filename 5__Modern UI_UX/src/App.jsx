import CTA from './layout/CTA'
import Features from './layout/Features'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import Navigation from './layout/Navigation'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
