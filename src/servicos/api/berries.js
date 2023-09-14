const { API_URL } = require('./base')

module.exports = async function RequestBerries(idOrName, pagination) {
  const filter = [
    !!pagination.limit && `limit=${pagination.limit}`,
    !!pagination.offset && `offset=${pagination.offset}`
  ]
  const response = await fetch(`${API_URL}/berry/${idOrName}?${filter.filter(Boolean).join('&')}`)
  const data = await response.json()
  return data
}