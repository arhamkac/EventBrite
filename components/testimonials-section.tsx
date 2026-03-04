"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Neha Sharma",
    role: "Marketing Director, Godrej Properties",
    avatar: "N",
    color: "bg-purple-600",
    text: "Eventbrite focuses on creating sales lounges that are both functional and visually strong. The design, finish, and customer flow were well thought out, leading to better engagement and longer customer interactions, which positively impacted our sales."
  },
  {
    name: "Amit Verma",
    role: "Sales Head, Oberoi Realty",
    avatar: "A",
    color: "bg-pink-600",
    text: "Eventbrite has a clear understanding of how sales environments impact buyer decisions. From concept to final execution, the team delivered a premium sales lounge that strengthened our brand and supported faster closures. The quality of work and attention to detail were excellent."
  },
  {
    name: "Rajesh Kumar",
    role: "Project Manager, Piramal Realty",
    avatar: "R",
    color: "bg-blue-600",
    text: "Working with Eventbrite was a seamless experience. Their team understood our vision and translated it into a stunning experience center that exceeded our expectations. The professionalism and dedication were remarkable."
  },
  {
    name: "Priya Desai",
    role: "CEO, Omkar Realtors",
    avatar: "P",
    color: "bg-green-600",
    text: "The transformation of our sales office was incredible. Eventbrite's innovative approach and meticulous execution created a space that not only looks impressive but also drives results. Highly recommended for any real estate marketing needs."
  },
  {
    name: "Vikram Singh",
    role: "Director, UK Realty",
    avatar: "V",
    color: "bg-amber-600",
    text: "Exceptional craftsmanship and attention to detail. Eventbrite delivered our project on time and within budget, while maintaining the highest quality standards. Their team's expertise in real estate marketing is unmatched."
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section ref={containerRef} className="relative w-full bg-neutral-900 py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,154,89,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: Math.min(scrollProgress * 2, 1),
            transform: `translateY(${Math.max(0, 30 - scrollProgress * 60)}px)`
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-amber-500">Testimonial</span>
            <br />
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real stories from the people whose moments we've made unforgettable.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 p-3 rounded-full bg-neutral-800 text-white hover:bg-amber-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 p-3 rounded-full bg-neutral-800 text-white hover:bg-amber-600 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative min-h-[400px] flex items-center">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-neutral-700/50 hover:border-amber-500/50 transition-colors duration-500">
                  <Quote className="w-12 h-12 text-amber-500 mb-6" />
                  
                  <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xl font-bold`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-amber-400 font-bold text-lg italic">{testimonial.name}</h4>
                      <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-500 w-8" : "bg-neutral-600 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
