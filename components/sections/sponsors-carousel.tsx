"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SponsorsCarouselProps {
  translations: any
}

export function SponsorsCarousel({ translations }: SponsorsCarouselProps) {
  const sponsorsWithUrls = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", url: "https://www.microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com", url: "https://www.google.com" },
    { name: "ExxonMobil", logo: "https://logo.clearbit.com/exxonmobil.com", url: "https://www.exxonmobil.com" },
    { name: "MODO", logo: "https://logo.clearbit.com/modo.com.ar", url: "https://www.modo.com.ar" },
    { name: "IOL Inversiones", logo: "https://logo.clearbit.com/iol.com.ar", url: "https://www.iol.com.ar" },
  ]

  const tripledSponsors = [...sponsorsWithUrls, ...sponsorsWithUrls, ...sponsorsWithUrls]

  return (
    <section id="sponsors" className="py-20 px-4 overflow-hidden relative">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-brand-cyan mb-2">{translations.sponsors.endpoint}</p>
          <h2 className="font-pixel text-3xl md:text-5xl text-brand-orange neon-glow-orange">
            {translations.sponsors.title}
          </h2>
        </div>

        <div className="relative flex items-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-full flex items-center bg-gradient-to-r from-[var(--color-brand-navy)] via-[var(--color-brand-navy)] to-transparent pr-8 pl-0">
            <div className="relative w-16 h-16 md:w-24 md:h-24 -rotate-90 filter">
              <Image
                src="/images/flecha-abajo.png"
                alt="Arrow"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex overflow-hidden w-full relative mask-linear-fade py-10">
            <div className="flex gap-12 items-center animate-marquee hover:pause-animation">
              {tripledSponsors.map((sponsor, index) => (
                <a
                  key={`${sponsor.name}-${index}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center glass-effect rounded-lg p-6 hover:scale-110 transition-transform duration-500 ease-out"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={120}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
