export const filterByEnv = function filterByEnv(array, value) {
    return this.call('isArray', array) && array.filter(item => item['env'] === value).length
  }