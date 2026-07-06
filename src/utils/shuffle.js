export const shuffleCards = (icons, pairsCount) => {
  // Select the required number of unique icons for the pairs
  const selectedIcons = [...icons].sort(() => 0.5 - Math.random()).slice(0, pairsCount);
  
  // Create pairs
  const cardPairs = [...selectedIcons, ...selectedIcons];
  
  // Fisher-Yates shuffle
  for (let i = cardPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
  }
  
  // Map to objects with unique IDs
  return cardPairs.map((icon, index) => ({
    id: `card-${index}-${Date.now()}`,
    icon,
    isFlipped: false,
    isMatched: false,
  }));
};
