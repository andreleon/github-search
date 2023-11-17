export interface RepositoryType {
  id: number
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  html_url: string
}

export type SearchParamsType = {
  query: string | undefined
  language: string | undefined
  stars: number | undefined
  followers: number | undefined
}

export enum SortOptionTypeValue {
  Stars = 'stars',
  Forks = 'forks',
  // HelpWantedIssues = 'help-wanted-issues',
  // Updated = 'updated'
}

export interface SearchParamsWithSortOptionType extends SearchParamsType {
  sort: SortOptionTypeValue | undefined
}

export interface SearchResult extends RepositoryType {}

export interface SearchHistoryEntry {
  params: SearchParamsWithSortOptionType
  results: SearchResult[] // First 10 results
}

export interface SearchHistoryRecord extends SearchHistoryEntry {
  id: string
  createdAt: Date
}