import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import Navigation from "./layout/Navigation"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ToastContainer from "./components/ToastContainer"
import SplashScreen from "./components/SplashScreen"

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-[#F0F0F6]">
      <Sidebar />
      <Navigation />
      <ToastContainer />

      <main className="lg:ml-80 xl:mr-28">
        <Home />
        <Contact />
      </main>
    </div>
  )
}

export default App
