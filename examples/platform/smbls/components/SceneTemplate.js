export const SceneTemplate = {
  props: el => ({
    display: 'flex', 
    borderRadius: 'A',
    padding: 'A',
    theme: `scene @${el.getRootState('sceneTheme')}`,
    transition: 'B defaultBezier',
    transitionProperty: 'max-width, background',
    backdropFilter: 'blur(5px)',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',

    scene: {
      position: 'absolute',
      inset: '0 0 0 0',
      boxSize: '100%',
      round: 'A',
      flexFlow: 'column',
      flexAlign: 'center center'
    },

    ':before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      minHeight: '65vh',
      padding: 'B',
      margin: '0 auto',
      theme: `dots @${el.getRootState('sceneTheme')}`,

      style: {
        backgroundPosition: `top`,
        backgroundRepeat: `repeat`,
        backgroundSize: '20px 20px'
      }
    }
  }),
};