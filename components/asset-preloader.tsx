"use client"

import { useEffect, useState } from "react"

const VIDEOS = [
  "/videos/Rustomjee (Dombivli).mp4",
  "/videos/contact-bg.mp4",
  "/videos/clients-bg.mp4",
  "/videos/projects-bg.mp4",
  "/videos/services-bg.mp4",
  "/videos/about-bg.mp4",
]

const IMAGES = [
  "/images/logo.webp",
  "/images/hero-project.jpg",
]

export function AssetPreloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const preloadAssets = async () => {
      const promises: Promise<void>[] = []

      // Preload videos
      VIDEOS.forEach((src) => {
        const promise = new Promise<void>((resolve) => {
          const video = document.createElement("video")
          video.src = src
          video.preload = "auto"
          video.onloadeddata = () => resolve()
          video.onerror = () => resolve() // Continue even if one fails
        })
        promises.push(promise)
      })

      // Preload images
      IMAGES.forEach((src) => {
        const promise = new Promise<void>((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => resolve() // Continue even if one fails
        })
        promises.push(promise)
      })

      await Promise.all(promises)
      setLoaded(true)
    }

    preloadAssets()
  }, [])

  return null
}
