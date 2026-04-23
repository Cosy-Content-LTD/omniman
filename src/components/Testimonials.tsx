import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Quote, Star } from 'lucide-react'
import { cn } from '../utils/cn'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Omniman came out within the hour when our boiler broke down in January. Absolute lifesavers. Professional, clean, and genuinely honest about the work needed.',
    name: 'Sarah M.',
    role: 'Homeowner, Southwark',
    initials: 'SM',
    rating: 5,
  },
  {
    quote:
      'We&apos;ve used Omniman for our commercial property in Bankside for three years. Their maintenance plans are superb value and the engineers are always punctual.',
    name: 'James R.',
    role: 'Property Manager, SE1',
    initials: 'JR',
    rating: 5,
  },
  {
    quote:
      'Incredible work on our bathroom renovation. They transformed a tired Victorian bathroom into something truly beautiful — on time and on budget.',
    name: 'Priya K.',
    role: 'Interior Designer, London',
    initials: 'PK',
    rating: 5,
  },
  {
    quote:
      'Had a burst pipe at midnight. Omniman was there by 1am, sorted it quickly, and left the place spotless. Worth every penny for the peace of mind.',
    name: 'Thomas B.',
    role: 'Landlord, Waterloo',
    initials: 'TB',
    rating: 5,
  },
  {
    quote:
      'The most transparent plumbing quote I&apos;ve ever received. No hidden fees, no upselling — just excellent, reliable work. Highly recommend.',
    name: 'Emma L.',
    role: 'Resident, Borough',
    initials: 'EL',
    rating: 5,
  },
  {
    quote:
      'Fixed an issue three other plumbers couldn&apos;t diagnose. True experts. The team at Omniman are in a class of their own.',
    name: 'David C.',
    role: 'Business Owner, Bermondsey',
    initials: 'DC',
    rating: 5,
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      id="testimonials"
      className="py-28 relative overflow-hidden section-gradient-light"
    >
      {/* Decorative */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #dde6ff 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div
          className={cn(
            'text-center max-w-2xl mx-auto mb-20 reveal',
            isVisible && 'visible'
          )}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#2756a8',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            Client Stories
          </span>
          <h2
            className="text-display mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#0d1f3c',
              lineHeight: 1.15,
            }}
          >
            Trusted by
            <span
              className="block italic"
              style={{ color: '#2756a8' }}
            >
              Londoners Everywhere
            </span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what our clients have
            to say about Omniman&apos;s plumbing services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                'p-7 rounded-2xl card-hover reveal',
                isVisible && 'visible'
              )}
              style={{
                transitionDelay: isVisible ? `${i * 0.1}s` : '0s',
                background: '#ffffff',
                border: '1px solid rgba(59, 130, 246, 0.12)',
                boxShadow: '0 4px 30px rgba(26, 58, 107, 0.07)',
              }}
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(26,58,107,0.1) 100%)',
                  }}
                >
                  <Quote className="w-5 h-5" style={{ color: '#2756a8' }} />
                </div>
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4"
                      style={{ color: '#f59e0b', fill: '#f59e0b' }}
                    />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p
                className="mb-6 leading-relaxed"
                style={{
                  color: '#374151',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-body)',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1a3a6b 100%)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: '#0d1f3c', fontFamily: 'var(--font-display)' }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#6b7280' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
