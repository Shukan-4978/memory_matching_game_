import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ScoreBoard } from './components/ScoreBoard';
import { Controls } from './components/Controls';
import { Board } from './components/Board';
import { WinModal } from './components/WinModal';
import { SettingsModal } from './components/SettingsModal';
import { StatsModal } from './components/StatsModal';
import { useGame } from './hooks/useGame';
import { useTimer } from './hooks/useTimer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { calculateScore } from './utils/score';
import { THEMES, DIFFICULTIES, GAME_STATUS } from './utils/constants';

function App() {
  // Local Storage Settings
  const [themeId, setThemeId] = useLocalStorage('memoryTheme', THEMES.ANIMALS.id);
  const [difficultyId, setDifficultyId] = useLocalStorage('memoryDifficulty', DIFFICULTIES.EASY.id);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('memoryDarkMode', false);
  const [isSoundEnabled, setIsSoundEnabled] = useLocalStorage('memorySound', true);
  const [stats, setStats] = useLocalStorage('memoryStats', {
    bestScore: 0,
    bestTime: 0, // 0 means not set
    fewestMoves: 0,
    gamesPlayed: 0
  });

  const theme = THEMES[themeId.toUpperCase()] || THEMES.ANIMALS;
  const difficulty = DIFFICULTIES[difficultyId.toUpperCase()] || DIFFICULTIES.EASY;

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(true); // Open by default
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [score, setScore] = useState(0);

  // Core Game Hook
  const {
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
    moveHistory
  } = useGame(theme, difficulty, isSoundEnabled);

  // Timer Hook
  const { time, formattedTime, resetTimer } = useTimer(
    status === GAME_STATUS.PLAYING && matchedPairs < difficulty.pairs,
    isPaused
  );

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [hasProcessedWin, setHasProcessedWin] = useState(false);

  // Reset processed state when playing
  useEffect(() => {
    if (status === GAME_STATUS.PLAYING) {
      setHasProcessedWin(false);
    }
  }, [status]);

  // Handle Score Calculation on Win
  useEffect(() => {
    if (status === GAME_STATUS.WON && !hasProcessedWin) {
      setHasProcessedWin(true);
      const currentScore = calculateScore({
        moves,
        timeInSeconds: time,
        difficultyMultiplier: difficulty.multiplier,
        pairsCount: difficulty.pairs
      });
      setScore(currentScore);

      // Update Stats
      setStats(prevStats => {
        const newStats = { ...prevStats };
        newStats.gamesPlayed = (newStats.gamesPlayed || 0) + 1;
        
        if (currentScore > (newStats.bestScore || 0)) {
          newStats.bestScore = currentScore;
        }
        if (newStats.bestTime === 0 || time < newStats.bestTime) {
          newStats.bestTime = time;
        }
        if (newStats.fewestMoves === 0 || moves < newStats.fewestMoves) {
          newStats.fewestMoves = moves;
        }
        
        return newStats;
      });
    }
  }, [status, moves, time, difficulty, setStats, hasProcessedWin]);

  const handleStartGame = () => {
    setIsSettingsOpen(false);
    resetTimer();
    initGame();
  };

  const handleRestart = () => {
    resetTimer();
    initGame();
  };

  // Prevent selecting dark mode directly within a class
  return (
    <div className="min-h-screen pb-12 transition-colors duration-300">
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isSoundEnabled={isSoundEnabled}
        toggleSound={() => setIsSoundEnabled(!isSoundEnabled)}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {!isSettingsOpen && (
        <main>
          <ScoreBoard 
            moves={moves}
            formattedTime={formattedTime}
            score={calculateScore({ moves, timeInSeconds: time, difficultyMultiplier: difficulty.multiplier, pairsCount: difficulty.pairs })}
            bestScore={stats.bestScore}
            matchedPairs={matchedPairs}
            totalPairs={difficulty.pairs}
          />

          <Controls 
            status={status}
            isPaused={isPaused}
            onPause={pauseGame}
            onResume={resumeGame}
            onRestart={handleRestart}
            onExit={() => setIsSettingsOpen(true)}
            onHint={hint}
            onUndo={undoMove}
            onShuffle={shuffleRemaining}
            canUndo={moveHistory.length > 0}
          />

          <Board 
            cards={cards}
            onCardClick={handleCardClick}
            difficultyCols={difficulty.gridSize.cols}
            disabled={status !== GAME_STATUS.PLAYING || isPaused}
          />
        </main>
      )}

      {/* Modals */}
      <SettingsModal 
        isOpen={isSettingsOpen}
        currentTheme={theme}
        currentDifficulty={difficulty}
        onThemeChange={(t) => setThemeId(t.id)}
        onDifficultyChange={(d) => setDifficultyId(d.id)}
        onStart={handleStartGame}
      />

      <WinModal 
        isOpen={status === GAME_STATUS.WON && !isSettingsOpen}
        score={score}
        moves={moves}
        formattedTime={formattedTime}
        onPlayAgain={() => setIsSettingsOpen(true)} // Open settings for new game
      />

      <StatsModal 
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
      />
    </div>
  );
}

export default App;
