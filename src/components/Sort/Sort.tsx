import './Sort.scss'

import React from 'react'
import { SortOptionTypeValue } from '../../types'

interface SortProps {
  onSort: (sortOption: SortOptionTypeValue) => void
  defaultSort?: SortOptionTypeValue
}

export const Sort: React.FC<SortProps> = ({ onSort, defaultSort }) => {
  return (
    <div className={'sort'}>
      <label className={'sort__label'}>
        <p>Sort by:</p>
        <select
          className={'sort__select'}
          onChange={handleSelectChange}
          defaultValue={defaultSort}
        >
          <option>Select an option</option>
          {Object.values(SortOptionTypeValue).map((sortOption) => (
            <option key={sortOption} value={sortOption}>
              {sortOption}
            </option>
          ))}
        </select>
      </label>
    </div>
  )

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onSort(e.target.value as SortOptionTypeValue)
  }
}
