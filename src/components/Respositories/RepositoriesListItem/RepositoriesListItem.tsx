import './RepositoriesListItem.scss'

import { RepositoryType } from '../../../types'

interface RepositoriesListItemProps {
  repository: RepositoryType
  condensed?: boolean
}

export const RepositoriesListItem: React.FC<RepositoriesListItemProps> = ({
  repository,
  condensed,
}) => {
  if (condensed) {
    return renderCondensed()
  }

  return (
    <li className={'repositories-list-item'}>
      <h3 className={'repositories-list-item__title'}>{repository.name}</h3>
      <p className={'repositories-list-item__description'}>
        {repository.description}
      </p>
      <div className={'repositories-list-item__scores'}>
        <p>⭐ Stars: {repository.stargazers_count}</p>
        <p>🍴 Forks: {repository.forks_count}</p>
        <p>👀 Watchers: {repository.watchers_count}</p>
      </div>
      <a
        className={'repositories-list-item__url'}
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </li>
  )

  function renderCondensed() {
    return (
      <li className={'repositories-list-item repositories-list-item-condensed'}>
        <a
          className={'repositories-list-item-condensed__url'}
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repository.name}
        </a>
        <div className={'repositories-list-item-condensed__scores'}>
          <p>⭐ Stars: {repository.stargazers_count}</p>
          <p>🍴 Forks: {repository.forks_count}</p>
          <p>👀 Watchers: {repository.watchers_count}</p>
        </div>
      </li>
    )
  }
}
