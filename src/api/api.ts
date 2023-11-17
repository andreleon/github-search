import axios from 'axios'
import { SearchParamsType, SortOptionTypeValue } from '../types'
import { getQuery } from './utils/get-query'

const api = axios.create({
  baseURL: 'https://api.github.com/',
})

export default api

export const searchRepositories = async (
  params: SearchParamsType,
  sortOption: SortOptionTypeValue | undefined
) => {
  try {
    if (!params.query) {
      return
    }

    const response = await api.get('/search/repositories', {
      params: {
        q: getQuery(params),
        sort: sortOption,
        order: 'desc',
        per_page: 10,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching repositories:', error)
    throw error
  }
}
