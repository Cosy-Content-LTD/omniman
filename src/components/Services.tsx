import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import {
  Wrench,
  Flame,
  Droplets,
  Bath,
  AlertTriangle,
  Settings,
  Home,
  Thermometer,
} from 'lucide-react'
import { cn } from '../utils/cn'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Droplets className="w-7 h-7" />,
    title: 'General Plumbing',
    description:
      'From leaky taps to pipe replacements, our certified plumbers handle all general plumbing work with precision and care.',
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: 'Emergency Repairs',
    description:
      'Burst pipes, blocked drains, or flooding — we respond 24/7 to protect your property and stop damage in its tracks.',
  },
  {
    icon: <Flame className="w-7 h-7" />,
    title: 'Boiler Services',
    description:
      'Gas Safe registered engineers for boiler installation, servicing, and emergency repairs. Your warmth guaranteed.',
  },
  {
    icon: <Bath className="w-7 h-7" />,
    title: 'Bathroom Fitting',
    description:
      'Complete bathroom design and installation. We transform your vision into a luxurious, functional space.',
  },
  {
    icon: <Thermometer className="w-7 h-7" />,
    title: 'Central Heating',
    description:
      'Full central heating system installations and upgrades. Efficient, modern solutions for lasting warmth and energy savings.',
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Pipe Installation',
    description:
      'New builds, extensions, or renovations — we install robust pipework systems built to current standards.',
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Drain Unblocking',
    description:
      'Fast, no-mess drain clearing using professional equipment. Toilets, sinks, showers, and external drains.',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'Maintenance Plans',
    description:
      'Protect your home with a tailored annual maintenance plan. Regular checks keep small issues from becoming expensive problems.',
  },
]

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      id="services"
      className="py-28 section-gradient-light relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #dde6ff 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
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
            What We Do
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
            Complete Plumbing
            <span
              className="block italic"
              style={{ color: '#2756a8' }}
            >
              Solutions
            </span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            From a dripping tap to a full bathroom renovation, Omniman provides
            expert plumbing services that London residents and businesses trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={cn(
                'group p-7 rounded-2xl card-hover cursor-default reveal',
                isVisible && 'visible'
              )}
              style={{
                transitionDelay: isVisible ? `${i * 0.08}s` : '0s',
                background: '#ffffff',
                border: '1px solid rgba(59, 130, 246, 0.12)',
                boxShadow: '0 4px 24px rgba(26, 58, 107, 0.06)',
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(26, 58, 107, 0.1) 100%)',
                  color: '#2756a8',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-display font-semibold mb-3 text-lg"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#0d1f3c',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#5a6a8a', fontFamily: 'var(--font-body)' }}
              >
                {service.description}
              </p>

              {/* Bottom accent bar */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: 'linear-gradient(90deg, #3b82f6, #1a3a6b)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
