export const editDependencyModal = {
  extends: '/add-dependency-modal',
  onInit: (el, s) => {
    const name = s.name || s.key || el.call('getLastLocationPath').slice(1)
    const value = s.value || el.getDependencies(name)
    const pkgObj = el.getPackages(name)
    const version = value || s.version || s.value || pkgObj?.resolvedVersion

    if (!name || !value || !pkgObj) {
      return
    }
    s.quietReplace({
      ...pkgObj,
      name,
      version,
      value: version,
      schemaVersion: pkgObj?.version
    })
  },
};