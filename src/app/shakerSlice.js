import { createSlice } from '@reduxjs/toolkit'

export const shakerSlice = createSlice({
    name: 'isShaked',
    initialState: {
        value: false
    },
    reducers: {
        shake: state => {
            state.value = true
        },
        stop: state => {
            state.value = false
        }
    }
})

export const { shake, stop } = shakerSlice.actions

export default shakerSlice.reducer