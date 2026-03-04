"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

const SERVICES = [
  {
    id: 1,
    title: "Experience Centre",
    description: "Immersive spaces that bring your brand story to life, creating unforgettable customer journeys through innovative design and technology.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    features: ["Interactive Displays", "Brand Storytelling", "Customer Engagement"]
  },
  {
    id: 2,
    title: "Marketing Office",
    description: "Strategic spaces designed to showcase your projects with impact, combining aesthetics with functionality to drive sales success.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    features: ["Sales Strategy", "Visual Merchandising", "Client Presentations"]
  },
  {
    id: 3,
    title: "Project Office",
    description: "Professional workspaces that enhance productivity and collaboration, tailored to your project's unique requirements and workflow.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    features: ["Workspace Design", "Team Collaboration", "Efficient Layouts"]
  },
  {
    id: 4,
    title: "Show Apartment",
    description: "Stunning model homes that inspire buyers, showcasing lifestyle possibilities through meticulous design and premium finishes.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    features: ["Interior Styling", "Lifestyle Curation", "Buyer Experience"]
  },
  {
    id: 5,
    title: "Sample-Up Apartment",
    description: "Detailed sample spaces demonstrating quality and craftsmanship, helping buyers visualize their future home with confidence.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: ["Material Showcase", "Quality Display", "Finish Options"]
  }
]

export function ServicesSection() {
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
    <section ref={containerRef} className="relative w-full bg-neutral-50 py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div 
          className="text-center space-y-6"
          style={{
            opacity: Math.min(scrollProgress * 2, 1),
            transform: `translateY(${Math.max(0, 30 - scrollProgress * 60)}px)`
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full border border-amber-200/50">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight">
            Services That Spark<br />Creativity
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Crafting memorable moments through our bespoke services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
              style={{
                opacity: Math.min((scrollProgress - index * 0.1) * 2, 1),
                transform: `translateY(${Math.max(0, 50 - (scrollProgress - index * 0.1) * 100)}px)`
              }}
            >
              {/* Image */}
              <div className={`relative group ${isEven ? '' : 'lg:col-start-2'}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                <div className="inline-block px-4 py-1 bg-amber-100 rounded-full">
                  <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                    0{service.id}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-all duration-300 hover:gap-4">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div 
        className="max-w-7xl mx-auto mt-32 text-center"
        style={{
          opacity: Math.min((scrollProgress - 0.5) * 2, 1),
          transform: `translateY(${Math.max(0, 30 - (scrollProgress - 0.5) * 60)}px)`
        }}
      >
        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-500 transition-all duration-300 hover:gap-4 shadow-lg shadow-amber-600/30">
          VIEW ALL SERVICES
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
