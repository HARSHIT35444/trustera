"use client"

import { useState, useEffect, SetStateAction } from 'react'
import { ChevronLeft, ChevronRight, MapPin, FileText, DollarSign, TrendingUp, Calculator, Award } from 'lucide-react'

const StatsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const statsData = [
    {
      id: 1,
      icon: MapPin,
      number: "7+",
      unit: "YEARS",
      description: "OF JOURNEY",
      name: "Rajesh Kumar",
      designation: "Founder & CEO"
    },
    {
      id: 2,
      icon: FileText,
      number: "4000+",
      unit: "",
      description: "CURRENT PROJECTS",
      name: "Priya Sharma",
      designation: "Project Manager"
    },
    {
      id: 3,
      icon: DollarSign,
      number: "₹103 CR+",
      unit: "",
      description: "FUNDS GRANTED TO AGRICULTURE",
      name: "Amit Patel",
      designation: "Finance Director"
    },
    {
      id: 4,
      icon: TrendingUp,
      number: "57 CR+",
      unit: "",
      description: "SEED FUNDS SECURED BUSINESSES",
      name: "Sneha Gupta",
      designation: "Investment Head"
    },
    {
      id: 5,
      icon: Calculator,
      number: "1500+",
      unit: "",
      description: "TAX EXEMPTION TO CLIENTS",
      name: "Vikram Singh",
      designation: "Tax Consultant"
    },
    {
      id: 6,
      icon: Award,
      number: "22,700+",
      unit: "",
      description: "STARTUPS RECOGNIZED BY GOVERNMENT",
      name: "Anita Desai",
      designation: "Startup Advisor"
    },
    {
      id: 7,
      icon: MapPin,
      number: "500+",
      unit: "CLIENTS",
      description: "SATISFIED CUSTOMERS WORLDWIDE",
      name: "Rohit Sharma",
      designation: "Customer Success Manager"
    },
    {
      id: 8,
      icon: Award,
      number: "95%",
      unit: "SUCCESS",
      description: "PROJECT COMPLETION RATE",
      name: "Kavya Nair",
      designation: "Quality Assurance Lead"
    }
  ]

  const itemsPerView = 4 // Show 4 items for better visibility
  const maxIndex = Math.max(0, statsData.length - itemsPerView)

  // Enhanced auto-slide with better logic
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          // Reset to 0 when reaching the end
          return nextIndex > maxIndex ? 0 : nextIndex
        })
      }, 3000) // 3 seconds
      
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, maxIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setIsAutoPlaying(false) // Pause auto-play when manually navigating
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setIsAutoPlaying(false) // Pause auto-play when manually navigating
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our journey of success through numbers and the dedicated team behind it
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="mx-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {statsData.map((stat) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={stat.id}
                    className="w-1/4 flex-shrink-0 px-3"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-8 h-full hover:shadow-3xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                      {/* Icon and Corner Accent */}
                      <div className="relative mb-6">
                        <div className="absolute top-0 right-0 w-8 h-8">
                          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 transform rotate-45 origin-bottom-left rounded-sm"></div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-cyan-600" />
                        </div>
                      </div>

                      {/* Statistics */}
                      <div className="mb-6">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        {stat.unit && (
                          <div className="text-base font-bold text-gray-700 mb-3">
                            {stat.unit}
                          </div>
                        )}
                        <div className="text-sm font-semibold text-gray-600 leading-relaxed">
                          {stat.description}
                        </div>
                      </div>

                      {/* Name and Designation */}
                      <div className="border-t border-gray-200 pt-4 bg-gradient-to-r from-gray-50 to-blue-50 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl">
                        <div className="text-base font-bold text-gray-800">
                          {stat.name}
                        </div>
                        <div className="text-sm text-purple-600 font-medium">
                          {stat.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 shadow-lg' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsCarousel