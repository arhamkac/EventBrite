"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef, useState } from "react"

const EXPERTISE_ITEMS = [
  { 
    id: 1, 
    title: "Experience Centre", 
    description: "Step into immersive Experience Centres where model displays, VR, lighting, and films bring your project's story and lifestyle to life.",
    features: [],
    image: "/images/godrej-1.webp"
  },
  { 
    id: 2, 
    title: "Marketing Office", 
    description: "The command center of your sales campaign. Unlike the customer-facing gallery, the Marketing Office is where your sales and marketing teams work, plan, and execute. Designed for efficiency, it includes branded interiors, workstations, and collaboration spaces—helping your team drive faster conversions and smoother operations.",
    features: [],
    image: "/images/raheja-1.webp"
  },
  { 
    id: 3, 
    title: "Project Office", 
    description: "Your on-site headquarters for project teams. A Project Office brings engineers, architects, site supervisors, and contractors together under one roof, ensuring seamless coordination. Smart layouts, storage for drawings, and collaborative meeting areas keep project execution organized and on track.",
    features: [],
    image: "/images/kalpataru-1.webp"
  },
  { 
    id: 4, 
    title: "Show Apartment", 
    description: "A fully furnished, ready-to-experience home that lets buyers walk through their future lifestyle. Every detail—from furniture and décor to lighting and accessories—is carefully curated to spark aspiration. Prospects don't just see the apartment—they imagine living there.",
    features: [],
    image: "/images/kanchan-1.webp"
  },
  { 
    id: 5, 
    title: "Sample-Up Apartment", 
    description: "A hybrid between a raw unit and a fully done show flat. Customers see actual construction quality, layouts, and finishes as delivered by the developer, building trust and transparency while allowing light staging to highlight key spaces.",
    features: [],
    image: "/images/ashford-1.webp"
  },
  { 
    id: 6, 
    title: "Sample Apartment", 
    description: "The simplest version of an apartment mock-up usually unfurnished, with basic flooring, walls, and fittings. Its purpose is to demonstrate exact dimensions, layouts, and specifications, providing clarity for practical buyers before commitment.",
    features: [],
    image: "/images/rustomjee-1.webp"
  },
  { 
    id: 7, 
    title: "Project Infrastructure Branding", 
    description: "We transform construction infrastructure into powerful brand statements. From site barricades and entry gates to branded walkways and towering hoardings, every structure reinforces your project identity. Durable materials and striking design ensure your site becomes a professional, safe, and highly visible landmark.",
    features: [],
    image: "/images/godrej-4.webp"
  },
  { 
    id: 8, 
    title: "Site Branding & Signage", 
    description: "Your project deserves to stand out from the first glance. Our site branding includes hoardings, gantries, directional signs, and branded panels, ensuring visitors experience your brand with clarity and impact. Durable and weatherproof, our signage keeps your project visible, memorable, and welcoming.",
    features: [
      "Full-site hoardings and billboards",
      "Project logo and identity graphics",
      "Directional wayfinding systems",
      "Branded barriers and panels",
      "Printed and digital signage"
    ],
    image: "/images/raheja-4.webp"
  },
  { 
    id: 9, 
    title: "Channel Partner Meet / Event", 
    description: "Engage your sales channel with interactive broker and partner events. We plan and execute tailored experiences whether immersive showcases, themed conferences, or appreciation galas integrating brand storytelling with hands-on demos.",
    features: [
      "Themed launch conferences",
      "Interactive display zones (photo/VR booths, quizzes)",
      "Custom staging and AV",
      "Full hospitality and logistics"
    ],
    image: "/images/kalpataru-4.webp"
  },
  { 
    id: 10, 
    title: "Signature Lounge", 
    description: "A luxury lounge with plush interiors and premium branding, designed to inspire trust, comfort, and confident decision-making.",
    features: [],
    image: "/images/project-3.jpg"
  },
  { 
    id: 11, 
    title: "Bhoomi Poojan", 
    description: "We manage every detail of your Bhoomi Poojan and inauguration events with elegance and reverence. From ceremonial mandaps and décor to arranging priests and puja materials, every aspect is thoughtfully planned. We also ensure warm guest experiences and seamless event flow, making the ceremony meaningful and memorable.",
    features: [],
    image: "/images/ashford-4.webp"
  },
  { 
    id: 12, 
    title: "Temporary Structures & Utilities", 
    description: "Outfit any event or sales campaign with turnkey rental structures and utilities. We provide German Hanger tents, Pagoda marquees, Octonorm booths, and other temporary setups, along with full power, lighting, and climate control. Each structure is customized for your event's scale and style.",
    features: [
      "Transparent German Hanger & Pagoda tents",
      "Modular Octonorm booths and walls",
      "Air-conditioning and power rental",
      "Branded event flooring and ceilings",
      "Safety-certified installation"
    ],
    image: "/images/ashford-6.webp"
  },
]

export default function ExpertisePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollSectionRef.current) {
        const rect = scrollSectionRef.current.getBoundingClientRect()
        const scrolled = -rect.top
        const sectionHeight = rect.height
        const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)))
        
        // Smoother image transition calculation
        const exactIndex = progress * (EXPERTISE_ITEMS.length - 1)
        const imageIndex = Math.round(exactIndex)
        setCurrentImageIndex(Math.min(imageIndex, EXPERTISE_ITEMS.length - 1))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Video Section - Full Screen */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/services-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Our Expertise
            </h1>
            <p className="max-w-3xl text-xl text-white/90">
              Comprehensive design, build, and exhibit solutions that transform ideas into impactful real estate experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Background Images Section */}
      <section ref={scrollSectionRef} className="relative min-h-[600vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Images */}
          {EXPERTISE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: currentImageIndex === index ? 1 : 0 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>
          ))}

          {/* Text Overlay - Left Aligned */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="max-w-3xl space-y-4 sm:space-y-6">
                <div className="overflow-hidden">
                  <h2 
                    key={`title-${currentImageIndex}`}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight animate-fade-in"
                  >
                    {EXPERTISE_ITEMS[currentImageIndex].title}
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <p 
                    key={`desc-${currentImageIndex}`}
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 leading-relaxed font-light animate-fade-in-delay"
                  >
                    {EXPERTISE_ITEMS[currentImageIndex].description}
                  </p>
                </div>
                <div className="pt-2 sm:pt-4">
                  <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-white/80 text-xs sm:text-sm font-medium">
                      {currentImageIndex + 1} / {EXPERTISE_ITEMS.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
