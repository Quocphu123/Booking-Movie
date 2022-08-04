import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketAPI from "../Services/ticketAPI";

const initialState = {
  ticketList: [],
  bookingChairList: [],
  isLoading: false,
};

export const getTicketList = createAsyncThunk(
  "ticket/getTicketList",
  async (showtimeId) => {
    try {
      const { data } = await ticketAPI.getTicketList(showtimeId);
      return { ticketList: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

export const postBookedList = createAsyncThunk(
  "ticket/postBookedList",
  async (bookingInfo) => {
    try {
      const data = await ticketAPI.postBookingTicket(bookingInfo);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticketSlice",
  initialState,
  reducers: {
    addBookedChair: (state, { payload }) => {
      // Cập nhật ds ghế đang đặt
      const index = state.bookingChairList.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );

      if (index !== -1) {
        state.bookingChairList.splice(index, 1);
      } else {
        state.bookingChairList.push(payload);
      }
    },
  },
  extraReducers: {
    [getTicketList.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getTicketList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.ticketList = payload.ticketList;
    },
    [getTicketList.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const { addBookedChair } = ticketSlice.actions;

export default ticketSlice.reducer;
