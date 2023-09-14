import { API_URL } from './base'

export async function RequestBerries(idOrName: string | number, pagination: {
  limit: number | string
  offset: number | string
}) {
  const filter = [
    !!pagination.limit && `limit=${pagination.limit}`,
    !!pagination.offset && `offset=${pagination.offset}`
  ]
  const response = await fetch(`${API_URL}/berry/${idOrName}?${filter.filter(Boolean).join('&')}`)
  const data = await response.json()
  return data
}