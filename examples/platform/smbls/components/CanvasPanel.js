export const CanvasPanel = {
  useGlassmorphism: el => el.getUserSettings('useGlassmorphism'),
  '.useGlassmorphism': {
    theme: 'canvas-card-glass',
  },
  '!useGlassmorphism': {
    theme: 'canvas-card',
  },
  useAnimations: el => el.getUserSettings('useAnimations'),
  '.useAnimations': {
    transition: 'C defaultBezier',
  },
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
};