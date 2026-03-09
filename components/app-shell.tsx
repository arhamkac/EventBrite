"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { VideoLayer } from "@/components/video-layer"
import { LandingOverlay } from "@/components/landing-overlay"
import { VideoControls } from "@/components/video-controls"
import { HeroInfo } from "@/components/hero-info"

/**
 * AppShell orchestrates two visual layers:
 *
 * 1. VideoLayer - A fullscreen <video> that plays behind everything.
 *    When it ends or is skipped, it pauses on its final frame and becomes
 *    the hero background for the landing page.
 *
 * 2. LandingOverlay - The navbar, project info, and slide indicators
 *    that fade in on top of the frozen video frame once it finishes.
 *
 * 3. VideoControls - The skip button and progress bar shown only while
 *    the video is actively playing.
 *
 * Phase machine:
 *   "playing" -> video is running, controls visible, overlay hidden
 *   "landed"  -> video is paused on last frame, overlay visible, controls hidden
 */
type AppPhase = "playing" | "landed"

const VIDEO_SRC = "/videos/home-bg.mp4"

export function AppShell() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phase, setPhase] = useState<AppPhase>("playing")
  const [progress, setProgress] = useState(0)
  const animFrameRef = useRef<number | null>(null)

  // --- Disable scroll while video is playing ---
  useEffect(() => {
    if (phase === "playing") {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [phase])

  // --- Progress tracking via rAF (no setInterval, smoother) ---
  useEffect(() => {
    const video = videoRef.current
    if (!video || phase !== "playing") return

    const tick = () => {
      if (video.duration > 0) {
        setProgress((video.currentTime / video.duration) * 100)
      }
      animFrameRef.current = requestAnimationFrame(tick)
    }
    animFrameRef.current = requestAnimationFrame(tick)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [phase])

  // --- Transition to landed state ---
  const transitionToLanded = useCallback(() => {
    if (phase === "landed") return

    const video = videoRef.current
    if (video && !video.paused) {
      video.pause()
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = null
    }
    setProgress(100)
    setPhase("landed")
  }, [phase])

  // --- Video ended naturally ---
  const handleVideoEnded = useCallback(() => {
    const video = videoRef.current
    if (video) {
      // Seek to the beginning so the frozen background shows the start
      video.currentTime = 0
    }
    transitionToLanded()
  }, [transitionToLanded])

  // --- Skip button pressed ---
  const handleSkip = useCallback(() => {
    const video = videoRef.current
    if (video) {
      // Seek to the beginning so the frozen background shows the start
      video.currentTime = 0
    }
    transitionToLanded()
  }, [transitionToLanded])

  return (
    // avoid the 100vh bug on mobile chrome by using min-h-screen and
    // width full; this also lets the video/img scale nicely when the URL
    // bar appears/disappears.
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Layer 1: Persistent video (stays as hero background) */}
      <VideoLayer
        ref={videoRef}
        src={VIDEO_SRC}
        onEnded={handleVideoEnded}
      />

      {/* Layer 2: Controls shown only while video plays */}
      <VideoControls
        progress={progress}
        visible={phase === "playing"}
        onSkip={handleSkip}
      />

      {/* Layer 2.5: Hero Info - Always visible */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroInfo />
        </div>
      </div>

      {/* Layer 3: Landing overlay fades in once video completes */}
      <LandingOverlay visible={phase === "landed"} />
    </div>
  )
}
