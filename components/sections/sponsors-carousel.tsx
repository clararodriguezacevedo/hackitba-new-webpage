"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SponsorsCarouselProps {
  translations: any
}

export function SponsorsCarousel({ translations }: SponsorsCarouselProps) {
  const sponsorsWithUrls = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png", url: "https://www.microsoft.com" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png", url: "https://www.google.com" },
    { name: "ExxonMobil", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Exxon_Mobil_Logo.svg/1280px-Exxon_Mobil_Logo.svg.png", url: "https://www.exxonmobil.com" },
    { name: "MODO", logo: "https://gyf.com.ar/wp-content/uploads/elementor/thumbs/logo-02-qi2ghbrd314kn46kbltroxur7focggsi9nwh6f5w9i.png", url: "https://www.modo.com.ar" },
    { name: "IOL Inversiones", logo: "https://cdn.prod.website-files.com/64b9444350a85c30629a98fb/64b94a3ade6ae9f3853c9d14_ISO-Negativo.png", url: "https://www.iol.com.ar" },
  ]

  const tripledSponsors = [...sponsorsWithUrls, ...sponsorsWithUrls, ...sponsorsWithUrls]

  return (
    <section id="sponsors" className="py-20 px-4 overflow-hidden relative">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center mb-12">
          <div>
            <p className="font-pixel text-md text-brand-yellow mb-2">GET</p>
            <p className="font-pixel text-lg text-brand-yellow">{translations.sponsors.endpoint}</p>
          </div>
        </div>

        <div className="relative flex items-center max-w-4xl mx-auto">
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
                  className="flex-shrink-0 w-40 h-40 md:w-40 md:h-40 p-2 flex items-center justify-center hover:scale-110 transition-transform duration-500 ease-out"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={160}
                    height={160}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
