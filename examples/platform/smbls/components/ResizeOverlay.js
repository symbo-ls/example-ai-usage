export const ResizeOverlay = {
  '--handler-offset': '-0.25em',
  childProps: {
    position: 'absolute',
    round: '100%',
    width: 'Y1',
    height: 'Y1',
    background: '#2485F0',
    style: {
      boxShadow: '#fff 0 0 0 1.5px, #000c 0 1px 4px',
    },
  },
  children: [
    {
      right: '--handler-offset',
      bottom: '--handler-offset',
    },
    {
      left: '--handler-offset',
      bottom: '--handler-offset',
    },
    {
      right: '--handler-offset',
      top: '--handler-offset',
    },
    {
      left: '--handler-offset',
      top: '--handler-offset',
    },
  ],
};