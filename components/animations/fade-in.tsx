"use client"

import type React from "react"
import { useInView } from "@/hooks/useInView"

interface FadeInProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  className?: string
}

export default function FadeIn({ children, direction = "up", delay = 0, duration = 0.6, className = "" }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "-100px" })

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case "left":
          return "translateX(-50px)"
        case "right":
          return "translateX(50px)"
        case "up":
          return "translateY(50px)"
        case "down":
          return "translateY(-50px)"
        default:
          return "translateY(50px)"
      }
    }
    return "translate(0, 0)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
