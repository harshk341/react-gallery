import { combineReducers } from "@reduxjs/toolkit";
import { reducer as photosReducer } from "src/slices/photos";

const rootReducer = combineReducers({
    photos: photosReducer
});

export default rootReducer;