import React from 'react';
import { Trophy, Timer, Hash, Star, Play, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export function WinModal({ isOpen, score, moves, formattedTime, onPlayAgain }) {
  
  useEffect(() => {
    if (isOpen) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-300">
        
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
            <Trophy size={40} className="text-white" />
          </div>
          
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
            Outstanding!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            You've matched all the cards perfectly.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-2xl flex flex-col items-center">
              <Star className="text-yellow-500 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Score</span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{score}</span>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-2xl flex flex-col items-center">
              <Timer className="text-blue-500 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Time</span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{formattedTime}</span>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-2xl flex flex-col items-center col-span-2">
              <Hash className="text-purple-500 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Moves</span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{moves}</span>
            </div>
          </div>

          <button 
            onClick={onPlayAgain}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Play Again
          </button>
        </div>

      </div>
    </div>
  );
}
