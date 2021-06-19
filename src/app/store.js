import { configureStore } from '@reduxjs/toolkit'
import shakerReducer from './shakerSlice'
import appleReducer from './appleSlice'

export default configureStore({
  reducer: {
    isShaked: shakerReducer,
    fallenApples: appleReducer,
  }
})