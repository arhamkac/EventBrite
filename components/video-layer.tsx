"use client"

import { forwardRef } from "react"

interface VideoLayerProps {
  src: string
  onEnded: () => void
}

/**
 * Full-screen background video.
 * Uses forwardRef so AppShell can control playback (pause, seek).
 * The video is never removed from the DOM -- it simply freezes on its
 * final frame and becomes the landing page hero background.
 */
export const VideoLayer = forwardRef<HTMLVideoElement, VideoLayerProps>(
  function VideoLayer({ src, onEnded }, ref) {
    // Always render the video; mobile phones should play too. We keep a
    // poster image so the initial frame is visible while the file loads and
    // in case autoplay is blocked – the native controls will appear.
    return (
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-project.jpg"
        onEnded={onEnded}
        aria-label="Architectural showcase video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }
)
