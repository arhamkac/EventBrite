"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const CLIENTS = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  image: `/clients/client-${i + 1}.webp`
}))

export default function ClientsPage() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Esteemed <span className="text-amber-500">Clients</span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-white/95 mb-8 drop-shadow-lg">
            Celebrating collaborations with industry leaders who trust us to bring their vision to life.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 shadow-xl">
            LET'S TALK
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Clients Grid with Parallax */}
      <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 md:gap-10">
            {CLIENTS.map((client, index) => {
              const row = Math.floor(index / 8)
              const parallaxSpeed = (row % 3) * 0.015
              const translateY = scrollY * parallaxSpeed
              
              return (
                <div
                  key={client.id}
                  className="relative aspect-square bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    transform: `translateY(${translateY}px)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <img
                      src={client.image}
                      alt={`Client ${client.id}`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
