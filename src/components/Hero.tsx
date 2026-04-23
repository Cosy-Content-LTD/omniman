import { useEffect, useState } from 'react'
import { ArrowRight, ShieldCheck, Clock, Star, Droplets } from 'lucide-react'

interface TrustBadge {
  icon: React.ReactNode
  label: string
  value: string
}

const trustBadges: TrustBadge[] = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    label: 'Fully Insured',
    value: 'Gas Safe Registered',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Available',
    value: '24/7 Emergency',
  },
  {
    icon: <Star className="w-5 h-5" />,
    label: 'Experience',
    value: '15+ Years',
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    label: 'Coverage',
    value: 'All London',
  },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient noise-overlay"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top-right */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          }}
        />
        {/* Medium circle bottom-left */}
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
          }}
        />
        {/* Spinning ring */}
        <div
          className="absolute top-1/2 right-[8%] -translate-y-1/2 w-80 h-80 rounded-full border border-blue-500/20 spin-slow"
        />
        <div
          className="absolute top-1/2 right-[8%] -translate-y-1/2 w-64 h-64 rounded-full border border-blue-400/15 spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '15s' }}
        />
        {/* Pipe SVG decorative */}
        <svg
          className="absolute bottom-0 right-0 w-1/2 opacity-5"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150 L100 150 L100 50 L300 50 L300 200 L400 200"
            stroke="#60a5fa"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="100" cy="150" r="12" fill="#60a5fa" />
          <circle cx="300" cy="50" r="12" fill="#60a5fa" />
          <circle cx="300" cy="200" r="12" fill="#60a5fa" />
        </svg>
        {/* Floating water drops */}
        <div
          className="absolute top-1/4 left-[15%] floating"
          style={{ animationDelay: '0s' }}
        >
          <div
            className="w-3 h-3 rounded-full bg-blue-400 opacity-40"
          />
        </div>
        <div
          className="absolute top-1/3 left-[25%] floating"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-300 opacity-30" />
        </div>
        <div
          className="absolute top-2/3 left-[10%] floating"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-4 h-4 rounded-full bg-blue-500 opacity-20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#93c5fd',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            <Droplets className="w-3.5 h-3.5" />
            London&apos;s Premier Plumbing Specialists
          </div>

          {/* Headline */}
          <h1
            className="text-display mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.25s',
            }}
          >
            Expert Plumbing
            <br />
            <span
              className="italic"
              style={{ color: '#60a5fa' }}
            >
              Done Right,
            </span>
            <br />
            Every Time.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{
              color: '#93c5fd',
              fontWeight: 300,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.4s',
            }}
          >
            Omniman delivers professional plumbing services across Bankside, Southwark
            and all of London. From emergency repairs to full installations — we&apos;re
            the trusted name your neighbours rely on.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.55s',
            }}
          >
            <a
              href="#contact"
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-white text-lg flex items-center justify-center gap-3 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10"
              style={{
                border: '1px solid rgba(96, 165, 250, 0.4)',
                color: '#93c5fd',
              }}
            >
              View Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s ease 0.7s',
            }}
          >
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                }}
              >
                <div style={{ color: '#60a5fa' }}>{badge.icon}</div>
                <div>
                  <div className="text-xs text-blue-400 font-medium">{badge.label}</div>
                  <div className="text-sm text-white font-semibold">{badge.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L60 68C120 56 240 32 360 26.7C480 21 600 35 720 42.7C840 50 960 51 1080 45.3C1200 40 1320 28 1380 22L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#f0f5ff"
          />
        </svg>
      </div>
    </section>
  )
}
