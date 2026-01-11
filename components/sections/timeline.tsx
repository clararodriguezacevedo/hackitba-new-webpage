import { GlassCard } from "@/components/ui/glass-card"
import { NeonGlow } from "@/components/effects/neon-glow"

interface TimelineProps {
  translations: any
}

export function Timeline({ translations }: TimelineProps) {
  const events = [
    {
      title: translations.timeline.beginning.title,
      description: translations.timeline.beginning.description,
    },
    {
      title: translations.timeline.challenge.title,
      description: translations.timeline.challenge.description,
    },
    {
      title: translations.timeline.closing.title,
      description: translations.timeline.closing.description,
    },
    {
      title: translations.timeline.future.title,
      description: translations.timeline.future.description,
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4 overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="font-pixel text-3xl md:text-5xl text-center text-brand-orange mb-16">
          <NeonGlow color="orange">{translations.timeline.title}</NeonGlow>
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-col items-center max-w-7xl mx-auto">
          <div className="grid grid-cols-4 w-full gap-4">
            {/* Top Row */}
            <div className="flex flex-col justify-between h-full">
              <GlassCard neonOnHover neonColor="orange" className="mb-4">
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{events[0].title}</h3>
                <p className="text-brand-cyan text-sm">{events[0].description}</p>
              </GlassCard>
              <img className="h-20 self-center" src="/images/roadmap_branch.svg" alt="" />
            </div>
            <div className="col-start-3 flex flex-col justify-between h-full">
              <GlassCard neonOnHover neonColor="orange" className="mb-4">
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{events[2].title}</h3>
                <p className="text-brand-cyan text-sm">{events[2].description}</p>
              </GlassCard>
              <img className="h-20 self-center" src="/images/roadmap_branch.svg" alt="" />
            </div>
          </div>

          <div className="h-2 bg-brand-orange w-full rounded-xl my-0 neon-border-orange relative z-10" />

          <div className="grid grid-cols-4 w-full gap-4">
            {/* Bottom Row */}
            <div className="col-start-2 flex flex-col justify-start h-full">
              <img className="h-20 self-center scale-y-[-1]" src="/images/roadmap_branch.svg" alt="" />
              <GlassCard neonOnHover neonColor="orange" className="mt-4">
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{events[1].title}</h3>
                <p className="text-brand-cyan text-sm">{events[1].description}</p>
              </GlassCard>
            </div>
            <div className="col-start-4 flex flex-col justify-start h-full">
              <img className="h-20 self-center scale-y-[-1]" src="/images/roadmap_branch.svg" alt="" />
              <GlassCard neonOnHover neonColor="orange" className="mt-4">
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{events[3].title}</h3>
                <p className="text-brand-cyan text-sm">{events[3].description}</p>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-orange/30" />

          <div className="space-y-12 pl-12">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-brand-orange neon-border-orange" />
                <GlassCard neonOnHover neonColor="orange">
                  <h3 className="font-pixel text-xl text-brand-yellow mb-3">{event.title}</h3>
                  <p className="text-brand-cyan leading-relaxed">{event.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
