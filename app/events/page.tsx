"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Briefcase } from "lucide-react"

const EVENT_CATEGORIES = [
  { id: 1, name: "Brand Launch", icon: Briefcase },
  { id: 2, name: "Corporate Event", icon: Briefcase },
  { id: 3, name: "Doctors Conference", icon: Briefcase },
  { id: 4, name: "Exhibition", icon: Briefcase },
  { id: 5, name: "Political Events", icon: Briefcase },
  { id: 6, name: "Special Events", icon: Briefcase },
  { id: 7, name: "Sports Event", icon: Briefcase },
]

const EVENTS_DATA: Record<number, Array<{ id: number; name: string; images: string[] }>> = {
  1: [
    { id: 1, name: "AUDI Q8 LAUNCH", images: ["/images/godrej-1.webp", "/images/godrej-2.webp", "/images/godrej-3.webp"] },
    { id: 2, name: "FORD ENDEAVOUR", images: ["/images/raheja-1.webp", "/images/raheja-2.webp"] },
    { id: 3, name: "JOHNSON", images: ["/images/kalpataru-1.webp", "/images/kalpataru-2.webp"] },
  ],
  2: [
    { id: 1, name: "HBD", images: ["/images/kanchan-1.webp", "/images/kanchan-2.webp"] },
    { id: 2, name: "HP 44TH FOUNDATION DAY", images: ["/images/ashford-1.webp", "/images/ashford-2.webp"] },
    { id: 3, name: "LAKSHAYA 2017", images: ["/images/rustomjee-1.webp", "/images/rustomjee-2.webp"] },
    { id: 4, name: "VIACOM", images: ["/images/godrej-3.webp", "/images/godrej-4.webp"] },
    { id: 5, name: "NDTV - SWACH DIWAS", images: ["/images/raheja-2.webp", "/images/raheja-3.webp"] },
  ],
  3: [
    { id: 1, name: "10TH INDIA LIVE", images: ["/images/kalpataru-2.webp", "/images/kalpataru-3.webp"] },
    { id: 2, name: "DOCTOR SHOW", images: ["/images/kanchan-2.webp", "/images/kanchan-3.webp"] },
    { id: 3, name: "INTERNATIONAL DOCTORS CONFERENCE – THE LEELA, GOA", images: ["/images/ashford-2.webp", "/images/ashford-3.webp"] },
    { id: 4, name: "PEDICON - BKC", images: ["/images/rustomjee-2.webp", "/images/project-2.jpg"] },
  ],
  4: [
    { id: 1, name: "BORIVALI CARRER VISION", images: ["/images/ashford-3.webp", "/images/ashford-4.webp"] },
    { id: 2, name: "IIP MUMBAI", images: ["/images/project-2.jpg", "/images/project-3.jpg"] },
    { id: 3, name: "MAZGAON DOCK SHIPBUILDERS", images: ["/images/project-3.jpg", "/images/hero-project.jpg"] },
    { id: 4, name: "POLITICAL EVENT", images: ["/images/hero-project.jpg", "/images/ashford-5.webp", "/images/ashford-6.webp"] },
  ],
  5: [
    { id: 1, name: "BORIVALI CARRER VISION", images: ["/images/godrej-4.webp", "/images/godrej-5.webp"] },
    { id: 2, name: "IIP MUMBAI", images: ["/images/raheja-3.webp", "/images/raheja-4.webp"] },
    { id: 3, name: "MAZGAON DOCK SHIPBUILDERS", images: ["/images/kalpataru-3.webp", "/images/kalpataru-4.webp"] },
  ],
  6: [
    { id: 1, name: "SPECIAL EVENT 1", images: ["/images/raheja-4.webp", "/images/raheja-5.webp"] },
    { id: 2, name: "SPECIAL EVENT 2", images: ["/images/kanchan-4.webp", "/images/ashford-6.webp"] },
  ],
  7: [
    { id: 1, name: "DABANG SPORTS EVENT", images: ["/images/kalpataru-4.webp", "/images/kanchan-3.webp"] },
    { id: 2, name: "DELHI CAPITALS AFTER PARTY", images: ["/images/kanchan-4.webp", "/images/godrej-5.webp"] },
    { id: 3, name: "NATIONAL GAME - SPORT COMPLEX BHAVNAGAR - GUJRAT", images: ["/images/ashford-4.webp", "/images/ashford-6.webp", "/images/ashford-5.webp"] },
  ],
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({})

  const handlePrevImage = (eventId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const handleNextImage = (eventId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) + 1) % totalImages
    }))
  }

  return (
    <div className="relative min-h-screen bg-neutral-50">
      <Navbar />
      
      {/* Video Background Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/events-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Events Executed
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 font-light">
              Transforming visions into unforgettable experiences across diverse event categories
            </p>
          </div>
        </div>
      </section>

      {/* Events Content Section */}
      <section className="relative min-h-screen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar - Event Categories */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-3">
                {EVENT_CATEGORIES.map((category) => {
                  const Icon = category.icon
                  const isActive = selectedCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-neutral-900 text-white shadow-xl border-l-4 border-amber-500"
                          : "bg-white text-neutral-700 hover:bg-neutral-100 border-l-4 border-transparent"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-left">{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </aside>

            {/* Main Content - Event Grid */}
            <main className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {EVENTS_DATA[selectedCategory]?.map((event) => {
                  const currentIndex = currentImageIndices[event.id] || 0
                  const hasMultipleImages = event.images.length > 1
                  
                  return (
                    <div
                      key={event.id}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                        <img
                          src={event.images[currentIndex]}
                          alt={event.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Navigation Arrows */}
                        {hasMultipleImages && (
                          <>
                            <button
                              onClick={() => handlePrevImage(event.id, event.images.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                              aria-label="Previous image"
                            >
                              ‹
                            </button>
                            <button
                              onClick={() => handleNextImage(event.id, event.images.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                              aria-label="Next image"
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>

                      {/* Event Info */}
                      <div className="p-5">
                        <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide leading-tight">
                          {event.name}
                        </h3>
                        {hasMultipleImages && (
                          <div className="flex gap-1.5 mt-3">
                            {event.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  idx === currentIndex ? "bg-amber-500 flex-1" : "bg-neutral-300 w-8"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
