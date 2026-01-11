"use client"

import { cn } from "@/lib/utils"

interface FloatingArrowProps {
  className?: string
  onClick?: () => void
}

export function FloatingArrow({ className, onClick }: FloatingArrowProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "animate-subtle-bounce cursor-pointer",
        "text-brand-cyan neon-glow-cyan",
        "hover:scale-110 transition-transform duration-200",
        className,
      )}
      aria-label="Scroll down"
    >
      <img src="/images/flecha-abajo.png" />
    </button>
  )
}
