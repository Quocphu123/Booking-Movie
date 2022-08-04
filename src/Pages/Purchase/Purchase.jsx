import React, { Fragment, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookedChair,
  getTicketList,
  postBookedList,
} from "../../Slice/ticket";
import _ from "lodash";
import Swal from "sweetalert2";

import "./Purchase.css";
const Purchase = () => {

  const { showtimeId } = useParams();
  const { ticketList, bookingChairList } = useSelector((state) => state.ticket);
  const { thongTinPhim, danhSachGhe } = ticketList;

  const dispatch = useDispatch();

  const bookedInfo = {
    maLichChieu: "",
    danhSachVe: [],
  };

  const { isLoading } = useSelector((state) => state.ticket);

  useEffect(() => {
    dispatch(getTicketList(showtimeId));
  }, []);

  const handleBookedChair = (seat) => {
    dispatch(addBookedChair(seat));
  };

  if (isLoading) {
    return (
      <div className="loading text-4xl text-white">
        <img
          src="https://tcdtist-tix-clone.vercel.app/static/media/loadingPage.a098baa8.gif"
          width={"600px"}
          alt=""
        />
      </div>
    );
  }

  const handleBookingTicket = (bookingInfo) => {
    bookedInfo.maLichChieu = showtimeId;
    bookedInfo.danhSachVe = bookingInfo;
    dispatch(postBookedList(bookedInfo));
  };

  return (
    <div className="ticket">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div
              className="d-flex justify-content-center mt-5 flex-column "
              style={{ margin: "auto", width: "90%" }}
            >
              <div
                className="bg-dark"
                style={{ width: "100%", height: "15px" }}
              ></div>
              <div id="trapezoid" className="text-center">
                <h1 style={{ color: "black" }} className="mt-3">
                  Màn Hình
                </h1>
              </div>
              <div className="mt-4">
                {danhSachGhe?.map((seat, index) => {
                  let classVipChair = seat.loaiGhe === "Vip" ? "vip-chair" : "";

                  let classBookedChair =
                    seat.daDat === true ? "booked-chair" : "";

                  let classBookngChair = "";

                  let indexBookingChair = bookingChairList.findIndex(
                    (chair) => chair.maGhe === seat.maGhe
                  );

                  if (indexBookingChair !== -1) {
                    classBookngChair = "booking-chair";
                  }
                  return (
                    <Fragment key={index}>
                      <button
                        onClick={() => handleBookedChair(seat)}
                        className={`chair ${classBookngChair} ${classVipChair} ${classBookedChair}`}
                        disabled={seat.daDat}
                      >
                        {seat.daDat ? (
                          <i class="fa fa-times text-white"></i>
                        ) : (
                          seat.stt
                        )}
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div
              className="d-flex justify-content-center algin-cent "
              style={{
                width: "90%",
                margin: "2rem auto",
              }}
            >
              <div className="d-flex flex-column align-items-center ml-5">
                <button disabled={true} className="chair booked-chair">
                  <i className="fa fa-times text-white"></i>
                </button>
                <h3>Ghế đã đặt</h3>
              </div>

              <div className="d-flex flex-column align-items-center ml-5">
                <button disabled={true} className="chair vip-chair"></button>
                <h3>Ghế Vip</h3>
              </div>
              <div className="d-flex flex-column align-items-center ml-5">
                <button disabled={true} className="chair "></button>
                <h3>Ghế thường</h3>
              </div>
              <div className="d-flex flex-column align-items-center ml-5">
                <button
                  disabled={true}
                  className="chair booking-chair"
                ></button>
                <h3>Ghế đang đặt</h3>
              </div>
            </div>
          </div>

          <div
            className="col-sm-4 mt-5"
            style={{ boxShadow: "0 0 5px grey", backgroundColor: "#fff" }}
          >
            <h1
              className="text-center px-5 py-4"
              style={{ fontSize: "2.4rem", color: "rgb(139, 195, 74)" }}
            >
              {bookingChairList
                .reduce((total, chair, index) => {
                  return (total += chair.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đ
            </h1>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0 ">
              <h3>Cụm Rạp:</h3>
              <h3 style={{ color: "#108f3e" }}>{thongTinPhim?.tenCumRap}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0">
              <h3>Địa chỉ:</h3>
              <h3 style={{ color: "#108f3e" }}>{thongTinPhim?.diaChi}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0">
              <h3>Rạp:</h3>
              <h3 style={{ color: "#108f3e" }}>{thongTinPhim?.tenRap}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0">
              <h3>Ngày giờ chiếu:</h3>
              <h3 style={{ color: "#108f3e" }}>
                <span>{thongTinPhim?.ngayChieu}</span> -{" "}
                <span style={{ color: "red" }}> {thongTinPhim?.gioChieu}</span>
              </h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0">
              <h3>Tên Phim:</h3>
              <h3 style={{ color: "#108f3e" }}>{thongTinPhim?.tenPhim}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3 py-4 mb-0">
              <h3>Ghế đã chọn: </h3>
              <h3 style={{ color: "#108f3e" }}>
                {_.sortBy(bookingChairList, ["stt"]).map((chair, index) => {
                  return (
                    <span key={index} className="text-green-500 text-xl ml-1">
                      Ghế {chair.stt}
                    </span>
                  );
                })}
              </h3>
            </div>
            <hr />
            <div className="btnBooking">
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Đặt vé thành công",
                    icon: "success",
                    timer: 3000,
                    confirmButtonText: "Đóng",
                  });
                  handleBookingTicket(bookingChairList);
                  setTimeout(() => {
                    window.location.reload()
                  }, 3000);
                }}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
