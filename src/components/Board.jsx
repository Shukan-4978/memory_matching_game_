import React from 'react';
import { Card } from './Card';
import clsx from 'clsx';

export const Board = React.memo(function Board({ cards, onCardClick, difficultyCols, disabled }) {
  // Determine grid columns dynamically based on difficulty
  const gridClass = () => {
    switch (difficultyCols) {
      case 4: return 'grid-cols-4';
      case 6: return 'grid-cols-4 sm:grid-cols-6';
      case 8: return 'grid-cols-4 sm:grid-cols-6 md:grid-cols-8';
      default: return 'grid-cols-4';
    }
  };

  return (
    <div className={clsx('grid gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl mx-auto', gridClass())}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          card={card}
          onClick={onCardClick}
          disabled={disabled || card.isFlipped || card.isMatched}
        />
      ))}
    </div>
  );
});
