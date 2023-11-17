import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'mobx-react'
import { searchHistoryStore } from './stores/searchHistory/searchHistoryStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// disabled strict mode, since it was triggering my useEffects twice 😩
// https://byby.dev/useeffect-run-twice#:~:text=One%20reason%20why%20useEffect%20may,activating%20additional%20checks%20and%20warnings.
root.render(
  // <React.StrictMode>
  <Provider searchHistoryStore={searchHistoryStore}>
    <App />
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
