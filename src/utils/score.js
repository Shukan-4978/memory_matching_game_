export const calculateScore = ({ moves, timeInSeconds, difficultyMultiplier, pairsCount }) => {
  if (moves === 0) return 0;
  
  // Base score based on pairs count
  const baseScore = pairsCount * 100;
  
  // Penalty for extra moves (perfect game is moves = pairsCount)
  const extraMoves = Math.max(0, moves - pairsCount);
  const movePenalty = extraMoves * 10;
  
  // Penalty for time (seconds)
  // Assuming a perfect player takes about 2 seconds per pair
  const expectedTime = pairsCount * 2;
  const extraTime = Math.max(0, timeInSeconds - expectedTime);
  const timePenalty = extraTime * 5;
  
  // Calculate final score before multiplier
  let finalScore = baseScore - movePenalty - timePenalty;
  
  // Ensure score doesn't go below a minimum threshold per pair
  const minScore = pairsCount * 10;
  finalScore = Math.max(minScore, finalScore);
  
  // Apply difficulty multiplier
  return Math.round(finalScore * difficultyMultiplier);
};
