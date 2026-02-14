export const DraggableRow = {
  transition: 'A defaultBezier',
  transitionProperty: 'transform, opacity',
  minWidth: 'G',
  dragstart: {
    transform: 'scale(0.97)',
    opacity: '0',
    isDragging: true,
  },
  onDragstart: (e, el, s) => {
    e.stopPropagation()
    if (!el.parent.data) el.parent.data = {}
    el.setProps(el.props.dragstart)
    el.parent.data.fromIndex = el.key
    el.parent.data.state = s.parent
  },
  dragenter: {
    transform: 'scale(0.97)',
    opacity: '0.9',
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
    el.setProps(el.props.dragenter)
  },
  onDragover: (e, el, s) => {
    e.stopPropagation()
    e.preventDefault()
    if (!el.parent.data) return
    return false
  },
  dragleave: {
    opacity: '1',
    transform: 'none',
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
    el.setProps(el.props.dragenter)
  },
  drop: {
    opacity: '1',
    transform: 'none',
  },
  onDrop: (e, el, s, ctx) => {
    if (!el.parent.data) return
    const isSame = el.parent.data.fromIndex === el.key
    const isSameGroup = el.parent.data.state === s.parent
    if (isSame || !isSameGroup) return
    if (e.stopPropagation) e.stopPropagation()
    const toIndex = el.key
    s.parent.apply((state) => ctx.utils.swapItemsInArray(state, el.parent.data.fromIndex, toIndex))
    el.setProps(el.props.drop)
  },
  dragend: {
    opacity: '1',
    transform: 'none',
    isDragging: false,
  },
  onDragend: (e, el, s) => {
    el.setProps(el.props.dragend)
  },
  ':not(:hover) > footer': {
    pointerEvents: 'none',
    opacity: '0',
  },
  ':hover > footer, &:focus-within > footer': {
    pointerEvents: 'auto',
    opacity: '1',
  },
  attr: {
    draggable: true,
  },
  IteratorFooter: {},
};