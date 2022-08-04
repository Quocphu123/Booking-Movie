import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";
import { combineReducers } from "redux";

const initialState = {
  bannerMovies: [],
  movieShowing: [],
  movieDetail: {},
  isLoading: false,
};

// thunk action
export const getBannerMovieShowing = createAsyncThunk(
  "movie/getBannerMovieShowing",
  async () => {
    try {
      const { data } = await movieAPI.getBannerMovieShowing();
      return { bannerMovies: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMovieShowing = createAsyncThunk(
  "movie/getMovieShowingPages",
  async () => {
    try {
      const { data } = await movieAPI.getMovieShowing();
      return { movieShowing: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

const movieList = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieShowing.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getMovieShowing.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.movieShowing = payload.movieShowing;
    },
    [getMovieShowing.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const bannerMovie = createSlice({
  name: "bannerMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [getBannerMovieShowing.pending]: (state, { payload }) => {},
    [getBannerMovieShowing.fulfilled]: (state, { payload }) => {
      state.bannerMovies = payload.bannerMovies;
    },
    [getBannerMovieShowing.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const getMovieShowingDetail = createAsyncThunk(
  "movie/getMovieShowingDetail",
  async (params) => {
    try {
      const { data } = await movieAPI.getMovieShowingDetail(params);
      return { movieDetail: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

const movieDetail = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieShowingDetail.pending]: (state, { payload }) => {},
    [getMovieShowingDetail.fulfilled]: (state, { payload }) => {
      state.movieDetail = payload.movieDetail;
    },
    [getMovieShowingDetail.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const movieReducer = combineReducers({
  movieList: movieList.reducer,
  bannerMovie: bannerMovie.reducer,
  movieDetail: movieDetail.reducer,
});

export default movieReducer;
