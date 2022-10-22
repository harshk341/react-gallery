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
      const { photos } = state;
      const len = photos.length;
      state.nextPage = len / limit + 1;
    },
  },
});

export const reducer = slice.reducer;

export const requestingPhotos = () => (dispatch) => {
  dispatch(slice.actions.requestingPhotos());
};

export const getPhotosList = (url, params, signal) => async (dispatch) => {
  try {
    dispatch(requestingPhotos());
    const _photos = await apiCaller(url, "get", null, params, signal);
    dispatch(slice.actions.getPhotosList({ photos: _photos }));
    dispatch(slice.actions.gotPhotos());
    dispatch(slice.actions.getNextPage());
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhotosListOnFirstStart =
  (url, params, signal) => async (dispatch, getState) => {
    const state = getState();
    const { photos } = state.photos;
    const hasPhotos = photos.length > 0;
    const shouldFetch = Boolean(!hasPhotos && url);
    if (shouldFetch) {
      dispatch(getPhotosList(url, params, signal));
    }
  };

export const fetchNextPhotosList =
  (nextUrl, params, signal) => async (dispatch, getState) => {
    const state = getState();
    const { isLoading } = state.photos;
    const isFetching = isLoading;
    const shouldFetch = Boolean(!isFetching && nextUrl);
    if (shouldFetch) {
      dispatch(getPhotosList(nextUrl, params, signal));
    }
  };

export default slice;
