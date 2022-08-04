import axiosClient from "./axiosClient";

const ticketAPI = {
  getTicketList: (showtimeId) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: showtimeId,
      },
    });
  },

  postBookingTicket: (bookingInfo) => {
    return axiosClient.post(`QuanLyDatVe/DatVe`, bookingInfo);
  },
};

export default ticketAPI;
