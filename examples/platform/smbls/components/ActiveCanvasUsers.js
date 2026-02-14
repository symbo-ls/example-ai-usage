export const ActiveCanvasUsers = {
  flow: 'x',
  alignSelf: 'center',
  fontSize: 'X',
  children: (el, s) => s.users,
  childExtends: 'Avatar',
  childProps: {
    avatarType: 'initials',
    opacity: 0.35,
    transition: 'B defaultBezier',
    transitionProperty: 'opacity, outline',
    data: {},
    ':hover': {
      opacity: 1,
    },
    ':not(:last-child)': {
      margin: '0 -Z 0 0',
    },
    '.isActive': {
      zIndex: 2,
      opacity: 1,
      outline: '2px, solid, orange',
    },
    '.isFollowingYou': {
      zIndex: 2,
      opacity: 1,
      outline: '2px, solid, blue',
    },
    onClick: (ev, el) => {
      const {
        userId
      } = el.props
      el.call('setFollowingUser', userId)
      el.parent.update()
    },
    onDblclick: (ev, el) => {
      const {
        userId
      } = el.props
      el.call('askToFollow', userId)
    },
  },
  ':empty': {
    hide: true,
  },
  onInit: async (el, st) => {
    const areClientsEqual = (prev = {}, next = {}) => {
      const prevKeys = Object.keys(prev)
      const nextKeys = Object.keys(next)

      if (prevKeys.length !== nextKeys.length) {
        return false
      }

      return prevKeys.every((key) => {
        const p = prev[key] || {}
        const n = next[key] || {}

        // Fallback: use map key as _id if field missing
        const pId = p._id || key
        const nId = n._id || key

        // Only compare properties that affect visual rendering
        return (
          pId === nId &&
          p.username === n.username &&
          p.avatar === n.avatar &&
          p.userId === n.userId &&
          p.followingUser === n.followingUser
        )
      })
    }

    el.sdk.rootBus.on('clients:updated', (data) => {
      if (!data) {
        return
      }

      const prevClients = st.clients || {}

      if (areClientsEqual(prevClients, data)) {
        return // nothing important changed
      }

      // Save new clients map; stateUpdate will derive `users` list
      st.replace({
        clients: data
      })
    })
  },
  onStateUpdate: (changes, el) => {
    // When clients data changes, rebuild the users list for rendering
    if (!changes.clients) {
      return
    }

    const clients = el.state.clients || {}
    const {
      followingUser,
      userId
    } = el.getRootState()

    const activeUsers = Object.keys(clients)
      .slice(0, 5)
      .map((id) => ({
        href: clients[id].route,
        userId: id,
        key: clients[id].username,
        title: clients[id].username,
        src: clients[id].avatar,
        isActive: followingUser === clients[id].userId,
        isFollowingYou: userId === clients[id]?.followingUser
      }))
      .filter((u) => u.title !== 'root')
      .filter((v, i, a) => a.findIndex((t) => t.userId === v.userId) === i)

    // Update users list without triggering another stateUpdate loop
    el.state.replace({
      users: activeUsers
    }, {
      preventStateUpdateListener: true
    })
  },
};