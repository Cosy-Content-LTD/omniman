import { useEffect, useState } from 'react'
import { Droplets, Menu, X, Phone } from 'lucide-react'
import { cn } from '../utils/cn'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'py-3 shadow-2xl'
          : 'py-5'
      )}
      style={{
        background: scrolled
          ? 'rgba(10, 22, 40, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center pulse-glow"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1a3a6b 100%)' }}
          >
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-display text-xl font-bold tracking-wide text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Omniman
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-blue-100 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+442012345678"
            className="flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>0800 123 4567</span>
          </a>
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          >
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{ background: 'rgba(10, 22, 40, 0.98)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-blue-100 hover:text-white transition-colors border-b border-blue-900/40 pb-4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn-primary px-5 py-3 rounded-lg text-center font-semibold text-white mt-2"
          >
            <span>Get a Free Quote</span>
          </a>
        </div>
      </div>
    </header>
  )
}
