import { combineReducers } from "@reduxjs/toolkit";
import { reducer as photosReducer } from "src/slices/photos";
import { reducer as windowReducer } from "src/slices/window";

const rootReducer = combineReducers({
    photos: photosReducer,
    window: windowReducer
});

export default rootReducer;