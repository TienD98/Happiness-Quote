//quoteSlice.
import {createSlice} from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {data: "",author: ""},
    reducers: {
        fetchData(state, action) {
            state.data = action.payload;
        },
        fetchAuthor(state, action) {
            state.author = action.payload;
        }
    }
});

export const {fetchData, fetchAuthor} = quoteSlice.actions;
export default quoteSlice.reducer;
