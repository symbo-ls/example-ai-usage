export const resolveHref = function resolveHref(href) {
  const execHref = this.call('exec', href || this.props?.href || this.state?.href)

  if (this.call('isString', href)) {
    if (href.includes('{{')) {
      return this.call('replaceLiteralsWithObjectFields', execHref)
    }
    return execHref
  } else {
    return this.warn('Href to docs link is not defined')
  }
}