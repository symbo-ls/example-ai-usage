export const SwipeCard = {
  extends: 'Flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'grab',
  style: {
    userSelect: 'none',
    touchAction: 'none',
    willChange: 'transform'
  },

  scope: {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    isDragging: false,

    onPointerDown: (el, s, e) => {
      el.scope.isDragging = true
      el.scope.startX = e.clientX
      el.scope.startY = e.clientY
      el.scope.currentX = 0
      el.scope.currentY = 0
      el.node.style.cursor = 'grabbing'
      el.node.style.transition = 'none'
    },

    onPointerMove: (el, s, e) => {
      if (!el.scope.isDragging) return
      el.scope.currentX = e.clientX - el.scope.startX
      el.scope.currentY = e.clientY - el.scope.startY
      var rotation = el.scope.currentX * 0.1
      if (rotation > 15) rotation = 15
      if (rotation < -15) rotation = -15
      el.node.style.transform = 'translate(' + el.scope.currentX + 'px, ' + el.scope.currentY + 'px) rotate(' + rotation + 'deg)'

      var card = el.node.querySelector('[data-profile-card]')
      if (!card) return
      var likeStamp = card.querySelectorAll('[data-stamp]')[0]
      var nopeStamp = card.querySelectorAll('[data-stamp]')[1]
      var superLikeStamp = card.querySelectorAll('[data-stamp]')[2]

      var absX = Math.abs(el.scope.currentX)
      var absY = Math.abs(el.scope.currentY)

      if (el.scope.currentX > 0 && absX > absY) {
        var likeOpacity = Math.min(absX / 100, 1)
        if (likeStamp) likeStamp.style.opacity = likeOpacity
        if (nopeStamp) nopeStamp.style.opacity = 0
        if (superLikeStamp) superLikeStamp.style.opacity = 0
      } else if (el.scope.currentX < 0 && absX > absY) {
        var nopeOpacity = Math.min(absX / 100, 1)
        if (nopeStamp) nopeStamp.style.opacity = nopeOpacity
        if (likeStamp) likeStamp.style.opacity = 0
        if (superLikeStamp) superLikeStamp.style.opacity = 0
      } else if (el.scope.currentY < -50) {
        var superOpacity = Math.min(absY / 100, 1)
        if (superLikeStamp) superLikeStamp.style.opacity = superOpacity
        if (likeStamp) likeStamp.style.opacity = 0
        if (nopeStamp) nopeStamp.style.opacity = 0
      } else {
        if (likeStamp) likeStamp.style.opacity = 0
        if (nopeStamp) nopeStamp.style.opacity = 0
        if (superLikeStamp) superLikeStamp.style.opacity = 0
      }
    },

    onPointerUp: (el, s) => {
      if (!el.scope.isDragging) return
      el.scope.isDragging = false
      el.node.style.cursor = 'grab'

      var threshold = 120
      var dx = el.scope.currentX
      var dy = el.scope.currentY

      if (dx > threshold) {
        el.scope.animateOut(el, s, 'right')
      } else if (dx < -threshold) {
        el.scope.animateOut(el, s, 'left')
      } else if (dy < -threshold) {
        el.scope.animateOut(el, s, 'up')
      } else {
        el.scope.snapBack(el)
      }
    },

    snapBack: (el) => {
      el.node.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      el.node.style.transform = 'translate(0, 0) rotate(0deg)'
      var card = el.node.querySelector('[data-profile-card]')
      if (card) {
        var stamps = card.querySelectorAll('[data-stamp]')
        for (var i = 0; i < stamps.length; i++) {
          stamps[i].style.transition = 'opacity 0.3s'
          stamps[i].style.opacity = 0
        }
      }
    },

    animateOut: (el, s, direction) => {
      var tx = 0
      var ty = 0
      var rot = 0
      if (direction === 'right') {
        tx = window.innerWidth + 200
        rot = 30
      } else if (direction === 'left') {
        tx = -(window.innerWidth + 200)
        rot = -30
      } else if (direction === 'up') {
        ty = -(window.innerHeight + 200)
      }
      el.node.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'
      el.node.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) rotate(' + rot + 'deg)'
      el.node.style.opacity = '0'

      setTimeout(function () {
        s.update({ swiped: direction })
      }, 500)
    }
  },

  onRender: (el, s) => {
    var pd = function (e) { el.scope.onPointerDown(el, s, e) }
    var pm = function (e) { el.scope.onPointerMove(el, s, e) }
    var pu = function () { el.scope.onPointerUp(el, s) }

    el.node.addEventListener('pointerdown', pd)
    window.addEventListener('pointermove', pm)
    window.addEventListener('pointerup', pu)

    return function () {
      el.node.removeEventListener('pointerdown', pd)
      window.removeEventListener('pointermove', pm)
      window.removeEventListener('pointerup', pu)
    }
  },

  ProfileCard: {
    attr: { 'data-profile-card': true },
    LikeStamp: { attr: { 'data-stamp': 'like' } },
    NopeStamp: { attr: { 'data-stamp': 'nope' } },
    SuperLikeStamp: { attr: { 'data-stamp': 'superlike' } }
  }
}
