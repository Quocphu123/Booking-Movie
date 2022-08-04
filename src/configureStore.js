import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movie";
import userReducer from "./Slice/user";
import cinemaReducer from "./Slice/cinema";
import ticket from "./Slice/ticket";
const store = configureStore({
  reducer: {
    movieReducer,
    userReducer,
    cinemaReducer,
    ticket,
  },
});

export default store;
