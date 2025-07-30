'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (images.length === 0) {
    return (
      <div className="bg-gradient-to-r from-space-pink/20 to-space-pink-dark/20 border border-space-pink/30 rounded-lg h-64 flex items-center justify-center text-space-pink font-bold text-lg">
        画像準備中
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="relative h-64 bg-black/30 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="前の画像"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="次の画像"
            >
              →
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
      
      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-space-pink'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`画像 ${index + 1}に移動`}
            />
          ))}
        </div>
      )}
    </div>
  )
}