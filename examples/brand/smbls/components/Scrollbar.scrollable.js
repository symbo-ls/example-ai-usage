const Scrollbarscrollable = {
  extends: 'Scrollbar',
  minWidth: '100%',
  maxWidth: '100%',
  TrackContainer: {
    Track: {
      background: 'gray3',
      onFrame: el => {
        const Scrollable = el.lookup('Scrollable')
        if (!Scrollable) return
        const scrollableNode = Scrollable.node
        const viewportRatio = scrollableNode.clientWidth / scrollableNode.scrollWidth
        const scrollRatio =
          scrollableNode.scrollLeft / (scrollableNode.scrollWidth - scrollableNode.clientWidth)

        el.variables({
          clientWidth: scrollableNode.clientWidth,
          scrollWidth: scrollableNode.scrollWidth
        }).changed(() => {
          const ScrollBar = el.lookup('Scrollbar')
          // Check if there's no scrollable area
          if (scrollableNode.clientWidth >= scrollableNode.scrollWidth) {
            ScrollBar.setNodeStyles({
              display: 'none'
            })
          } else {
            ScrollBar.setNodeStyles({
              display: 'flex'
            })
          }
        })

        // Set width as percentage of viewport vs scrollable area
        el.node.style.width = `${viewportRatio * 100}%`
        el.node.style.transform = `translateX(${
          scrollRatio * (100 - viewportRatio * 100)
        }%)`
      },
    },
  },
  NavigationArrows: {
    childProps: {
      theme: 'field',
      onClick: (ev, el) => {
        const scrollableNode = el.lookup('Scrollable').node
        const isLeft = el.key === '0'
        const scrollAmount = scrollableNode.clientWidth * 0.65

        scrollableNode.scrollBy({
          left: isLeft ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        })
      },
      Icon: {},
    },
  },
};

export { Scrollbarscrollable as 'Scrollbar.scrollable' }