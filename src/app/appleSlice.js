import { createSlice } from '@reduxjs/toolkit'

export const appleSlice = createSlice({
    name: 'apples',
    initialState: {
        applesInFall: [],
        applesOnTree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    reducers: {
        addApplesToFall: (state, action) => {
            state.applesInFall.push(action.payload)
        },
        clearApplesInFall: state => {
            state.applesInFall = []
        },
        removeAppleFromTree: (state, action) => {
            const index = state.applesOnTree.indexOf(action.payload); //Gets index of the element
            state.applesOnTree.splice(index, 1) //Removes apple from the tree
        }
    }
})

export const { addApplesToFall, clearApplesInFall, removeAppleFromTree } = appleSlice.actions

export default appleSlice.reducer