import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';

export const Card = React.memo(function Card({ card, index, onClick, disabled }) {
  const { icon, isFlipped, isMatched } = card;

  const handleClick = useCallback(() => {
    if (!disabled) onClick(index);
  }, [index, onClick, disabled]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) onClick(index);
    }
  }, [index, onClick, disabled]);

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={isFlipped || isMatched ? `Card shows ${icon}` : 'Unflipped card'}
      aria-disabled={disabled}
      className={clsx(
        'relative cursor-pointer perspective-1000 transition-transform hover:scale-105 outline-none focus-visible:ring-4 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-xl',
        disabled && 'pointer-events-none opacity-90'
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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
        <div className="absolute w-full h-full backface-hidden glass rounded-xl flex items-center justify-center" aria-hidden="true">
          <Sparkles className="text-indigo-400 w-1/3 h-1/3 opacity-50" />
        </div>

        {/* Back of Card (Face Up / Matched) */}
        <div
          className={clsx(
            'absolute w-full h-full backface-hidden rotate-y-180 rounded-xl flex items-center justify-center text-3xl sm:text-4xl md:text-5xl select-none',
            isMatched ? 'bg-green-100/80 dark:bg-green-900/50 border-2 border-green-400/50' : 'glass'
          )}
          aria-hidden="true"
        >
          {icon}
          {isMatched && (
            <div className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-xl animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
});
