export const waitlist = {
  flow: 'y',
  align: 'center',
  height: '100%',
  flex: '1',
  onSubmit: async (ev, el, s) => {
    ev.preventDefault()
    const {
      email,
      name
    } = s.parse()
    await el.sdk.addToWaitlist({
      email,
      name
    })
    el.router('/', el.getRoot())
    if (window.plausible) {
      window.plausible('Signup to Waitlist')
    }
  },
};