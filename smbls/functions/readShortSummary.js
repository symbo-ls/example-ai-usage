export const readShortSummary = async function readShortSummary() {
  return await this.call('fetch', 'GET', '/short-summary', null, {
    headers: { 'X-Format': 'chartjs' }
  })
}
