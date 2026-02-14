export const compile = {
  flow: 'y',
  gap: 'Y1',
  round: 'A',
  width: '100%',
  padding: 'Y1',
  height: '100%',
  ':hover .close': {
    opacity: 1,
    visibility: 'visible',
  },
  onInit: async (el, s) => {
    const dist = await el.call('compileCode', s.source, s.compilingMethod)
    s.update({
      dist
    })
  },
  onBeforeUpdate: async (changes, el, s) => {
    const {
      source,
      compilingMethod
    } = changes

    if (source !== undefined || compilingMethod !== undefined) {
      const newSource = source !== undefined ? source : s.source
      const newMethod =
        compilingMethod !== undefined ? compilingMethod : s.compilingMethod

      const dist = await el.call('compileCode', newSource, newMethod)
      s.dist = dist
    }
  },
};