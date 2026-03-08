"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const CLIENTS = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  logo: `/images/clients/client-${i + 1}.webp`
}))

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current) return
    const { top } = containerRef.current.getBoundingClientRect()
    const progress = (window.innerHeight - top) / window.innerHeight
    setScrollProgress(Math.max(0, Math.min(progress, 1)))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress, { passive: true })
    calculateScrollProgress()
    return () => window.removeEventListener("scroll", calculateScrollProgress)
  }, [calculateScrollProgress])

  return (
    <section ref={containerRef} className="relative w-full bg-amber-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-12"
          style={{
            opacity: Math.min(scrollProgress * 2, 1),
            transform: `translateY(${Math.max(0, 20 - scrollProgress * 40)}px)`
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-neutral-600">
            Partnering with India's most prestigious real estate brands
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {[...CLIENTS.slice(0, 20), ...CLIENTS.slice(0, 20)].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  opacity: Math.min(scrollProgress * 2, 1)
                }}
              >
                <img
                  src={client.logo}
                  alt={`Client ${client.id}`}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/clients" className="px-8 py-3 bg-neutral-900 text-white rounded-md font-semibold hover:bg-neutral-800 transition-all duration-300 inline-flex items-center gap-2">
            VIEW ALL CLIENTS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
