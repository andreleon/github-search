import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import { SearchHistoryStore } from '../../stores/searchHistory/searchHistoryStore'

export const useSearchHistoryStore = (): SearchHistoryStore => {
  const store = useContext(MobXProviderContext).searchHistoryStore

  if (!store) {
    // This is just a safety check and should not happen in normal circumstances
    throw new Error('Store is not available')
  }

  return store
}
