import './RepositoriesList.scss'

import React from 'react'
import { RepositoriesListItem } from './RepositoriesListItem/RepositoriesListItem'
import { RepositoryType } from '../../types'

interface RepositoriesListProps {
  condensed?: boolean
  repositories: RepositoryType[]
  loading: boolean
}

export const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repositories,
  loading,
  condensed,
}) => {
  return (
    <div className={'repositories-list'}>
      {!loading && repositories.length === 0 && renderEmpty()}
      {loading ? renderLoading() : renderList()}
    </div>
  )

  function renderEmpty() {
    return <p className={'repositories-list__empty'}>No results found</p>
  }

  function renderLoading() {
    return <p className={'repositories-list__loading'}>Loading...</p>
  }

  function renderList() {
    return (
      <ul className={'repositories-list__list'}>
        {repositories.map((repo) => (
          <RepositoriesListItem
            condensed={condensed}
            key={repo.id}
            repository={repo}
          />
        ))}
      </ul>
    )
  }
}
