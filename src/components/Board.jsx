import React from 'react';
import { Card } from './Card';
import clsx from 'clsx';

export function Board({ cards, onCardClick, difficultyCols, disabled }) {
  // Determine grid columns based on difficulty
  const getGridColsClass = (cols) => {
    switch (cols) {
      case 4: return 'grid-cols-4';
      case 6: return 'grid-cols-4 sm:grid-cols-6';
      case 8: return 'grid-cols-4 sm:grid-cols-6 md:grid-cols-8';
      default: return 'grid-cols-4';
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div 
        className={clsx(
          'grid gap-3 sm:gap-4 md:gap-5 mx-auto',
          getGridColsClass(difficultyCols)
        )}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => onCardClick(index)}
            disabled={disabled || card.isFlipped || card.isMatched}
          />
        ))}
      </div>
    </div>
  );
}
