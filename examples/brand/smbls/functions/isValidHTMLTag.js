export const isValidHTMLTag = function isValidHTMLTag(v) {
  const HTML_TAGS = this.context.utils.HTML_TAGS
  return HTML_TAGS.root.indexOf(v) > -1 ||
    HTML_TAGS.body.indexOf(v) > -1
}