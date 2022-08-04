import axiosClient from "./axiosClient";

const cinemaAPI = {
  getCinemaList: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
  getCinemaListInfo: (cinemaName) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: cinemaName,
      },
    });
  },
  getMovieScheduleByCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP03",
      },
    });
  },
  getMovieDetailSchedule: (maPhim) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim,
      },
    });
  },
};

export default cinemaAPI;
