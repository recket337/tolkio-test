import { configureStore } from '@reduxjs/toolkit'
import formStorageReducer from './slices/formStorageSlice'

export const store = configureStore({
  reducer: {
    formStorage: formStorageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch