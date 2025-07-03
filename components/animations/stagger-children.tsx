"use client"

import React from "react"
import { useInView } from "@/hooks/useInView"
import type { ReactNode } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggerChildren({ children, className = "", staggerDelay = 100 }: StaggerChildrenProps) {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-700 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
