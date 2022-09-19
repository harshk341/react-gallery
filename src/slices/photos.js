import { createSlice } from "@reduxjs/toolkit";
import { limit } from "src/constants/api";
import { apiCaller } from "src/utils/apiCaller";

const initialState = {
  photos: [],
  isLoading: false,
  nextPage: 1,
};

const slice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    requestingPhotos: (state) => {
      state.isLoading = true;
    },
    getPhotosList: (state, action) => {
      const { photos } = action.payload;
      state.photos = [...state.photos, ...photos];
    },
    gotPhotos: (state) => {
      state.isLoading = false;
    },
    getNextPage: (state) => {
      const { photos } = state.photos;
      state.nextPage = (photos?.length/limit)+1;
    },
  },
});

export const reducer = slice.reducer;

export const requestingPhotos = () => (dispatch) => {
  dispatch(slice.actions.requestingPhotos());
};

export const getPhotosList =
  (url, params, signal) => async (dispatch) => {
    try {
      dispatch(requestingPhotos());
      const _photos = await apiCaller(url, "get", null, params, signal);
      dispatch(slice.actions.getPhotosList({ photos: _photos }));
      dispatch(slice.actions.gotPhotos());
      dispatch(slice.actions.getNextPage())
    } catch (error) {
      console.log(error);
    }
  };

export default slice;
