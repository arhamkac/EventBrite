"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
  return (
    <div className="relative min-h-screen bg-neutral-50">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Our <span className="text-amber-500">Expertise</span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-white/90 drop-shadow-lg">
            Comprehensive design, build, and exhibit solutions that transform ideas into impactful real estate experiences.
          </p>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {EXPERTISE_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="lg:w-1/2 relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{item.title}</h2>
                <p className="text-neutral-600 leading-relaxed text-lg mb-4">{item.description}</p>
                {item.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-600">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
