export const TinderStack = {
  extends: 'Flex',
  flow: 'y',
  flexAlign: 'center center',
  width: '100%',
  maxWidth: 'G',
  margin: 'auto',
  height: '100%',

  state: {
    currentIndex: 0,
    action: null,
    swiped: null,
    liked: [],
    noped: [],
    superliked: []
  },

  scope: {
    getProfiles: (el, s, ctx) => {
      return ctx.snippets.profilesData || []
    },

    handleAction: (el, s, action) => {
      var profiles = el.scope.getProfiles(el, s, el.context)
      if (s.currentIndex >= profiles.length) return

      var profile = profiles[s.currentIndex]

      if (action === 'like') {
        s.apply(function (st) { st.liked.push(profile) })
      } else if (action === 'nope') {
        s.apply(function (st) { st.noped.push(profile) })
      } else if (action === 'superlike') {
        s.apply(function (st) { st.superliked.push(profile) })
      } else if (action === 'rewind' && s.currentIndex > 0) {
        s.update({ currentIndex: s.currentIndex - 1, action: null, swiped: null })
        return
      }

      s.update({ currentIndex: s.currentIndex + 1, action: null, swiped: null })
    }
  },

  onStateUpdate: (changes, el, s) => {
    if (changes.action && changes.action !== 'boost') {
      el.scope.handleAction(el, s, changes.action)
    }
    if (changes.swiped) {
      var direction = changes.swiped
      var action = direction === 'right' ? 'like' : direction === 'left' ? 'nope' : 'superlike'
      el.scope.handleAction(el, s, action)
    }
  },

  CardArea: {
    extends: 'Flex',
    position: 'relative',
    width: '100%',
    flex: '1',
    minHeight: 'G',
    maxHeight: '500px',
    flexAlign: 'center center',

    content: (el, s, ctx) => {
      var profiles = ctx.snippets.profilesData || []
      var idx = s.currentIndex

      if (idx >= profiles.length) {
        return {
          EmptyState: {
            extends: 'Flex',
            flow: 'y',
            flexAlign: 'center center',
            gap: 'A',
            padding: 'C',
            animation: 'fadeIn 0.5s ease',
            Icon: { name: 'heartOutline', boxSize: 'D', color: 'tinderPink 0.5' },
            H3: {
              fontSize: 'B',
              fontWeight: '600',
              color: 'title',
              text: 'No more profiles'
            },
            P: {
              fontSize: 'A',
              color: 'caption',
              text: 'Check back later for more people'
            }
          }
        }
      }

      var cards = {}

      var nextIdx = idx + 1
      if (nextIdx < profiles.length) {
        cards.BackCard = {
          extends: 'Flex',
          position: 'absolute',
          width: '95%',
          height: '95%',
          round: 'B',
          overflow: 'hidden',
          style: {
            transform: 'scale(0.95) translateY(10px)',
            pointerEvents: 'none'
          },
          Photo: {
            width: '100%',
            height: '100%',
            tag: 'img',
            style: { objectFit: 'cover', filter: 'brightness(0.7)' },
            src: profiles[nextIdx].image,
            draggable: 'false'
          }
        }
      }

      cards.SwipeCard = {
        state: {
          name: profiles[idx].name,
          age: profiles[idx].age,
          job: profiles[idx].job,
          school: profiles[idx].school,
          distance: profiles[idx].distance,
          bio: profiles[idx].bio,
          image: profiles[idx].image,
          interests: profiles[idx].interests,
          swiped: null,
          action: null
        }
      }

      return cards
    }
  },

  ActionButtons: {}
}
