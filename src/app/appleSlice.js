import { createSlice } from '@reduxjs/toolkit'

export const appleSlice = createSlice({
    name: 'apples',
    initialState: {
        applesInFall: [],
        applesOnTree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    reducers: {
        setApplesInFall: (state, action) => {
            state.applesInFall = action.payload
        },
        clearApplesInFall: (state, action) => {
            // const index = state.applesInFall.indexOf(action.payload); //Gets index of the apple

            // state.applesInFall.splice(index, 1)
            // console.log(state.applesInFall);
            state.applesInFall = []
        },
        setApplesOnTree: (state, action) => {
            state.applesOnTree = action.payload
        }
    }
})

export const { setApplesInFall, clearApplesInFall, setApplesOnTree } = appleSlice.actions

export default appleSlice.reducer