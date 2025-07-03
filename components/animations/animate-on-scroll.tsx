"use client"

import type React from "react"
import { useInView } from "@/hooks/useInView"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: "fadeInLeft" | "fadeInRight" | "fadeInUp" | "fadeInDown" | "scaleIn"
  delay?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView()

  const animationClasses = {
    fadeInLeft: isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
    fadeInRight: isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
    fadeInUp: isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
    fadeInDown: isInView ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0",
    scaleIn: isInView ? "scale-100 opacity-100" : "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
