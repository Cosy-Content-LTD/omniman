import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Award, ArrowRight, Droplets } from 'lucide-react'
import { cn } from '../utils/cn'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '2,400+', label: 'Jobs Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Emergency Response' },
]

const highlights: string[] = [
  'Gas Safe & fully insured professionals',
  'Same-day service across London SE1',
  'Transparent, fixed-price quotes',
  'No hidden charges — ever',
]

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [leftVisible, setLeftVisible] = useState(false)
  const [rightVisible, setRightVisible] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observeElement = (
      el: HTMLDivElement | null,
      setter: (v: boolean) => void
    ) => {
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true)
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      observers.push(obs)
    }

    observeElement(leftRef.current, setLeftVisible)
    observeElement(rightRef.current, setRightVisible)

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1f3c 0%, #0a1628 50%, #0f2a5c 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div
            ref={leftRef}
            className={cn('reveal-left relative', leftVisible && 'visible')}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Large outer ring */}
              <div
                className="absolute inset-0 rounded-full opacity-10 spin-slow"
                style={{ border: '2px dashed #60a5fa' }}
              />
              {/* Inner circle background */}
              <div
                className="absolute inset-8 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(26,58,107,0.4) 100%)',
                  border: '1px solid rgba(96,165,250,0.3)',
                }}
              />
              {/* Central icon */}
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center pulse-glow"
                  style={{
                    background: 'linear-gradient(135deg, #2756a8 0%, #1a3a6b 100%)',
                  }}
                >
                  <Droplets className="w-20 h-20 text-blue-200" />
                </div>
              </div>
              {/* Decorative blobs */}
              <div
                className="absolute top-[10%] left-[10%] w-20 h-20 rounded-full floating"
                style={{
                  background: 'rgba(59, 130, 246, 0.25)',
                  animationDelay: '0s',
                }}
              />
              <div
                className="absolute bottom-[12%] right-[8%] w-14 h-14 rounded-full floating"
                style={{
                  background: 'rgba(96, 165, 250, 0.2)',
                  animationDelay: '1.5s',
                }}
              />
              <div
                className="absolute top-[15%] right-[12%] w-10 h-10 rounded-full floating"
                style={{
                  background: 'rgba(147, 197, 253, 0.3)',
                  animationDelay: '0.8s',
                }}
              />

              {/* Floating stat badge */}
              <div
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-5 py-4 floating"
                style={{ animationDelay: '1s' }}
              >
                <div
                  className="text-3xl font-bold text-display mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#60a5fa',
                  }}
                >
                  2,400+
                </div>
                <div className="text-xs text-blue-300 font-medium">Jobs Completed</div>
              </div>

              {/* Award badge */}
              <div
                className="absolute -top-2 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 floating"
                style={{ animationDelay: '2s' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(59, 130, 246, 0.3)' }}
                >
                  <Award className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Gas Safe</div>
                  <div className="text-blue-400 text-xs">Registered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            ref={rightRef}
            className={cn('reveal-right', rightVisible && 'visible')}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#93c5fd',
                border: '1px solid rgba(96, 165, 250, 0.2)',
              }}
            >
              About Omniman
            </span>

            <h2
              className="text-display mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
              }}
            >
              Plumbing Expertise
              <span
                className="block italic"
                style={{ color: '#60a5fa' }}
              >
                Built on Trust
              </span>
            </h2>

            <p
              className="mb-5 leading-relaxed"
              style={{ color: '#93c5fd', fontSize: '1.05rem', fontWeight: 300 }}
            >
              Omniman was founded on a simple belief: every home deserves reliable,
              honest plumbing. Based in the heart of Bankside, Southwark, we&apos;ve
              spent over 15 years building a reputation that speaks for itself across
              London and beyond.
            </p>

            <p
              className="mb-8 leading-relaxed"
              style={{ color: '#7aa3d4', fontSize: '1rem', fontWeight: 300 }}
            >
              Our team of fully qualified engineers brings meticulous attention to
              detail to every project. Whether it&apos;s a routine service or a
              complex installation, we treat your home with the same respect
              we&apos;d give our own.
            </p>

            {/* Highlights */}
            <ul className="mb-10 space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: '#60a5fa' }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#c7d9f5' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(96, 165, 250, 0.15)',
                  }}
                >
                  <div
                    className="text-2xl font-bold text-display mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: '#60a5fa',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
