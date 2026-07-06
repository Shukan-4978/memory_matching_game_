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
  },
  SPORTS: {
    id: 'sports',
    label: 'Sports',
    icons: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '⛸', '🎿', '⛷', '🏂']
  },
  VEHICLES: {
    id: 'vehicles',
    label: 'Vehicles',
    icons: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🏍', '🛺', '🚂', '🚆', '🚇', '🚈', '🚉', '🚊', '🚁', '🛩', '✈', '🛫', '🛬', '🚀', '🛰', '🛸', '🛶']
  },
  FOOD: {
    id: 'food',
    label: 'Food',
    icons: ['🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥']
  },
  FLAGS: {
    id: 'flags',
    label: 'Flags',
    icons: ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇯🇵', '🇩🇪', '🇫🇷', '🇮🇹', '🇪🇸', '🇧🇷', '🇮🇳', '🇨🇳', '🇷🇺', '🇿🇦', '🇲🇽', '🇦🇷', '🇰🇷', '🇳🇿', '🇸🇪', '🇨🇭', '🇳🇱', '🇹🇷', '🇸🇦', '🇦🇪', '🇪🇬', '🇳🇬', '🇰🇪', '🇮🇱', '🇸🇬', '🇲🇾', '🇹🇭', '🇻🇳']
  },
  ALPHABETS: {
    id: 'alphabets',
    label: 'Alphabets',
    icons: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5']
  },
  LANGUAGES: {
    id: 'languages',
    label: 'Languages',
    icons: ['EN', 'ES', 'FR', 'DE', 'IT', 'PT', 'RU', 'ZH', 'JA', 'KO', 'HI', 'AR', 'TR', 'NL', 'SV', 'FI', 'DA', 'NO', 'PL', 'CS', 'HU', 'EL', 'HE', 'TH', 'VI', 'ID', 'MS', 'TL', 'SW', 'AM', 'YO', 'ZU']
  }
};

export const GAME_STATUS = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  WON: 'WON',
  LOST: 'LOST'
};
