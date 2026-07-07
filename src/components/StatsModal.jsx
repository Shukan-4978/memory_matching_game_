import React from 'react';
import { X, Trophy, Timer, Hash } from 'lucide-react';

export function StatsModal({ isOpen, onClose, stats }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
          <Trophy className="text-yellow-500" />
          Game Statistics
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
            <span className="text-gray-600 dark:text-gray-300 font-medium">Best Score</span>
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.bestScore || 0}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
              <Timer size={18} />
              Best Time
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {stats.bestTime ? `${Math.floor(stats.bestTime / 60)}:${(stats.bestTime % 60).toString().padStart(2, '0')}` : '--:--'}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
              <Hash size={18} />
              Fewest Moves
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {stats.fewestMoves || '--'}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
            <span className="text-gray-600 dark:text-gray-300 font-medium">Games Played</span>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {stats.gamesPlayed || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
