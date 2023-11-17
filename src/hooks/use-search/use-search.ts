import { useEffect, useState } from 'react'
import { searchRepositories } from '../../api/api'
import {
  RepositoryType,
  SearchParamsType,
  SortOptionTypeValue,
} from '../../types'
import { useSearchHistoryStore } from '../use-history-store/use-history-store'
import { useDefaults } from './use-defaults/use-defaults'

export const useSearch = () => {
  const [loading, setLoading] = useState(false)
  const searchHistoryStore = useSearchHistoryStore()
  const { defaultSearchParams, defaultSortOption } = useDefaults()

  const [sortOption, setSortOption] = useState<SortOptionTypeValue | undefined>(
    defaultSortOption ? defaultSortOption : undefined
  )
  const [searchParams, setSearchParams] = useState<SearchParamsType>(
    defaultSearchParams
      ? defaultSearchParams
      : {
          query: '',
          language: '',
          stars: 0,
          followers: 0,
        }
  )
  const [repositories, setRepositories] = useState<RepositoryType[]>([])

  useEffect(() => {
    const fetchRepositories = async () => {
      if (loading) {
        return
      }

      setLoading(true)

      try {
        const results = await searchRepositories(searchParams, sortOption)

        if (results.items) {
          setRepositories(results.items)

          searchHistoryStore?.addSearchQuery({
            params: {
              ...searchParams,
              sort: sortOption,
            },
            results: results.items.slice(0, 10),
          })
        }
      } catch (error) {
        // TODO: show error message
        // console.error("Search failed:", error);
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()

    // disable exhaustive deps because we don't want to trigger refetching when loading or the store changes
    // only when the search params or sort option changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, sortOption])

  return {
    loading,
    defaultSearchParams,
    defaultSortOption,
    handleSearch,
    handleClear,
    handleSort,
    results: repositories,
  }

  function handleSort(selectedSortOption: SortOptionTypeValue) {
    setSortOption(selectedSortOption)
  }

  function handleSearch(searchParams: SearchParamsType) {
    setSearchParams(searchParams)
  }

  function handleClear() {
    setRepositories([])
  }
}
