import React from 'react';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';

export function Card({ card, onClick, disabled }) {
  const { icon, isFlipped, isMatched } = card;

  return (
    <div
      className={clsx(
        'relative cursor-pointer perspective-1000 transition-transform hover:scale-105',
        disabled && 'pointer-events-none opacity-90'
      )}
      onClick={onClick}
      style={{ aspectRatio: '1/1' }}
    >
      <div
        className={clsx(
          'w-full h-full duration-500 transform-style-3d',
          (isFlipped || isMatched) && 'rotate-y-180',
          !isMatched && isFlipped && 'animate-glow'
        )}
      >
        {/* Front of Card (Face Down) */}
        <div className="absolute w-full h-full backface-hidden glass rounded-xl flex items-center justify-center">
          <Sparkles className="text-indigo-400 w-1/3 h-1/3 opacity-50" />
        </div>

        {/* Back of Card (Face Up / Matched) */}
        <div
          className={clsx(
            'absolute w-full h-full backface-hidden rotate-y-180 rounded-xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl select-none',
            isMatched ? 'bg-green-100/80 dark:bg-green-900/50 border-2 border-green-400/50' : 'glass'
          )}
        >
          {icon}
          {isMatched && (
            <div className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-xl animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
