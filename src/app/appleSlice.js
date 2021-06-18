import { createSlice } from '@reduxjs/toolkit'

export const appleSlice = createSlice({
    name: 'fallenApples',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            state.value += action.payload
        },
        clear: state => {
            state.value = []
        },
    }
})

export const { add, clear } = appleSlice.actions

export default appleSlice.reducer