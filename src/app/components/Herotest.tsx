import Image from 'next/image'

const HeroTest = () => {
  return (
    <section className="py-8">
      <div className="w-full px-2 md:px-4">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Left Small Image - Extreme Left */}
          <div className="relative w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 xl:w-56 xl:h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/left-image.jpg" // Replace with your left image path
              alt="Left Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 192px, 224px"
            />
          </div>

          {/* Main Hero Image Container - Increased Width */}
          <div className="relative flex-1 h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl mx-2 md:mx-4">
            <Image
              src="/hero-image.jpg" // Replace with your image path
              alt="Hero Image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 40vw"
            />
            
            {/* Optional Overlay for text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Optional Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  Welcome to Our Website
                </h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto drop-shadow-lg">
                  Discover amazing services and solutions tailored just for you
                </p>
              </div>
            </div>
          </div>

          {/* Right Small Image - Extreme Right */}
          <div className="relative w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 xl:w-56 xl:h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/right-image.jpg" // Replace with your right image path
              alt="Right Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 192px, 224px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroTest