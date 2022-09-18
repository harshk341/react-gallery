import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    isLoading: false,
    nextUrl: null
}

const slice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
});

export const reducer = slice.reducer;

export default slice;