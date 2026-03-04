"use client"

import { useEffect, useRef, useState } from "react"
import { Plus, Send } from "lucide-react"

const NAV_LINKS_LEFT = [
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
] as const

const NAV_LINKS_RIGHT = [
  { label: "ABOUT", href: "#about" },
  { label: "CAREER", href: "#career" },
] as const

export function ScrollHeader() {
  const [visible, setVisible] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollYRef.current

      // Always hide near the very top so the original hero navbar
      // remains the only header in that zone.
      if (currentY < 150) {
        setVisible(false)
      } else if (delta < -5) {
        // Scrolling up with a small threshold to avoid jitter
        setVisible(true)
      } else if (delta > 0) {
        // Scrolling down – keep this header hidden
        setVisible(false)
      }

      lastScrollYRef.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-black/90 text-white backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-12"
        aria-label="Secondary main navigation"
      >
        {/* Left nav links - hidden on mobile */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {NAV_LINKS_LEFT.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon placeholder (no dropdown needed here) */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </div>
        </div>

        {/* Center logo */}
        <a
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold uppercase tracking-[0.3em] text-white md:text-xl"
          aria-label="EventBrite - Home"
        >
          EVENTBRITE
        </a>

        {/* Right nav links + CTA - hidden on mobile */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8" role="list">
            {NAV_LINKS_RIGHT.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-black transition-opacity duration-300 hover:opacity-90"
          >
            <span>{"LET'S TALK"}</span>
            <Plus size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile CTA icon */}
        <a
          href="#contact"
          className="flex items-center justify-center rounded-full bg-white p-2 text-black lg:hidden"
          aria-label="Contact"
        >
          <Send size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}

