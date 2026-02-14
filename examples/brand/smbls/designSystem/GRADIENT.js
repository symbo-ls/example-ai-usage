export default {
  dotsDark: 'radial-gradient(#252527 6%, transparent 6%)',
  dotsMid: 'radial-gradient(#43434b 6%, transparent 6%)',
  dotsLight: 'radial-gradient(#d9d9db 6%, transparent 6%)',
  radialGrad: 'radial-gradient(#08080E00 0%, #0A0A0B 100%)',
  transparentBg: 'linear-gradient(45deg, #1c1c1f 25%, transparent 25%), linear-gradient(-45deg, #1c1c1f 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1c1c1f 75%), linear-gradient(-45deg, transparent 75%, #1c1c1f 75%)',
  'shadow-overlay': {
    '@dark': 'linear-gradient(0deg, var(--theme-document-dark-background) 0%, transparent 100%)',
    '@light': 'linear-gradient(0deg, var(--theme-document-light-background) 0%, transparent 100%)',
  },
  'shadow-overlay-reversed': {
    '@dark': 'linear-gradient(180deg, var(--theme-document-dark-background) 0%, transparent 100%)',
    '@light': 'linear-gradient(180deg, var(--theme-document-light-background) 0%, transparent 100%)',
  },
  'panel-overlay': {
    '@dark': 'linear-gradient(to top, rgba(8, 8, 8, 1) 0%, rgba(8, 8, 8, .85) 45%, rgba(8, 8, 8, .65) 65%, rgba(8, 8, 8, 0) 100%)',
    '@light': 'linear-gradient(to top, rgba(241, 241, 243, 1) 0%, rgba(241, 241, 243, 0.85) 65%, rgba(241, 241, 243, 0.65) 40%, rgba(241, 241, 243, 0) 100%)',
  },
  'button-gradient': 'linear-gradient(to top, rgba(50, 114, 184, .2), rgba(0, 121, 253, .27), rgba(0, 121, 253, .27))',
  'button-gradient-active': 'linear-gradient(to top, rgba(50, 114, 184, .25), rgba(0, 121, 253, .32), rgba(0, 121, 253, .32))',
  theme: 'conic-gradient(rgba(91,194,229,0.3), rgba(109,71,169,0.3), rgba(238,144,189,0.3), rgba(52,119,244,0.3), rgba(91,194,229,0.3))',
  themeDark: 'conic-gradient(rgba(91,194,229,0.65), rgba(109,71,169,0.65), rgba(238,144,189,0.65), rgba(52,119,244,0.65), rgba(91,194,229,0.65))',
  'gradient-dark': `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`,
  'gradient-dark-active': `linear-gradient(0deg,
    rgba(0,0,0,0.1) 0%,
    rgba(0,0,0,0.11) 100%
  )`,
  'gradient-light': `linear-gradient(
    0deg,
    rgba(255,255,255,0.05) 0%,
    rgba(255,255,255,0.06) 100%
  )`,
  'gradient-light-active': `linear-gradient(
    0deg,
    rgba(255,255,255,0.09) 0%,
    rgba(255,255,255,0.10) 100%
  )`,
  'gradient-colorful': `linear-gradient(60deg,
    #0E1766 0%,
    #2127A7 65%,
    #1A1F8E 100%
  )`,
  'gradient-colorful-active': `linear-gradient(60deg,
    #00A2E7 0%,
    #185DF3 25%,
    #1E54F0 32%,
    #8B4CCA 75%,
    #C66894 100%
  )`,
};