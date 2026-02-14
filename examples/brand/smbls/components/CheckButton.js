export const CheckButton = {
  extends: [
    'Button',
    'ClickableItem',
  ],
  icon: 'checkmark',
  padding: 'Z1 B1 Z1 B',
  round: 'B',
  flexAlign: 'center center',
  theme: 'quaternary',
  gap: 'X2',
  ':disabled': {
    opacity: '.35',
    theme: 'secondary',
  },
};