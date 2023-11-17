import { observer } from 'mobx-react'
import { HistoryList } from '../../components/History/HistoryList'
import { useSearchHistoryStore } from '../../hooks/use-history-store/use-history-store'
import { Button } from '../../components/Button/Button'

const HistoryPageComponent: React.FC = () => {
  const searchHistoryStore = useSearchHistoryStore()

  return (
    <div>
      <h2>Search History</h2>
      <div>
        <Button
          title={'Clear history'}
          onClick={() => searchHistoryStore.clearHistory()}
        />
      </div>
      <HistoryList
        loading={searchHistoryStore.isLoading}
        items={searchHistoryStore?.history || []}
      />
    </div>
  )
}

export const HistoryPage = observer(HistoryPageComponent)
