import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FormDataT, SetFormDataPayloadAction } from './types'

type FormStorageState = Record<string, FormDataT>
  
const initialState: FormStorageState = {}

export const formStorageSlice = createSlice({
    name: 'formStorage',
    initialState,
    reducers: {
      setFormData: (state, action: PayloadAction<SetFormDataPayloadAction>) => {
        state[action.payload.id] = action.payload.data;
      },
    },
  })
  
export const { setFormData } = formStorageSlice.actions

// export const selectFormStorage = (state: RootState) => state.formStorage;

export default formStorageSlice.reducer