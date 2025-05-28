import { Settings, TrendingUp, BarChart3, Shield, Building2, Merge, Users, GraduationCap } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Settings,
      title: "Business Setup",
      description: "Company Registrations, Certifications and more..",
      isHighlighted: false
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Business Growth",
      description: "Grants, Loans, Funding's and more..",
      isHighlighted: false
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Business Expansion",
      description: "Web Development, Marketing services & more..",
      isHighlighted: false
    },
    {
      id: 4,
      icon: Shield,
      title: "Business Protection",
      description: "Legal & Compliances..",
      isHighlighted: false
    },
    {
      id: 5,
      icon: Building2,
      title: "Affordable Land for Business Setup",
      description: "Cost-effective land for business growth..",
      isHighlighted: false
    },
    {
      id: 6,
      icon: Merge,
      title: "Merger & Acquisition",
      description: "Unite, Grow & Enhance Business Value",
      isHighlighted: false
    },
    {
      id: 7,
      icon: Users,
      title: "CRM",
      description: "Connect, Engage & Retain your Customers",
      isHighlighted: true
    },
    {
      id: 8,
      icon: GraduationCap,
      title: "MSME training",
      description: "Empower, Upskill & Grow Your MSME",
      isHighlighted: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Our Expertise helps your startup
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
            grow at every stage
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-transparent hover:border-cyan-300 hover:ring-2 hover:ring-cyan-200 transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 hover:rotate-1 transform"
              >
                {/* Card Content */}
                <div className="p-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-center mb-6 min-h-[64px] flex items-center justify-center leading-tight">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-500 text-center mb-10 text-base leading-relaxed min-h-[48px] font-medium">
                    {service.description}
                  </p>

                  {/* Explore Button */}
                  <div className="text-center">
                    <button className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional Call-to-Action */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-8 text-xl font-medium">
            Ready to take your business to the next level?
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-bold py-5 px-12 rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection