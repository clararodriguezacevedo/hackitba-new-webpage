import { GlassCard } from "@/components/ui/glass-card"
import Image from "next/image"
import { Timeline } from "./timeline"

interface InfoCardsProps {
  translations: any
}

export function InfoCards({ translations }: InfoCardsProps) {
  return (
    <section
      id="info"
      className="py-20 px-4"
      style={{
        background: "linear-gradient(to bottom, var(--color-brand-navy) 50%, var(--color-brand-dark-orange))"
      }}
    >
      <Timeline translations={translations} />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassCard neonOnHover neonColor="orange">
            <div className="text-center mb-4">
              <p className="font-mono text-sm text-brand-cyan mb-2">{translations.about.title}</p>
              <p className="font-mono text-sm text-brand-cyan">GET v2026/about-us</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{translations.about.history}</h3>
                <p className="text-brand-cyan text-sm leading-relaxed">{translations.about.historyText}</p>
              </div>

              <div>
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{translations.about.vision}</h3>
                <p className="text-brand-cyan text-sm leading-relaxed">{translations.about.visionText}</p>
              </div>

              <div>
                <h3 className="font-pixel text-lg text-brand-yellow mb-2">{translations.about.objective}</h3>
                <p className="text-brand-cyan text-sm leading-relaxed">{translations.about.objectiveText}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard neonOnHover neonColor="cyan">
            <div className="text-center mb-4">
              <p className="font-mono text-sm text-brand-cyan mb-2">{translations.location.title}</p>
              <p className="font-mono text-sm text-brand-cyan">GET v2026/location</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Iguaz%C3%BA%20341%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires+(ITBA%20Sede%20Rectorado)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.acadoo.de/'>Acadoo</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=dff7eb8e12cb577438183b02f7a5de8c27883b84'></script>
              </div>

              <div className="text-center space-y-2">
                <p className="text-brand-cyan font-pixel">{translations.location.description}</p>
                <p className="text-brand-cyan/80 text-sm">{translations.location.address}</p>
                <p className="text-brand-cyan/60 text-xs font-mono">{translations.location.coordinates}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
