import { createSlice } from '@reduxjs/toolkit'

export const shakerSlice = createSlice({
    name: 'isShaked',
    initialState: {
        value: false
    },
    reducers: {
        startShake: state => {
            state.value = true
        },
        stopShake: state => {
            state.value = false
        }
    }
})

export const { startShake, stopShake } = shakerSlice.actions

export default shakerSlice.reducer