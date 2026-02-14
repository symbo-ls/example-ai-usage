export const Draggable = {
  position: 'relative',
  transition: 'A defaultBezier',
  transitionProperty: 'transform, opacity',
  minWidth: 'G',
  ':not(:hover) > footer': {
    pointerEvents: 'none',
    height: 'A2',
    opacity: '0',
  },
  ':hover': {
    zIndex: 3,
  },
  ':hover > footer, &:focus-within > footer': {
    pointerEvents: 'auto',
    height: 'B2',
    opacity: '1',
  },
  onDragstart: (e, el, s) => {
    e.stopPropagation()
    if (!el.parent.data) el.parent.data = {}
    el.setProps({
      transform: 'scale(0.97)',
      opacity: '0',
      isDragging: true
    })
    el.parent.data.fromIndex = el.key
    el.parent.data.state = s.parent
  },
  onDragover: (e, el, s) => {
    e.stopPropagation()
    e.preventDefault()
    if (!el.parent.data) return
    return false
  },
  onDragenter: (e, el, s) => {
    e.preventDefault()
    e.stopPropagation()
    if (!el.parent.data) return
    const isSame = el.parent.data.fromIndex === el.key
    const isSameGroup = el.parent.data.state === s.parent
    const isRootNode = e.target === el.node
    if (isSame || !isSameGroup || isRootNode) return
    el.parent.data.active = el.key
    el.setProps({
      transform: `scale(0.97)`,
      opacity: '0.9'
    })
  },
  onDragleave: (e, el, s) => {
    e.preventDefault()
    e.stopPropagation()
    if (!el.parent.data) return
    const isSame = el.parent.data.fromIndex === el.key
    const isSameGroup = el.parent.data.state === s.parent
    const isRootNode = e.target === el.node
    if (isSame || !isSameGroup || isRootNode) return
    el.parent.data.active = el.key
    el.setProps({
      opacity: '1',
      transform: 'none'
    })
  },
  onDrop: (e, el, s, ctx) => {
    if (!el.parent.data) return
    const isSame = el.parent.data.fromIndex === el.key
    const isSameGroup = el.parent.data.state === s.parent
    if (isSame || !isSameGroup) return
    if (e.stopPropagation) e.stopPropagation()
    const toIndex = el.key
    s.parent.apply((state) => ctx.utils.swapItemsInArray(state, el.parent.data.fromIndex, toIndex))
    el.setProps({
      opacity: '1',
      transform: 'none'
    })
  },
  onDragend: (e, el, s) => {
    el.setProps({
      opacity: '1',
      transform: 'none',
      isDragging: false
    })
  },
  attr: {
    draggable: true,
  },
  IteratorFooter: {},
};