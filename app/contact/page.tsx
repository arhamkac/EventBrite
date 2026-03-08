"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ContactPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Let's create something extraordinary together
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left: Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-neutral-900 mb-4">Visit Our Office</h2>
                  <p className="text-neutral-600 text-lg">
                    We're here to help bring your vision to life
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://maps.google.com/?cid=6948313269780121510" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-6 bg-neutral-50 hover:bg-amber-50 rounded-2xl transition-all border border-neutral-200 hover:border-amber-300"
                  >
                    <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Head Office</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        F-74, F-75, F-76, first floor<br />
                        Kohinoor City Mall, LBS Road<br />
                        Kurla, Mumbai - 400070
                      </p>
                    </div>
                  </a>

                  <a href="tel:+919833854321" className="group flex items-start gap-4 p-6 bg-neutral-50 hover:bg-amber-50 rounded-2xl transition-all border border-neutral-200 hover:border-amber-300">
                    <Phone className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Phone</h3>
                      <p className="text-neutral-600">+91 9833854321</p>
                    </div>
                  </a>

                  <a href="mailto:info@event-brite.in" className="group flex items-start gap-4 p-6 bg-neutral-50 hover:bg-amber-50 rounded-2xl transition-all border border-neutral-200 hover:border-amber-300">
                    <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
                      <p className="text-neutral-600">info@event-brite.in</p>
                    </div>
                  </a>
                </div>

                {/* Team */}
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-neutral-900">Muzammil Siddiqui</p>
                      <p className="text-sm text-neutral-600 mt-1">+91 9833854321</p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-neutral-900">Swad Sayyed</p>
                      <p className="text-sm text-neutral-600 mt-1">+91 9867799878</p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-neutral-900">Mubasshir Siddiqui</p>
                      <p className="text-sm text-neutral-600 mt-1">+91 9833848009</p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                      <p className="font-semibold text-neutral-900">Talha Siddiqui</p>
                      <p className="text-sm text-neutral-600 mt-1">+91 8779511076</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 h-[600px] lg:h-[700px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267891234567!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5e5e5e5e5%3A0x606e5e5e5e5e5e5e!2sKohinoor%20City%20Mall!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EventBrite Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
