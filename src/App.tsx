import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import PricingPlans from './components/PricingPlans'
import Recommendations from './components/Recommendations'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#F0F0F6]">
      <Sidebar />
      <Navigation />
      
      <main className="lg:ml-80 xl:mr-28">
        <Hero />
        <Services />
        <PricingPlans />
        <Recommendations />
        <Education />
        <WorkHistory />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
