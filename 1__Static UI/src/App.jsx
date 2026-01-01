import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            image="https://placehold.co/400x250/3b82f6/ffffff"
            title="Web Development"
            description="Build modern, responsive websites with the latest technologies and best practices."
          />
          <Card
            image="https://placehold.co/400x250/8b5cf6/ffffff"
            title="Mobile Apps"
            description="Create beautiful native and cross-platform mobile applications for iOS and Android."
          />
          <Card
            image="https://placehold.co/400x250/ec4899/ffffff"
            title="UI/UX Design"
            description="Design intuitive user interfaces and delightful user experiences for your products."
          />
        </div>
      </section>
    </div>
  )
}

export default App