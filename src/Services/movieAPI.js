import axiosClient from "./axiosClient";

const movieAPI = {
  getBannerMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
  getMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP02", {});
  },
  getMovieShowingDetail: (movieId) => {
    return axiosClient.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`);
  },
};

export default movieAPI;
