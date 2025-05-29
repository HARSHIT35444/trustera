"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, ChevronDown, Phone } from 'lucide-react'

// Define the type for dropdown keys
type DropdownKey = 'startup' | 'compliances' | 'services'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    startup: false,
    compliances: false,
    services: false
  })

  const dropdownRef = useRef<HTMLDivElement>(null)

  const startupOptions = [
    { name: 'Proprietorship', href: '/startup/prop' },
    { name: 'Partnership', href: '/startup/partnership' },
    { name: 'OPC', href: '/startup/opc' },
    { name: 'Private Limited', href: '/startup/pvt-ltd' },
    { name: 'Public Limited', href: '/startup/ltd' },
    { name: 'Section 8 Company', href: '/startup/sect-8' },
    { name: 'Trust Register', href: '/startup/trust-register' },
    { name: 'Producer Company', href: '/startup/producer-company' },
  ]

  const complianceOptions = [
    { name: 'MCA/ROC', href: '/compliances/mca-roc' },
    { name: 'GST Compliance', href: '/compliances/gst' },
    { name: 'Taxation', href: '/compliances/taxation' },
    { name: 'Accounting', href: '/compliances/accounting' },
  ]

  const servicesOptions = [
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Legal Advisory', href: '/services/legal-advisory' },
    { name: 'Financial Planning', href: '/services/financial-planning' },
    { name: 'Business Consulting', href: '/services/business-consulting' },
    { name: 'Import/Export License', href: '/services/import-export' },
    { name: 'FSSAI Registration', href: '/services/fssai' },
    { name: 'Trademark Registration', href: '/services/trademark' },
    { name: 'ISO Certification', href: '/services/iso-certification' },
    { name: 'Labour License', href: '/services/labour-license' },
  ]

  const toggleMobileDropdown = (dropdown: DropdownKey) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  const handleDropdownToggle = (dropdown: DropdownKey) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const DropdownMenu = ({ trigger, children, dropdownKey }: {
    trigger: string
    children: React.ReactNode
    dropdownKey: DropdownKey
  }) => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => handleDropdownToggle(dropdownKey)}
        className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-accent"
      >
        {trigger}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === dropdownKey ? 'rotate-180' : ''}`} />
      </button>
      {activeDropdown === dropdownKey && (
        <div 
          className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg z-50"
        >
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  )

  const DropdownItem = ({ href, children }: {
    href: string
    children: React.ReactNode
  }) => (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      onClick={() => setActiveDropdown(null)}
    >
      {children}
    </Link>
  )

  return (
    <nav className="sticky top-0 z-50 py-4">
      <div className="w-[80%] mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-2xl shadow-lg px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl text-foreground">YourLogo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {/* Home */}
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-accent"
            >
              Home
            </Link>

            {/* Startup Dropdown */}
            <DropdownMenu trigger="Startup" dropdownKey="startup">
              {startupOptions.map((option) => (
                <DropdownItem key={option.name} href={option.href}>
                  {option.name}
                </DropdownItem>
              ))}
            </DropdownMenu>

            {/* Compliances Dropdown */}
            <DropdownMenu trigger="Compliances" dropdownKey="compliances">
              {complianceOptions.map((option) => (
                <DropdownItem key={option.name} href={option.href}>
                  {option.name}
                </DropdownItem>
              ))}
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu trigger="Services" dropdownKey="services">
              {servicesOptions.map((option) => (
                <DropdownItem key={option.name} href={option.href}>
                  {option.name}
                </DropdownItem>
              ))}
            </DropdownMenu>

            {/* About Us */}
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-accent"
            >
              About Us
            </Link>

            {/* Phone Number */}
            <div className="flex items-center space-x-2 text-foreground/80 font-medium border-l pl-6 ml-6">
              <Phone className="h-4 w-4" />
              <a 
                href="tel:+919876543210" 
                className="hover:text-foreground transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col space-y-4 mt-4">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">L</span>
                    </div>
                    <span className="font-bold text-xl text-foreground">YourLogo</span>
                  </div>

                  {/* Mobile Navigation Links */}
                  
                  {/* Home */}
                  <Link
                    href="/"
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Startup Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown('startup')}
                      className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-accent"
                    >
                      Startup
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdowns.startup ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {mobileDropdowns.startup && (
                      <div className="ml-4 mt-2 space-y-2">
                        {startupOptions.map((option) => (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="block text-foreground/70 hover:text-primary transition-colors duration-200 py-1 px-4 rounded-md hover:bg-accent/50 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Compliances Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown('compliances')}
                      className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-accent"
                    >
                      Compliances
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdowns.compliances ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {mobileDropdowns.compliances && (
                      <div className="ml-4 mt-2 space-y-2">
                        {complianceOptions.map((option) => (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="block text-foreground/70 hover:text-primary transition-colors duration-200 py-1 px-4 rounded-md hover:bg-accent/50 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Services Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown('services')}
                      className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-accent"
                    >
                      Services
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdowns.services ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {mobileDropdowns.services && (
                      <div className="ml-4 mt-2 space-y-2">
                        {servicesOptions.map((option) => (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="block text-foreground/70 hover:text-primary transition-colors duration-200 py-1 px-4 rounded-md hover:bg-accent/50 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* About Us */}
                  <Link
                    href="/about"
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Phone Number */}
                  <div className="flex items-center space-x-2 text-foreground font-medium py-2 px-4 border-t pt-4 mt-4">
                    <Phone className="h-4 w-4" />
                    <a 
                      href="tel:+919876543210" 
                      className="hover:text-primary transition-colors duration-200"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar