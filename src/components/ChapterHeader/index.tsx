import React from 'react'

interface ChapterHeaderProps {
  chapter: string
  title: string
  refCode: string
  rightLabel: string
  className?: string
}

export const ChapterHeader = ({ 
  chapter, 
  title, 
  refCode, 
  rightLabel, 
  className = '' 
}: ChapterHeaderProps) => {
  return (
    <div className={`relative z-10 flex flex-col sm:flex-row justify-between items-start mb-12 sm:mb-20 border-b border-lt-border pb-4 gap-4 ${className}`}>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[10px] bg-lt-accent"></div>
          <span className="text-[11px] font-mono tracking-[0.2em] font-semibold text-lt-ink uppercase">
            {chapter} // {title}
          </span>
        </div>
        <div className="text-[11px] font-mono text-lt-ghost uppercase tracking-widest">
          {refCode}
        </div>
      </div>
      <div className="text-left sm:text-right text-[11px] font-mono text-lt-muted uppercase tracking-[0.3em]">
        {rightLabel}
      </div>
    </div>
  )
}
