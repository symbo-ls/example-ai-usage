export const dropdownClick = async function dropdownClick (event) {
  const element = this
  const { state, context } = element
  if (state.subdropdown) {
    event.stopPropagation()
    const Dropdown = element.lookup('Dropdown')
    const SubDropdown = element.lookup('SubDropdown')

    const { top: dropdownTop, left: dropdownLeft } =
      Dropdown.node.getBoundingClientRect()
    const { width, height } = SubDropdown.node.getBoundingClientRect()
    const { top, left } = element.node.getBoundingClientRect()
    const { innerWidth, innerHeight } = window

    const topPos = top - dropdownTop
    const leftPos = left - dropdownLeft

    const diffX = left + width * 2 > innerWidth ? width * 2 : 0
    const diffY =
      top + height > innerHeight ? Math.abs(innerHeight - top - height - 16) : 8

    SubDropdown.setNodeStyles({
      transform: `translate3d(${leftPos - diffX}px, ${topPos - diffY}px, 1px)`,
      pointerEvents: 'auto',
      visibility: 'visible',
      opacity: '1'
    })
    return
  }
  if (state.onClick) return await state.onClick(event, element, state, context)
  const Dropdown = element.lookup(el => el.props.isDropdownRoot)
  if (!Dropdown) return
  await Dropdown.props?.onChoose?.(
    event,
    Dropdown,
    Dropdown.state,
    Dropdown.context,
    element
  )
}