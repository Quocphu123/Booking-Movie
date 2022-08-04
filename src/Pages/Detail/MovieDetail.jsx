import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieShowingDetail } from "../../Slice/movie";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";
import "./MovieDetail.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { getMovieDetailSchedule } from "../../Slice/cinema";
import { Tabs } from "antd";
import Swal from "sweetalert2";

import "antd/dist/antd.css";
const MovieDetail = () => {
  const { TabPane } = Tabs;
  const [modalShow, setModalShow] = useState(false);
  const { movieId } = useParams();

  const { movieDetail } = useSelector(
    (state) => state.movieReducer.movieDetail
  );
  console.log(movieDetail);
  const { movieDetailSchedule } = useSelector(
    (state) => state.cinemaReducer.movieDetailSchedule
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cinemaListMovie = movieDetailSchedule.heThongRapChieu;

  useEffect(() => {
    dispatch(getMovieShowingDetail(movieId));
    dispatch(getMovieDetailSchedule(movieId));
  }, []);

  const handlePurchase = (showtimeId) => {
    if (!localStorage.getItem("userLogin")) {
      Swal.fire({
        title: "Bạn chưa đăng nhập!!! ",
        icon: "warning",
        confirmButtonText: "Đóng",
        timer: 3000,
      });
      setTimeout(() => {
        return navigate("/login");
      }, 3000);
    } else {
      navigate(`/purchase/${showtimeId}`);
    }
  };

  return (
    <div className="movieDetail">
      <div className="container movie-container">
        <div className="row">
          <div className="col-1 movie-image">
            <img src={movieDetail.hinhAnh} alt="" />
            <Button className="btnTrailer" onClick={() => setModalShow(true)}>
              <i className="fa fa-play"></i>
            </Button>
            <MyVerticallyCenteredModal
              movietrailer={movieDetail.trailer}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="col-2">
            <div className="text-info-movie">
              <h2 className="">{movieDetail.tenPhim}
               </h2>
              <p>Thời gian:  120 phút</p>
              <p>
                Ngày khởi chiếu:{" "}
                {dayjs(movieDetail.ngayKhoiChieu).format("DD-MM-YYYY ")}
              </p>
              <p>NỘI DUNG PHIM :</p>
              <p className="movieDescription">{movieDetail.moTa}</p>
            </div>
          </div>
          <div className="col-3">
            <div className="rated">
              <h2>10</h2>
              <div className="start">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container ml-72 w-2/3 mt-20 bg-white px-4 py-5"
        style={{ margin: "5rem auto" }}
      >
        <Tabs tabPosition={"left"}>
          {cinemaListMovie?.map((cinema, index) => {
            return (
              <TabPane
                key={index}
                tab={
                  <div
                    className="cinema-img"
                    // onClick={() => handleTheater(cinema.cumRapChieu)}
                  >
                    <img src={cinema.logo} alt="" />
                    <p>{cinema.tenHeThongRap}</p>
                  </div>
                }
              >
                {cinema.cumRapChieu?.map((theater, index) => (
                  <div key={index}>
                    <div className="theater-item" key={theater.maCumRap}>
                      <img src={theater.hinhAnh} alt="" />
                      <div className="theater-info">
                        <p>{theater.tenCumRap}</p>
                        <span>{theater.diaChi}</span>
                      </div>
                    </div>
                    <div className="showtimes">
                      <div className="row">
                        {theater.lichChieuPhim
                          ?.slice(0, 9)
                          .map((showtimes, index) => (
                            <div className="col-sm-4" key={index}>
                              <button
                                className="showtimeBtn"
                                onClick={() =>
                                  handlePurchase(showtimes.maLichChieu)
                                }
                              >
                                <p>
                                  {dayjs(showtimes.ngayChieuGioChieu).format(
                                    "DD-MM-YYYY "
                                  )}
                                </p>
                                <h6>-</h6>
                                <span>
                                  {dayjs(showtimes.ngayChieuGioChieu).format(
                                    "HH:mm"
                                  )}
                                </span>
                              </button>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default MovieDetail;
