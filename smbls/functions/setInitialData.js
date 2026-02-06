export const setInitialData = function setInitialData(data = {}) {
    this.state.replace(data, {
      preventUpdate: true,
      preventUpdateListener: true
    })

    this.update({}, {
      preventUpdateListener: true
    })
  }