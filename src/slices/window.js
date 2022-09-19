import { createSlice } from "@reduxjs/toolkit"
import { WINDOW_SIZE } from "src/constants/windowSize"

const initialState = {
    windowSize: WINDOW_SIZE.phone
}

const slice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        getWindowSize: (state, action) => {
            const { size } = action.payload;
            state.windowSize = size;
        }
    }
});

export const reducer = slice.reducer;

export const getWindowSize = (size) => (dispatch) => {
    dispatch(slice.actions.getWindowSize({size}));
}

export default slice;