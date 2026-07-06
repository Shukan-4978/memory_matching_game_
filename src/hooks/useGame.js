import { useState, useEffect, useCallback } from 'react';
import { GAME_STATUS } from '../utils/constants';
import { shuffleCards } from '../utils/shuffle';

export function useGame(theme, difficulty) {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [status, setStatus] = useState(GAME_STATUS.IDLE);
  const [isPaused, setIsPaused] = useState(false);
  const [moveHistory, setMoveHistory] = useState([]); // For undo feature

  // Initialize game
  const initGame = useCallback(() => {
    const newCards = shuffleCards(theme.icons, difficulty.pairs);
    setCards(newCards);
    setFlippedIndices([]);
    setMatchedPairs(0);
    setMoves(0);
    setStatus(GAME_STATUS.PLAYING);
    setIsPaused(false);
    setMoveHistory([]);
  }, [theme, difficulty]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleCardClick = (index) => {
    // Prevent clicking if game not playing, paused, card already flipped/matched, or 2 cards already flipped
    if (
      status !== GAME_STATUS.PLAYING ||
      isPaused ||
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedIndices.length >= 2
    ) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);
    
    // Optimistically flip the card
    setCards((prev) => {
      const newCards = [...prev];
      newCards[index] = { ...newCards[index], isFlipped: true };
      return newCards;
    });

    if (newFlippedIndices.length === 2) {
      setMoves((m) => m + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      // Save move to history before evaluating match
      setMoveHistory((prev) => [...prev, { firstIndex, secondIndex }]);

      if (cards[firstIndex].icon === cards[secondIndex].icon) {
        // Match found
        setTimeout(() => {
          setCards((prev) => {
            const newCards = [...prev];
            newCards[firstIndex] = { ...newCards[firstIndex], isMatched: true };
            newCards[secondIndex] = { ...newCards[secondIndex], isMatched: true };
            return newCards;
          });
          setMatchedPairs((pairs) => pairs + 1);
          setFlippedIndices([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) => {
            const newCards = [...prev];
            newCards[firstIndex] = { ...newCards[firstIndex], isFlipped: false };
            newCards[secondIndex] = { ...newCards[secondIndex], isFlipped: false };
            return newCards;
          });
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const undoMove = () => {
    if (moveHistory.length === 0 || flippedIndices.length > 0) return;
    
    const lastMove = moveHistory[moveHistory.length - 1];
    const { firstIndex, secondIndex } = lastMove;
    
    setCards((prev) => {
      const newCards = [...prev];
      // Check if they were matched, if so reduce matched pairs
      if (newCards[firstIndex].isMatched) {
        setMatchedPairs((p) => p - 1);
      }
      newCards[firstIndex] = { ...newCards[firstIndex], isFlipped: false, isMatched: false };
      newCards[secondIndex] = { ...newCards[secondIndex], isFlipped: false, isMatched: false };
      return newCards;
    });
    
    setMoveHistory((prev) => prev.slice(0, -1));
    // Optionally we can subtract a move, but usually undo keeps the move count or adds penalty
  };

  const hint = () => {
    // Briefly show all unmatched cards
    if (status !== GAME_STATUS.PLAYING || isPaused) return;
    
    setCards((prev) => prev.map(c => c.isMatched ? c : { ...c, isFlipped: true }));
    
    setTimeout(() => {
      setCards((prev) => prev.map((c, i) => 
        c.isMatched || flippedIndices.includes(i) ? c : { ...c, isFlipped: false }
      ));
    }, 1000);
  };

  const shuffleRemaining = () => {
    setCards((prev) => {
      const unmatched = prev.filter(c => !c.isMatched);
      // Shuffle unmatched
      for (let i = unmatched.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unmatched[i], unmatched[j]] = [unmatched[j], unmatched[i]];
      }
      
      // Reconstruct array
      let unmatchedIndex = 0;
      return prev.map(c => {
        if (c.isMatched) return c;
        return unmatched[unmatchedIndex++];
      });
    });
    setFlippedIndices([]); // reset flipped if any
  };

  const pauseGame = () => setIsPaused(true);
  const resumeGame = () => setIsPaused(false);

  // Check win condition
  useEffect(() => {
    if (matchedPairs === difficulty.pairs && difficulty.pairs > 0) {
      setStatus(GAME_STATUS.WON);
    }
  }, [matchedPairs, difficulty.pairs]);

  return {
    cards,
    moves,
    matchedPairs,
    status,
    isPaused,
    handleCardClick,
    initGame,
    pauseGame,
    resumeGame,
    undoMove,
    hint,
    shuffleRemaining,
    moveHistory,
  };
}
