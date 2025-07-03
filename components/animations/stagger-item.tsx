"use client"

import type React from "react"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return <div className={className}>{children}</div>
}
