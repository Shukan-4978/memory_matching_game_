import React from 'react';
import { Play, Pause, RotateCcw, Lightbulb, Undo2, Shuffle, LogOut } from 'lucide-react';
import { GAME_STATUS } from '../utils/constants';

export function Controls({ 
  status, 
  isPaused, 
  onPause, 
  onResume, 
  onRestart, 
  onHint, 
  onUndo, 
  onShuffle,
  onExit,
  canUndo 
}) {
  const isPlaying = status === GAME_STATUS.PLAYING;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-4 mb-8">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        
        {isPlaying && !isPaused && (
          <button onClick={onPause} className="btn-secondary flex items-center gap-2">
            <Pause size={18} />
            <span className="hidden sm:inline">Pause</span>
          </button>
        )}
        
        {isPlaying && isPaused && (
          <button onClick={onResume} className="btn-primary flex items-center gap-2">
            <Play size={18} />
            <span>Resume</span>
          </button>
        )}

        <button onClick={onRestart} className="btn-secondary flex items-center gap-2">
          <RotateCcw size={18} />
          <span className="hidden sm:inline">Restart</span>
        </button>

        <button onClick={onExit} className="btn-secondary text-red-500 dark:text-red-400 border-red-200 dark:border-red-800/50 hover:bg-red-50 dark:hover:bg-red-900/30 flex items-center gap-2" title="Exit to Menu">
          <LogOut size={18} />
          <span className="hidden sm:inline">Exit</span>
        </button>

        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-2 hidden sm:block"></div>

        <button 
          onClick={onHint} 
          disabled={!isPlaying || isPaused}
          className="btn-secondary flex items-center gap-2"
          title="Hint: Show unmatched cards briefly"
        >
          <Lightbulb size={18} />
          <span className="hidden sm:inline">Hint</span>
        </button>

        <button 
          onClick={onUndo} 
          disabled={!isPlaying || isPaused || !canUndo}
          className="btn-secondary flex items-center gap-2"
          title="Undo last move"
        >
          <Undo2 size={18} />
          <span className="hidden sm:inline">Undo</span>
        </button>

        <button 
          onClick={onShuffle} 
          disabled={!isPlaying || isPaused}
          className="btn-secondary flex items-center gap-2"
          title="Shuffle remaining cards"
        >
          <Shuffle size={18} />
          <span className="hidden sm:inline">Shuffle</span>
        </button>

      </div>
    </div>
  );
}
