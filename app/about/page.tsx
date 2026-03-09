"use client"

import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
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
      <Navbar />

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
        
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
              Who <span className="text-amber-500">We Are</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              Driven by passion, defined by purpose — building trust and delivering excellence every step of the way.
            </p>
            <a href="/contact" className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-500 transition-all duration-300 text-sm sm:text-base">
              WORK WITH US
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
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
      <section className="relative w-full bg-white py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">Vision & Mission</h2>
            <p className="text-lg text-neutral-600">Guiding principles that drive our success</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Vision</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To redefine how India buys homes by building a ₹1000 crore enterprise that creates premium, sustainable, and affordable spaces.
              </p>
            </div>

            <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To deliver innovative and cost-effective project experiences that engage audiences and accelerate conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full bg-neutral-50 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">Core Values</h2>
            <p className="text-lg text-neutral-600">The principles that define who we are</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Innovation", desc: "Constantly reimagining experiences with fresh ideas." },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: "Quality", desc: "Maintaining uncompromising standards in everything we deliver." },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Integrity", desc: "Building trust through transparency and accountability." },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: "Customer Focus", desc: "Putting client goals at the heart of every project." },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Efficiency", desc: "Ensuring timely, seamless execution with maximum impact." }
            ].map((value, i) => (
              <div key={i} className="group text-center p-6 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{value.desc}</p>
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
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                        style={{
                          backgroundImage: `url('${spec.image}')`,
                          transform: `translateY(${-scrollY * 0.03}px) scale(1.1)`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4">{spec.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 sm:space-y-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                      <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed">
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
