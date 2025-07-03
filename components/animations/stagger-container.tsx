"use client"

import React from "react"

import { useInView } from "@/hooks/useInView"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "-50px" })

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.5s ease-out ${index * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
