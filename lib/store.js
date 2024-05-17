import { configureStore } from '@reduxjs/toolkit'
import searchMoviesReducer from './features/searchMovies/searchMoviesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchMovies: searchMoviesReducer
    }
  })
}