import React from 'react';
import { Timer, Hash, Star } from 'lucide-react';

export function ScoreBoard({ moves, formattedTime, score, bestScore, matchedPairs, totalPairs }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-6">
      <div className="glass rounded-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/40 dark:bg-gray-800/40">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <Timer size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Time</span>
          </div>
          <span className="text-2xl font-bold font-mono text-indigo-700 dark:text-indigo-400">
            {formattedTime}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/40 dark:bg-gray-800/40">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <Hash size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Moves</span>
          </div>
          <span className="text-2xl font-bold font-mono text-indigo-700 dark:text-indigo-400">
            {moves}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/40 dark:bg-gray-800/40">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
            <Star size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Score</span>
          </div>
          <span className="text-2xl font-bold font-mono text-indigo-700 dark:text-indigo-400">
            {score}
          </span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/50">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
            <span className="text-sm font-semibold uppercase tracking-wider">Progress</span>
          </div>
          <span className="text-2xl font-bold font-mono text-indigo-700 dark:text-indigo-400">
            {matchedPairs} / {totalPairs}
          </span>
          <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
