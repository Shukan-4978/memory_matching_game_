import React from 'react';
import { Moon, Sun, Volume2, VolumeX, Settings, Trophy } from 'lucide-react';

export function Header({ isDarkMode, toggleDarkMode, isSoundEnabled, toggleSound, onOpenStats }) {
  return (
    <header className="w-full p-4 sm:p-6 flex items-center justify-between glass z-10 sticky top-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transform rotate-12">
          <span className="text-white font-bold text-xl -rotate-12">M</span>
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 hidden sm:block">
          Memory Match
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onOpenStats}
          className="btn-icon"
          title="Statistics"
        >
          <Trophy size={20} />
        </button>
        <button 
          onClick={toggleSound}
          className="btn-icon"
          title={isSoundEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
        <button 
          onClick={toggleDarkMode}
          className="btn-icon"
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
