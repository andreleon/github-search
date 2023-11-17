import { useSearchParams } from 'react-router-dom'
import { useSearchHistoryStore } from '../use-history-store/use-history-store'
import { SearchHistoryRecord } from '../../types'

export const useHistoryRecord = (): SearchHistoryRecord | undefined => {
  const [searchParams] = useSearchParams()
  const searchHistoryStore = useSearchHistoryStore()

  const recordId = searchParams.get('id')

  return searchHistoryStore.history.find((record) => record.id === recordId)
}
