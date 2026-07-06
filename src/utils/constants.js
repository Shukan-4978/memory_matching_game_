export const DIFFICULTIES = {
  EASY: {
    id: 'easy',
    label: 'Easy (4x4)',
    gridSize: { rows: 4, cols: 4 },
    pairs: 8,
    multiplier: 1,
  },
  MEDIUM: {
    id: 'medium',
    label: 'Medium (6x6)',
    gridSize: { rows: 6, cols: 6 },
    pairs: 18,
    multiplier: 1.5,
  },
  HARD: {
    id: 'hard',
    label: 'Hard (8x8)',
    gridSize: { rows: 8, cols: 8 },
    pairs: 32,
    multiplier: 2,
  }
};

export const THEMES = {
  ANIMALS: {
    id: 'animals',
    label: 'Animals',
    icons: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞']
  },
  FRUITS: {
    id: 'fruits',
    label: 'Fruits',
    icons: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🌽', '🥕', '🥔', '🍠', '🥐', '🍞', '🥖', '🥨', '🧀', '🥚']
  },
  SPACE: {
    id: 'space',
    label: 'Space',
    icons: ['🚀', '🛸', '🛰', '🌌', '🌍', '🌕', '🪐', '💫', '⭐', '☄️', '🌠', '👨‍🚀', '👽', '👾', '🌑', '🌒', '🌓', '🌔', '🌖', '🌗', '🌘', '🌙', '🌞', '🌛', '🌜', '🌡', '🌤', '⛅', '🌥', '☁', '🌦', '🌧']
  },
  PROGRAMMING: {
    id: 'programming',
    label: 'Programming',
    icons: ['💻', '⌨️', '🖱', '🖥', '🖨', '📱', '⌚', '💾', '💿', '📀', '💡', '🔌', '🔋', '⚙️', '🛠', '🤖', '👾', '📡', '🚀', '🧠', '🔍', '📊', '📈', '📉', '📋', '📁', '📂', '📄', '📃', '📑', '📘', '📕']
  },
  EMOJIS: {
    id: 'emojis',
    label: 'Emojis',
    icons: ['😀', '😂', '😎', '😍', '🤔', '😴', '🥳', '🤯', '🥶', '🥵', '🤢', '🤠', '🤡', '👻', '💀', '👽', '👾', '🤖', '🎃', '💩', '🙈', '🙉', '🙊', '💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕']
  }
};

export const GAME_STATUS = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  WON: 'WON',
  LOST: 'LOST'
};
