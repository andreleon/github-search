import React from 'react'
import './App.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { SearchPage } from './pages/search/search'
import { HistoryPage } from './pages/history/history'

export const App: React.FC = () => {
  return (
    <div className={'app'}>
      <h1 className={'app__title'}>GitHub Repository Search</h1>
      <BrowserRouter>
        <nav className={'app__nav'}>
          <Link to="/">Search</Link> | <Link to="/history">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
