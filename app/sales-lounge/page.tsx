"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const PROJECTS = [
  { id: 1, name: "Rustomjee", location: "Dombivli", image: "/images/rustomjee-1.webp" },
  { id: 2, name: "K. Raheja", location: "Kanjurmarg", image: "/images/raheja-1.webp" },
  { id: 3, name: "Godrej", location: "Pune", image: "/images/godrej-1.webp" },
  { id: 4, name: "Kalpataru - Aria", location: "Karjat", image: "/images/kalpataru-1.webp" },
  { id: 5, name: "Oberoi", location: "Thane", image: "/images/project-2.jpg" },
  { id: 6, name: "Runwal Gardens", location: "Dombivli", image: "/images/project-3.jpg" },
  { id: 7, name: "Kalpataru - Elitus", location: "Mulund", image: "/images/kalpataru-2.webp" },
  { id: 8, name: "Ashford", location: "Nahur", image: "/images/ashford-1.webp" },
  { id: 9, name: "Kanchan", location: "Pune", image: "/images/kanchan-1.webp" },
  { id: 10, name: "Omkar One", location: "Majawadi", image: "/images/eb-1.webp" },
  { id: 11, name: "Kalpataru Avante", location: "Hyderabad", image: "/images/kalpataru-3.webp" },
  { id: 12, name: "Darshan Group - Pestom Sagar", location: "Ghatkopar", image: "/images/hero-project.jpg" },
  { id: 13, name: "Runwal - OYT", location: "Wadala", image: "/images/kalpataru-4.webp" },
  { id: 14, name: "Kalpataru Vivant", location: "Jogeshwari", image: "/images/kanchan-2.webp" },
  { id: 15, name: "Leo - Eminence", location: "Bandra", image: "/images/kanchan-3.webp" },
  { id: 16, name: "Sunteck", location: "Thane", image: "/images/godrej-2.webp" },
  { id: 17, name: "Ground Holding - Integrated", location: "Goregoan", image: "/images/raheja-2.webp" },
  { id: 18, name: "Omkar", location: "Majaswadi", image: "/images/rustomjee-2.webp" },
  { id: 19, name: "Sayba Group - Pearl Hans", location: "Kurla", image: "/images/ashford-2.webp" },
  { id: 20, name: "Kalpataru - Srishti", location: "Mira Road", image: "/images/kanchan-4.webp" },
  { id: 21, name: "Seth Group - One Marina", location: "Marine Line", image: "/images/godrej-3.webp" },
  { id: 22, name: "Tridhatu Morya", location: "Govandi", image: "/images/raheja-3.webp" },
  { id: 23, name: "Omkar Sereno", location: "Majawadi", image: "/images/godrej-4.webp" },
  { id: 24, name: "Ukreality", location: "Jogeshwari", image: "/images/raheja-4.webp" },
]

export default function SalesLoungePage() {
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
          <source src="/videos/projects-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Gallery Section - Scrollable */}
      <section className="relative min-h-screen px-6 md:px-12 lg:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1 uppercase tracking-wide">{project.name}</h3>
                  <p className="text-sm text-neutral-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More Button */}
          <div className="text-center mt-12">
            <a 
              href="https://drive.google.com/drive/folders/1lX81Vzuk-VKDSTBaGabCgLsnsLJXRmGq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-xl"
            >
              SEE ALL PROJECTS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
