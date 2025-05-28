import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  const navigationLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' }
  ]

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/yourcompany',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/yourcompany',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/yourcompany',
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/yourcompany',
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@yourcompany',
      color: 'hover:text-red-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@yourcompany.com',
      color: 'hover:text-green-600'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          
          {/* Left Section - Logo and Company Name */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-white">YourCompany</span>
            </div>
            <p className="text-gray-400 text-sm text-center lg:text-left max-w-xs">
              Empowering businesses to grow and succeed at every stage
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg hover:underline underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center space-x-6">
            {socialMediaLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} YourCompany. All rights reserved. | 
            <a href="/privacy" className="hover:text-white ml-1 underline underline-offset-2">
              Privacy Policy
            </a> | 
            <a href="/terms" className="hover:text-white ml-1 underline underline-offset-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer