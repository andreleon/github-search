import './HistoryList.scss'

import React from 'react'
import { HistoryListItem } from './HistoryListItem/HistoryListItem'
import { SearchHistoryRecord } from '../../types'

interface HistoryListProps {
  items: SearchHistoryRecord[]
  loading?: boolean
}

export const HistoryList: React.FC<HistoryListProps> = ({ items, loading }) => {
  return (
    <div className={'history-list'}>
      {!loading && items.length === 0 && renderEmpty()}
      {loading ? renderLoading() : renderList()}
    </div>
  )

  function renderEmpty() {
    return (
      <p className={'history-list__empty'}>
        <span>No search history found</span> <a href="/">back to search</a>
      </p>
    )
  }

  function renderLoading() {
    return <p className={'history-list__loading'}>Loading...</p>
  }

  function renderList() {
    return (
      <ul className={'history-list__list'}>
        {items
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
          .map((record) => (
            <HistoryListItem key={record.id} record={record} />
          ))}
      </ul>
    )
  }
}
