import { configureStore } from '@reduxjs/toolkit'
import shakerReducer from './shakerSlice'

export default configureStore({
  reducer: {
    isShaked: shakerReducer
  }
})