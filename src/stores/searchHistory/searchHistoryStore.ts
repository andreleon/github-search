import lodash from 'lodash'
import { makeAutoObservable } from 'mobx'
import { SearchHistoryEntry, SearchHistoryRecord } from '../../types'

export class SearchHistoryStore {
  history: SearchHistoryRecord[] = []
  isLoading: boolean = true

  constructor() {
    makeAutoObservable(this)

    this.loadHistory()
  }

  public addSearchQuery(entry: SearchHistoryEntry) {
    this.history.push({
      ...entry,
      id: `${lodash.uniqueId()}-${Date.now()}`,
      createdAt: new Date(),
    })

    this.saveHistory()
  }

  public clearHistory() {
    this.history = []

    localStorage.removeItem('searchHistory')
  }

  private saveHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(this.history))
  }

  private loadHistory() {
    const historyFromStorage = localStorage.getItem('searchHistory')

    try {
      if (historyFromStorage) {
        this.history = JSON.parse(historyFromStorage)
      }
    } catch (error) {
      console.error('Failed to parse search history from localStorage', error)

      this.history = []
    } finally {
      this.isLoading = false
    }
  }
}

export const searchHistoryStore = new SearchHistoryStore()
