import { useMemo } from 'react'
import { useHistoryRecord } from '../../use-search-params/use-search-params'

export const useDefaults = () => {
  const record = useHistoryRecord()

  const defaultSearchParams = useMemo(() => {
    if (!record) {
      return undefined
    }

    return {
      query: record.params.query,
      language: record.params.language,
      stars: record.params.stars,
      followers: record.params.followers,
    }
  }, [record])

  const defaultSortOption = useMemo(() => {
    if (!record) {
      return undefined
    }

    return record.params.sort
  }, [record])

  return {
    defaultSearchParams,
    defaultSortOption,
  }
}
