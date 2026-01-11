"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Square, SquareCheckBig } from "lucide-react"

interface WhatWeProvideProps {
  translations: any
}

export function WhatWeProvide({ translations }: WhatWeProvideProps) {
  const weProvideItems = [
    translations.weProvide.swag,
    translations.weProvide.space,
    translations.weProvide.mentors,
    translations.weProvide.results,
    translations.weProvide.prizes,
  ]

  const youBringItems = [
    translations.youBring.talent,
    translations.youBring.sleepingBag,
    translations.youBring.computer,
  ]

  const [youBringChecked, setYouBringChecked] = useState<boolean[]>(
    Array(youBringItems.length).fill(false)
  )

  const toggleYouBring = (index: number) => {
    setYouBringChecked((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    )
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WE PROVIDE */}
          <GlassCard>
            <h3 className="font-pixel text-md text-brand-yellow mb-6 text-center">
              {translations.weProvide.title}
            </h3>

            <ul className="space-y-4">
              {weProvideItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <SquareCheckBig
                    size={20}
                    className="mt-1 text-brand-cyan hover:text-brand-orange transition-colors opacity-80"
                  />
                  <span className="leading-relaxed opacity-90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* YOU BRING */}
          <GlassCard>
            <h3 className="font-pixel text-md text-brand-yellow mb-6 text-center">
              {translations.youBring.title}
            </h3>

            <ul className="space-y-4">
              {youBringItems.map((item, index) => {
                const checked = youBringChecked[index]

                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 cursor-pointer select-none"
                    onClick={() => toggleYouBring(index)}
                  >
                    {checked ? (
                      <SquareCheckBig
                        size={20}
                        className="mt-1 text-brand-cyan hover:text-brand-orange transition-colors"
                      />
                    ) : (
                      <Square
                        size={20}
                        className="mt-1 text-brand-cyan hover:text-brand-orange transition-colors"
                      />
                    )}

                    <span className="leading-relaxed">
                      {item}
                    </span>
                  </li>
                )
              })}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
