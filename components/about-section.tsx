"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Professionals" },
  { value: "35K", label: "Sq. Ft. Facility" },
  { value: "100+", label: "Projects" }
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const offset = Math.max(0, Math.min(window.innerHeight - rect.top, 400))
        setScrollY(offset)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px]"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[100px]"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.04}px)` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image with subtle parallax */}
          <div 
            className="relative order-2 lg:order-1"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-amber-500/20">
              <img
                src="/images/eb-1.webp"
                alt="Eventbrite office interior"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Content with subtle parallax */}
          <div 
            className="space-y-10 order-1 lg:order-2"
            style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-900/30 to-amber-800/20 rounded-full border border-amber-700/30"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Who We Are</span>
            </div>

            <div className="space-y-4">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
              >
                <span className="block text-amber-500">About</span>
                <span className="block text-white">Eventbrite</span>
              </h2>
            </div>

            <div 
              className="space-y-6 text-neutral-300 leading-relaxed max-w-xl"
            >
              <p className="text-lg">
                For over a decade, <span className="text-white font-semibold">Eventbrite</span> has been at the forefront of India's 
                real estate marketing industry. Starting as a turnkey exhibition 
                contractor, we have grown into a trusted design-build partner.
              </p>
              
              <p className="text-lg">
                Based in Mumbai, we operate a <span className="text-amber-400 font-semibold">35,000 sq. ft. facility</span> 
                with over 200 skilled professionals, ensuring flawless execution 
                from concept to completion.
              </p>
            </div>

            <div 
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {STATS.map((stat, i) => (
                <div 
                  key={i} 
                  className="group p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <p className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <a 
              href="/about" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-500 transition-all duration-300 hover:gap-4 hover:shadow-xl hover:shadow-amber-600/30"
            >
              VIEW MORE
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
