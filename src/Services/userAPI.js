import axiosClient from "./axiosClient";

const userAPI = {
  userLogin: (user) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", user);
  },

  getUserInfo: () => {
    return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  },

  createUserRegister: (user) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", user);
  },
};

export default userAPI;
