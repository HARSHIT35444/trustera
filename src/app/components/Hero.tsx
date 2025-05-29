"use client"

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden h-[80vh] bg-gray-50">
      {/* Animated Wave Banner Background - Orange Section */}
      <div
        className={`
          absolute w-[120%] h-[40%] -left-[10%] top-0
          bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100
          [clip-path:polygon(0_0,100%_0,85%_80%,0_70%)]
          transition-transform duration-[2500ms] ease-out
          ${animate ? 'translate-x-0' : '-translate-x-full'}
        `}/>
      {/* Wave border animations for flag sections */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes wave-orange-border {
            0% {
              clip-path: polygon(0 0, 100% 0, 90% 70%, 87% 73%, 85% 76%, 82% 79%, 80% 82%, 0 68%);
            }
            20% {
              clip-path: polygon(0 0, 100% 0, 92% 72%, 89% 75%, 87% 78%, 84% 81%, 82% 84%, 0 70%);
            }
            40% {
              clip-path: polygon(0 0, 100% 0, 88% 68%, 85% 71%, 83% 74%, 80% 77%, 78% 80%, 0 66%);
            }
            60% {
              clip-path: polygon(0 0, 100% 0, 94% 74%, 91% 77%, 89% 80%, 86% 83%, 84% 86%, 0 72%);
            }
            80% {
              clip-path: polygon(0 0, 100% 0, 86% 66%, 83% 69%, 81% 72%, 78% 75%, 76% 78%, 0 64%);
            }
            100% {
              clip-path: polygon(0 0, 100% 0, 90% 70%, 87% 73%, 85% 76%, 82% 79%, 80% 82%, 0 68%);
            }
          }
          
          @keyframes wave-green-border {
            0% {
              clip-path: polygon(20% 18%, 23% 21%, 25% 24%, 28% 27%, 30% 30%, 100% 32%, 100% 100%, 0 100%);
            }
            20% {
              clip-path: polygon(18% 16%, 21% 19%, 23% 22%, 26% 25%, 28% 28%, 100% 30%, 100% 100%, 0 100%);
            }
            40% {
              clip-path: polygon(22% 20%, 25% 23%, 27% 26%, 30% 29%, 32% 32%, 100% 34%, 100% 100%, 0 100%);
            }
            60% {
              clip-path: polygon(16% 14%, 19% 17%, 21% 20%, 24% 23%, 26% 26%, 100% 28%, 100% 100%, 0 100%);
            }
            80% {
              clip-path: polygon(24% 22%, 27% 25%, 29% 28%, 32% 31%, 34% 34%, 100% 36%, 100% 100%, 0 100%);
            }
            100% {
              clip-path: polygon(20% 18%, 23% 21%, 25% 24%, 28% 27%, 30% 30%, 100% 32%, 100% 100%, 0 100%);
            }
          }
          
          .wave-orange-section {
            animation: wave-orange-border 3s ease-in-out infinite;
          }
          
          .wave-green-section {
            animation: wave-green-border 3.5s ease-in-out infinite;
          }
        `
      }} />
      
      {/* Animated Wave Banner Background - Green Section */}
      <div
        className={`
          absolute w-[120%] h-[40%] -right-[10%] bottom-0
          bg-gradient-to-tl from-green-400 via-green-200 to-green-100
          [clip-path:polygon(15%_20%,100%_30%,100%_100%,0_100%)]
          transition-transform duration-[3000ms] ease-out delay-300
          ${animate ? 'translate-x-0' : 'translate-x-full'}
        `}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Slogan */}
          <h1 className={`
            text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-sm
            transition-all duration-[1500ms] ease-out delay-1000
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            Ham Pe Trust 
            <span className="text-orange-600"> Aapka Growth</span>
          </h1>
          
          {/* Subheading */}
          <h4 className={`
            text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-8 leading-relaxed drop-shadow-sm
            transition-all duration-[1500ms] ease-out delay-[1300ms]
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            Empowering startups and businesses with comprehensive legal and compliance solutions
          </h4>
          
          {/* Call to Action Buttons */}
          <div className={`
            flex flex-col sm:flex-row gap-4 justify-center mt-8
            transition-all duration-[1500ms] ease-out delay-[1600ms]
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-green-600 text-green-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection