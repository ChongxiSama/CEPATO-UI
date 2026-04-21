import React from 'react'

interface DividerProps {
  className?: string
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div className={`border-t border-lt-border w-full ${className}`} />
  )
}
