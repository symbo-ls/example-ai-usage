export const addCustomDomainModal = {
  extends: [
    'ModalWindow',
    'Form',
  ],
  width: '100%',
  maxWidth: 'I',
  onSubmit: (e, el, st, ctx) => {
    e.preventDefault()

    if (!st.domainName) {
      return
    }

    const urlParams = new URLSearchParams(ctx.window.location.search)
    const type = urlParams.get('type')

    if (!type) {
      return
    }

    const {
      root
    } = st
    if (root && root.domains && root.domains[type]) {
      if (root.domains[type].domain === st.domainName) {
        st.replace({
          validationMessage: `Domain with this name is already added for '${type}' environment`
        })
        return
      }
    }

    el.router(
      ctx.window.location.pathname.replace(
        '/add-domain',
        `/add-cname?type=${type}&domainName=${st.domainName}`
      ), el.getRoot()
    )
    ctx.window.location.reload()
  },
};