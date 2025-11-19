"use client"

import { useEffect, useState } from "react"

interface ImagePreloaderProps {
  images: string[]
  onAllLoaded?: () => void
  children: React.ReactNode
}

export function ImagePreloader({ images, onAllLoaded, children }: ImagePreloaderProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)

  useEffect(() => {
    if (images.length === 0) {
      setImagesLoaded(true)
      onAllLoaded?.()
      return
    }

    let loaded = 0
    const imageObjects: HTMLImageElement[] = []

    const handleImageLoad = () => {
      loaded++
      setLoadedCount(loaded)
      if (loaded === images.length) {
        setImagesLoaded(true)
        onAllLoaded?.()
      }
    }

    const handleImageError = () => {
      loaded++
      setLoadedCount(loaded)
      if (loaded === images.length) {
        setImagesLoaded(true)
        onAllLoaded?.()
      }
    }

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = handleImageLoad
      img.onerror = handleImageError
      imageObjects.push(img)
    })

    return () => {
      imageObjects.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [images, onAllLoaded])

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">
            Loading images... {loadedCount}/{images.length}
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

