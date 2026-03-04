"use client"

import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Professionals" },
  { value: "35K", label: "Sq. Ft. Facility" },
  { value: "100+", label: "Projects" }
]

const SPECIALIZATIONS = [
  {
    title: "Design",
    description: "Our dedicated Design Team works relentlessly to craft innovative layouts and event structures, ensuring every element is thoughtfully planned. With a keen eye for detail, we curate designs that balance creativity with functionality, delivering experiences that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
  },
  {
    title: "Fabrication",
    description: "Our state-of-the-art fabrication facility brings designs to life with precision and quality. From concept to construction, we ensure every piece is crafted to perfection, meeting the highest standards of durability and aesthetics.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
  },
  {
    title: "Execution",
    description: "Seamless execution is our hallmark. Our experienced team manages every aspect of project delivery, ensuring timely completion without compromising on quality. We handle logistics, installation, and on-site coordination with meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
  }
]

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const specializationRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(SPECIALIZATIONS.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = specializationRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    specializationRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-12 max-w-7xl mx-auto">
          <a href="/" className="flex items-center">
            <img src="/images/logo.webp" alt="EventBrite" className="h-8 md:h-10" />
          </a>
          <div className="flex items-center gap-8">
            <a href="/#projects" className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors">
              Projects
            </a>
            <a href="/#services" className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="/#contact" className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Video Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Who <span className="text-amber-500">We Are</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Driven by passion, defined by purpose — building trust and delivering excellence every step of the way.
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-500 transition-all duration-300">
              WORK WITH US
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative w-full bg-neutral-50 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-2xl"></div>
              <img src="/images/about.webp" alt="Eventbrite office spaces" className="relative w-full h-auto rounded-2xl shadow-2xl" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-4 leading-tight">
                  About Eventbrite
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                <p>
                  For over a decade, Eventbrite has been at the forefront of India's real estate marketing industry. Starting as a turnkey exhibition contractor, we have grown into a trusted design-build partner, shaping landmark experiences for leading developers.
                </p>
                <p>
                  Based in Mumbai, we operate a 35,000 sq. ft. fabrication facility with over 200 skilled professionals, ensuring flawless execution. From visionary concepts to ready-to-use sales spaces, we manage every step so you can focus on selling.
                </p>
                <p>
                  With a unique blend of storytelling and design expertise, we create premium sales environments that inspire confidence, capture buyer attention, and deliver real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative w-full bg-black py-32 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-900"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-24">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-neutral-900/80 backdrop-blur-xl p-12 rounded-3xl border border-neutral-800 hover:border-amber-500/50 transition-all duration-500">
                <div className="text-6xl mb-8">👁️</div>
                <h3 className="text-3xl font-bold text-white mb-6">Vision</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  To redefine how India buys homes by building a ₹1000 crore enterprise that creates premium, sustainable, and affordable spaces.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-neutral-900/80 backdrop-blur-xl p-12 rounded-3xl border border-neutral-800 hover:border-amber-500/50 transition-all duration-500">
                <div className="text-6xl mb-8">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-6">Mission</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  To deliver innovative and cost-effective project experiences that engage audiences and accelerate conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full bg-neutral-50 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-4">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: "💡", title: "Innovation", desc: "Fresh ideas" },
              { icon: "⭐", title: "Quality", desc: "Uncompromising standards" },
              { icon: "🤝", title: "Integrity", desc: "Building trust" },
              { icon: "👥", title: "Customer Focus", desc: "Client-first approach" },
              { icon: "⚡", title: "Efficiency", desc: "Maximum impact" }
            ].map((value, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                    <span className="text-5xl">{value.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialization Section */}
      <section className="relative w-full bg-black py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-24">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">What We Do Best</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">Our Specialization</h2>
          </div>

          <div className="space-y-24">
            {SPECIALIZATIONS.map((spec, index) => (
              <div
                key={index}
                ref={el => specializationRefs.current[index] = el}
                className={`transition-all duration-1000 ease-out ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                  {/* Image with Parallax */}
                  <div 
                    className={`relative group ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative h-[600px] rounded-3xl overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                        style={{
                          backgroundImage: `url('${spec.image}')`,
                          transform: `translateY(${-scrollY * 0.03}px) scale(1.1)`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-12">
                        <h3 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4">{spec.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="space-y-6">
                      <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                      <p className="text-neutral-300 text-xl leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
