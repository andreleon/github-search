import { SearchParamsType } from '../../types'

export function getQuery(params: SearchParamsType) {
  const { query, language, stars, followers } = params

  const languageQuery = language ? `language:${language}` : ''
  const starsQuery = stars ? `stars:>${stars}` : ''
  const followersQuery = followers ? `followers:>${followers}` : ''

  return `${query} in:name,description,readme ${languageQuery} ${starsQuery} ${followersQuery}`
}
