import { useEffect, useRef, useState, type FC } from 'react'

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  height?: string
}

// Google Maps types
interface GoogleMaps {
  maps: {
    Map: new (element: HTMLElement, options: {
      center: { lat: number; lng: number }
      zoom: number
      mapTypeControl?: boolean
      streetViewControl?: boolean
      fullscreenControl?: boolean
      zoomControl?: boolean
    }) => unknown
    Marker: new (options: {
      position: { lat: number; lng: number }
      map: unknown
      title: string
    }) => unknown
  }
}

declare global {
  interface Window {
    google?: GoogleMaps
  }
}

const GoogleMap: FC<GoogleMapProps> = ({ center, zoom = 13, height = '400px' }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  
  // Initialize state based on API key availability
  const [error, setError] = useState<string | null>(
    !GOOGLE_MAPS_API_KEY 
      ? 'Google Maps API key is not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.'
      : null
  )
  const [isLoading, setIsLoading] = useState(!!GOOGLE_MAPS_API_KEY)

  useEffect(() => {
    // Early return if no API key - state is already set correctly in useState
    if (!GOOGLE_MAPS_API_KEY) {
      return
    }

    // Check if Google Maps script is already loaded
    if (window.google && window.google.maps) {
      initializeMap()
      return
    }

    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      initializeMap()
    }
    
    script.onerror = () => {
      setError('Failed to load Google Maps. Please check your API key and ensure Maps JavaScript API is enabled.')
      setIsLoading(false)
    }
    
    document.head.appendChild(script)

    function initializeMap() {
      if (!mapRef.current || !window.google?.maps) {
        setError('Google Maps failed to initialize. Please check your API key configuration.')
        setIsLoading(false)
        return
      }

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: center,
          zoom: zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        })

        // Add marker
        new window.google.maps.Marker({
          position: center,
          map: map,
          title: 'My Location',
        })

        mapInstanceRef.current = map
        setIsLoading(false)
        setError(null)
      } catch (err) {
        console.error('Google Maps initialization error:', err)
        setError('Failed to initialize Google Maps. Please check your API key and domain restrictions.')
        setIsLoading(false)
      }
    }

    return () => {
      // Script cleanup is handled automatically
    }
  }, [center, zoom, GOOGLE_MAPS_API_KEY])

  if (error) {
    return (
      <div
        style={{ height, width: '100%' }}
        className="rounded-lg overflow-hidden bg-[#F0F0F6] border-2 border-[#2B2B2B] flex items-center justify-center p-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📍</div>
          <p className="text-[#2B2B2B] font-medium mb-2">Map Unavailable</p>
          <p className="text-sm text-[#767676] mb-4">{error}</p>
          <a
            href={`https://www.google.com/maps?q=${center.lat},${center.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB400] hover:underline text-sm"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative" style={{ height, width: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F0F0F6] flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-[#FFB400] border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-[#767676]">Loading map...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        style={{ height, width: '100%' }}
        className="rounded-lg overflow-hidden"
      />
    </div>
  )
}

export default GoogleMap
