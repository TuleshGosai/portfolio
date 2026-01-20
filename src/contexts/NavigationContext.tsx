/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export interface NavigationContextType {
  activeSection: string
  setActiveSection: (section: string) => void
  scrollToSection: (id: string) => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [activeSection, setActiveSection] = useState('home')

  // Scroll to section function
  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      // Calculate offset for fixed navigation (64px nav + 16px padding)
      const navHeight = 64
      const offset = 16
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Update URL hash without triggering scroll
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${id}`)
      }
    }
  }, [])

  // Handle initial hash navigation and hash changes (for SPA routing)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['home', 'services', 'blog', 'contact'].includes(hash)) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const navHeight = 64
            const offset = 16
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navHeight - offset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            setActiveSection(hash)
          }
        }, 100)
      }
    }

    // Handle initial load with hash
    if (window.location.hash) {
      handleHashChange()
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Scroll spy: Detect which section is currently in view
  useEffect(() => {
    const sections = ['home', 'services', 'blog', 'contact']
    const navHeight = 64 // Height of fixed navigation (16 * 4 = 64px)
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + navHeight + 50 // Offset for better detection
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        
        if (element) {
          const elementTop = element.offsetTop
          if (scrollPosition >= elementTop) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      
      // Default to home if at top
      setActiveSection('home')
    }

    // Initial check
    updateActiveSection()

    // Listen to scroll events
    const handleScroll = () => {
      updateActiveSection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Also use Intersection Observer as a backup for better accuracy
    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight}px 0px -60% 0px`,
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      })
    }, 100)

    // Cleanup
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.displayName = 'NavigationProvider'
