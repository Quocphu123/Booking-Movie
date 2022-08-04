import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserInfo } from "../../Slice/user";
import dayjs from "dayjs";
import { history } from "../../App";
import "./Account.css";
const Account = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userReducer.userInfoSlice);

  const bookingInfo = userInfo.thongTinDatVe;


  useEffect(() => {
    dispatch(handleUserInfo());
  }, []);

  return (
    <div className="account">
      <div className="container account-container">
        <div className="account-wrap">
          <h1 className="text-dark">Lịch sử đặt vé</h1>
          <div className="line"></div>
          <div className="info">
            {bookingInfo?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="d-flex ">
                    <p className="mr-1"> Ngày đặt:</p>
                    <p className="mr-1">
                      {" "}
                      {dayjs(item.ngayDat).format(" DD-MM-YYYY ")}
                    </p>
                    <p className="mr-1">|</p>
                    <p className="mr-1">
                      {dayjs(item.ngayDat).format("HH:mm")}
                    </p>
                  </div>
                  <p style={{ color: "red" }}>Tên phim : {item.tenPhim}</p>
                  <p>
                    Thời lượng: {item.thoiLuongPhim} phút , giá vé: {item.giaVe}{" "}
                    VND
                  </p>
                  {item.danhSachGhe.map((chair, index) => {
                    return (
                      <Fragment key={index}>
                        <p style={{ color: "green" }}>
                          Rạp: {chair.tenHeThongRap}
                        </p>
                        <p>
                          {chair.tenRap}, Ghế số: {chair.tenGhe}
                        </p>
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
