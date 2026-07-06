import { useState, useEffect, useCallback } from 'react';

export function useTimer(isActive, isPaused) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const resetTimer = useCallback(() => {
    setTime(0);
  }, []);

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  return { time, formattedTime, resetTimer };
}
