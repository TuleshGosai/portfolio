import type { FC } from 'react'
import { useState } from 'react'
import Tooltip from '../components/Tooltip'

const Navigation: FC = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: '/icons/home.svg' },
    { id: 'services', label: 'Service', icon: '/icons/service.svg' },
    // { id: 'cv', label: 'CV', icon: '/icons/cv.svg' },
    // { id: 'portfolio', label: 'Portfolio', icon: '/icons/portfolio-icon.svg' },
    { id: 'blog', label: 'Product Highlight', icon: '/icons/blog.svg' },
    { id: 'contact', label: 'Contact', icon: '/icons/contact.svg' },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed right-0 top-0 h-screen w-28 bg-[#FAFAFA] shadow-lg z-40 hidden xl:flex flex-col items-center justify-start pt-20">
      <div className="flex flex-col items-center gap-8">
        {navItems.map((item) => (
          <Tooltip key={item.id} text={item.label} position="left">
            <button
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center gap-2 group relative"
            >
              {/* {activeSection === item.id && (
                <span className="text-xs font-medium text-black absolute -top-8">
                  {item.label}
                </span>
              )} */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  activeSection === item.id
                    ? 'bg-[#FFB400]'
                    : 'bg-transparent group-hover:bg-gray-100'
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-6 h-6 ${activeSection === item.id ? '' : 'opacity-50'}`}
                />
              </div>
            </button>
          </Tooltip>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
