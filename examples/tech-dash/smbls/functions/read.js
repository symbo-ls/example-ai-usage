export const read = async function read(path) {
  return await this.call('fetch', 'GET', path)
}