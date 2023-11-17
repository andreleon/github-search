import './SearchBar.scss'

import React, { useState } from 'react'
import { SearchParamsType } from '../../types'
import { Button } from '../Button/Button'

interface SearchBarProps {
  onSearch?: (searchParams: SearchParamsType) => void
  onClear?: () => void
  defaultParams?: SearchParamsType
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClear,
  defaultParams = {
    query: '',
    language: '',
    stars: 0,
    followers: 0,
  },
}) => {
  const [searchParams, setSearchParams] =
    useState<SearchParamsType>(defaultParams)

  return (
    <div className={'searchbar'}>
      <label className={'searchbar__label'}>
        <p>Query</p>
        <input
          type="text"
          name="query"
          value={searchParams.query}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Search..."
        />
      </label>
      <label className={'searchbar__label'}>
        <p>Language</p>
        <input
          type="text"
          name="language"
          value={searchParams.language}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Language"
        />
      </label>
      <label className={'searchbar__label'}>
        <p>Stars</p>
        <input
          type="number"
          name="stars"
          value={searchParams.stars}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Minimum Stars"
        />
      </label>
      <label className={'searchbar__label'}>
        <p>Followers</p>
        <input
          type="number"
          name="followers"
          value={searchParams.followers}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Minimum Followers"
        />
      </label>
      <Button
        title={'Search'}
        className={'searchbar__button'}
        onClick={handleSearchClick}
      />
      <Button
        title={'Clear'}
        className={'searchbar__button'}
        onClick={handleClearSearchClick}
      />
    </div>
  )

  function handleSearchClick() {
    onSearch?.(searchParams)
  }

  function handleClearSearchClick() {
    onClear?.()

    setSearchParams({
      query: '',
      language: '',
      stars: 0,
      followers: 0,
    })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as keyof SearchParamsType
    const value = e.target.value

    setSearchParams({
      ...searchParams,
      [name]: value,
    })
  }

  // when pressing return (⏎), we want to trigger search
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchClick()
      return
    }
  }
}
