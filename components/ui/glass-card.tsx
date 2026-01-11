"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, useRef } from "react"

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  neonOnHover?: boolean
  neonColor?: "cyan" | "orange" | "yellow"
}

export function GlassCard({
  className,
  children,
  neonOnHover = false,
  neonColor = "cyan",
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const angle =
      Math.atan2(
        e.clientY - (rect.top + rect.height / 2),
        e.clientX - (rect.left + rect.width / 2),
      ) *
      (180 / Math.PI) +
      90

    el.style.setProperty("--glare-x", `${x}%`)
    el.style.setProperty("--glare-y", `${y}%`)
    el.style.setProperty("--glare-angle", `${angle}deg`)
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return

    el.style.setProperty("--glare-x", "50%")
    el.style.setProperty("--glare-y", "50%")
    el.style.setProperty("--glare-angle", "135deg")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-lg p-6 transition-transform duration-200",
        "glass-effect",
        neonOnHover && `neon-border-${neonColor}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
