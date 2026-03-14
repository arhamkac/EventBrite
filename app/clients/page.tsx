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
    <div className="relative min-h-screen">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/clients-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6">
            Our Esteemed Clients
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Celebrating collaborations with industry leaders who trust us
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section ref={containerRef} className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Building success together with industry leaders
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-12">
            {CLIENTS.map((client) => (
                <div
                  key={client.id}
                  className="relative aspect-square bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-neutral-200"
                >
                  <div className="absolute inset-0 p-4 flex items-center justify-center">
                    <img
                      src={client.image}
                      alt={`Client ${client.id}`}
                      className={`object-contain transition-transform duration-300 hover:scale-110 ${client.id === 11 ? "w-full h-full scale-150" : "max-w-full max-h-full"}`}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
