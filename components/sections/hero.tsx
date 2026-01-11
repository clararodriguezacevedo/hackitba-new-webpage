"use client"

import { TypingEffect } from "@/components/effects/typing-effect"
import { NeonGlow } from "@/components/effects/neon-glow"
import { FloatingArrow } from "@/components/effects/floating-arrow"
import { LoremIpsum } from "lorem-ipsum"

interface HeroProps {
  translations: any
}

const lorem = new LoremIpsum()

export function Hero({ translations }: HeroProps) {
  const scrollToNext = () => {
    const nextSection = document.getElementById("stats")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="[mask-image:linear-gradient(to_bottom,transparent,black,transparent)] relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-4 opacity-10 font-pixel text-s text-brand-cyan leading-relaxed overflow-hidden pointer-events-none">
        <TypingEffect
          text={lorem.generateParagraphs(35)}
          speed="fast"
          direction="vertical"
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        <div>
          <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl mb-4">
            <NeonGlow color="orange" flickering>
              {/* <TypingEffect
                text={translations.hero.title}
                speed="slow"
                direction="horizontal"
              /> */}
              <img src="/images/hackitba-alt-logo.png" alt="" />
            </NeonGlow>
          </h1>
          <p className="font-pixel text-lg md:text-xl text-brand-yellow">{translations.hero.subtitle}</p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <FloatingArrow onClick={scrollToNext} />
      </div>
    </section>
  )
}
