import { createSlice, current } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "AppSlice",
    initialState: {
        currentData: [],
        currentSearchData: "all"
    },
    reducers: {
        setCurrentData: (state, action) => {
            state.currentData = action.payload
        },
        setSearchData: (state, action) => {
            state.currentSearchData = action.payload
        }
    }
})

export const { setCurrentData, setSearchData } = appSlice.actions
export default appSlice.reducer