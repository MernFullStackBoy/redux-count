import { createSlice } from "@reduxjs/toolkit"

export const countSlice = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        addCount: (state) => {
            state.count += 1
        },
        removeCount: (state) => {
            state.count -= 1
        },
        resetCount: (state) => {
            state.count = 0
        },
    }
})

export const { addCount, removeCount, resetCount } = countSlice.actions
export default countSlice.reducer