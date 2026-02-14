export const LoaderRatio = {
  position: 'fixed',
  boxSize: '100% 100%',
  inset: '0 0 0 0',
  zIndex: 9990099,
  pointerEvents: 'none',
  theme: 'document',
  overflow: 'hidden',
  animationDuration: 'E',
  color: 'dim',
  ':after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    borderRadius: '100%',
    '@dark': {
      background: `radial-gradient(
          circle,
          rgba(5, 5, 5, 0.98) 6.5%,
          rgba(5, 5, 5, 0) 75%
        )`,
    },
    '@light': {
      background: `radial-gradient(
          circle,
          rgba(241, 241, 243, 0.98) 6.5%,
          rgba(241, 241, 243, 0) 75%
        )`,
    },
  },
};