import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image Container */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.jpg" // Replace with your image path
              alt="Hero Image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            
            {/* Optional Overlay for text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Optional Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  Welcome to Our Website
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg">
                  Discover amazing services and solutions tailored just for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection