import './HistoryListItem.scss'

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { RepositoriesList } from '../../Respositories/RepositoriesList'
import { SearchHistoryRecord } from '../../../types'

interface HistoryListItemProps {
  record: SearchHistoryRecord
}

export const HistoryListItem: React.FC<HistoryListItemProps> = ({ record }) => {
  const [isOpen, setIsOpen] = useState(false)

  const createdString = useMemo(() => {
    const date = new Date(record.createdAt)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  }, [record.createdAt])

  return (
    <li className={'history-list-item'}>
      <div className={'history-list-item__searchparams'}>
        <p className={'history-list-item__searchparams__created'}>
          {createdString}
        </p>
        <p>Query: "{record.params.query}"</p>
        {record.params.language && <p>Language: {record.params.language}</p>}
        {record.params.stars && <p>Stars: {record.params.stars}+</p>}
        {record.params.followers && (
          <p>Followers: {record.params.followers}+</p>
        )}
        {record.params.sort && <p>Sorted by: {record.params.sort}</p>}
      </div>

      <p
        className={'history-list-item__toggle'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '⬆️ Hide results' : '⬇️ View results'}
      </p>

      {isOpen && (
        <div className={'history-list-item__condensed-results'}>
          <RepositoriesList
            loading={false}
            condensed={true}
            repositories={record.results}
          />
        </div>
      )}
      <Link
        className={'history-list-item__back-to-overview'}
        to={getSearchUrl()}
      >
        Search
      </Link>
    </li>
  )

  function getSearchUrl() {
    if (!record.id) {
      return '/'
    }

    return `/?id=${record.id}`
  }
}
