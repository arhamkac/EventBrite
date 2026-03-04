"use client"

import { Navbar } from "@/components/navbar"
import { HeroInfo } from "@/components/hero-info"

interface LandingOverlayProps {
  visible: boolean
}

/**
 * The landing page UI that fades in on top of the frozen video frame.
 * Contains the navigation bar, a subtle gradient overlay for text contrast,
 * and the project info / CTA at the bottom.
 *
 * When `visible` is false the overlay is transparent and non-interactive.
 */
export function LandingOverlay({ visible }: LandingOverlayProps) {
  return (
    <div
      className={`absolute inset-0 z-30 transition-opacity duration-1000 ease-out ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {/* Gradient overlays for text contrast against the video background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background/60 to-transparent" />
      <div className="absolute inset-0 bg-background/15" />

      {/* Navigation */}
      <Navbar />

      {/* Bottom project info */}
      <HeroInfo />
    </div>
  )
}
