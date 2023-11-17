import React from 'react'
import { RepositoriesList } from '../../components/Respositories/RepositoriesList'
import { SearchBar } from '../../components/Search/SearchBar'
import { Sort } from '../../components/Sort/Sort'
import { useSearch } from '../../hooks/use-search/use-search'

export const SearchPage: React.FC = () => {
  const {
    loading,
    defaultSearchParams,
    defaultSortOption,
    handleSearch,
    handleClear,
    handleSort,
    results,
  } = useSearch()

  return (
    <div>
      <h2>Search Repositories</h2>
      <div>
        <SearchBar
          onSearch={handleSearch}
          onClear={handleClear}
          defaultParams={defaultSearchParams}
        />
        <Sort onSort={handleSort} defaultSort={defaultSortOption} />
      </div>
      <RepositoriesList loading={loading} repositories={results} />
    </div>
  )
}
