import React from 'react'
import { StripeFooter } from '../StripeFooter'

interface PaperCardProps {
  children: React.ReactNode
  className?: string
  watermark?: string
  showStripe?: boolean
}

export const PaperCard = ({ 
  children, 
  className = '', 
  watermark, 
  showStripe = true 
}: PaperCardProps) => {
  return (
    <div className={`relative w-full bg-lt-bg paper-texture shadow-2xl overflow-hidden ${className}`}>
      {watermark && (
        <div className="absolute -top-10 -right-20 pointer-events-none select-none z-0">
          <span className="font-display text-[200px] sm:text-[320px] text-lt-ink opacity-[0.03] leading-none uppercase">
            {watermark}
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>

      {showStripe && <StripeFooter />}
    </div>
  )
}
