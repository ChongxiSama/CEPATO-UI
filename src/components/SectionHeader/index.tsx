import React from 'react'

interface SectionHeaderProps {
  number: string
  title: string
  className?: string
}

export const SectionHeader = ({ number, title, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <h2 className="text-[11px] font-mono font-black text-lt-muted uppercase tracking-[0.3em] whitespace-nowrap">
        {number} // {title}
      </h2>
      <div className="flex-1 h-[1px] bg-lt-border"></div>
    </div>
  )
}
