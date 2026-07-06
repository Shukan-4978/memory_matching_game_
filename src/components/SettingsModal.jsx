import React from 'react';
import { DIFFICULTIES, THEMES } from '../utils/constants';

export function SettingsModal({ isOpen, onStart, currentTheme, currentDifficulty, onThemeChange, onDifficultyChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Game Settings</h2>
        
        <div className="space-y-6">
          {/* Theme Selection */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Select Theme
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.values(THEMES).map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme)}
                  className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                    currentTheme.id === theme.id 
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                      : 'border-transparent bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-2xl">{theme.icons[0]}</span>
                  <span className="text-sm font-medium">{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Select Difficulty
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.values(DIFFICULTIES).map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => onDifficultyChange(diff)}
                  className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    currentDifficulty.id === diff.id 
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                      : 'border-transparent bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="font-bold">{diff.label.split(' ')[0]}</span>
                  <span className="text-xs opacity-80">{diff.label.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={onStart}
          className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
