import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getCinemaList,
  getCinemaListInfo,
  getMovieScheduleByCinema,
} from "../../../Slice/cinema";
import clsx from "clsx";
// import "animate.css";
import "./cinemaList.css";

const CinemaList = () => {
  const navigate = useNavigate();
  // useSelector, get date from store
  const { cinemaList } = useSelector((state) => state.cinemaReducer.cinemaList);
  const { cinemaListInfo } = useSelector(
    (state) => state.cinemaReducer.cinemaListInfo
  );
  const [active, setActive] = useState(false);
  const { movieSchedule } = useSelector(
    (state) => state.cinemaReducer.movieSchedule
  );
  // ---------------------------------------------------------------------

  const cinemaListDom = document.getElementsByClassName("cinema-active")[0];
  const [cinemaName, setCinemaName] = useState("BHDStar");
  const [cinemaCluster, setCinemaCluster] = useState(
    "bhd-star-cineplex-bitexco"
  );
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // console.log(cinemaName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  useEffect(() => {
    dispatch(getMovieScheduleByCinema());
  }, [cinemaCluster]);

  useEffect(() => {
    dispatch(getCinemaListInfo(cinemaName));
  }, [cinemaName]);

  const handleClickCinemaLogo = (cinemaID) => {
    setCinemaName(cinemaID);
  };
  const handleClickCinemaCluster = (cinemaClusterID) => {
    setCinemaCluster(cinemaClusterID);
  };

  const handleMoveActiveBar = (index, height) => {
    return index * height;
  };

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
    <>
      <div className="cinema-container" id="cinema">
        <div className="row cinema-row">
          <div className="cinema-logo">
            {cinemaList.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    handleClickCinemaLogo(item.maHeThongRap);
                    setActive(!active);
                    document.getElementsByClassName(
                      "logo-active"
                    )[0].style.top = `${handleMoveActiveBar(index, 95.5)}px`;
                  }}
                  className={clsx("logo-item")}
                  key={item.biDanh}
                >
                  {/* {active && <div className="cinema-active" ></div>} */}
                  <img src={item.logo} alt={item.maHeThongRap} />
                </button>
              );
            })}

            <div className="logo-active"></div>
          </div>
          <div className="list-cinemas">
            {cinemaListInfo.map((item, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  className="cinema-item"
                  key={item.maCumRap}
                  onClick={() => {
                    console.log(cinemaListDom);
                    handleClickCinemaCluster(item.maCumRap);
                    cinemaListDom.style.top = `${handleMoveActiveBar(
                      index,
                      95.5
                    )}px`;
                  }}
                >
                  <div className="cinema-name">{item.tenCumRap}</div>
                  <div className="address">{item.diaChi}</div>
                  <p>[Chi tiết]</p>
                </div>
              );
            })}
            <div className="cinema-active"></div>
          </div>
          <div className="list-films">
            {movieSchedule.map((item) => {
              return item.lstCumRap.map((lstCumRapItem) => {
                if (lstCumRapItem.maCumRap === cinemaCluster) {
                  return lstCumRapItem.danhSachPhim.map((danhSachPhimItem) => {
                    return (
                      <div className="film-item" key={danhSachPhimItem.maPhim}>
                        <div className="movie-img">
                          <img src={danhSachPhimItem.hinhAnh} alt="" />
                        </div>
                        <div className="date-and-name">
                          <p className="movie-name">
                            {danhSachPhimItem.tenPhim}
                          </p>
                          {danhSachPhimItem.lstLichChieuTheoPhim.map(
                            (LichChieuTheoPhimItem, index) => {
                              const dateTime =
                                LichChieuTheoPhimItem.ngayChieuGioChieu.split(
                                  "T"
                                );
                              if (index < 4) {
                                return (
                                  <div
                                    className="container-date-time"
                                    key={LichChieuTheoPhimItem.maLichChieu}
                                  >
                                    <button
                                      className="dateTime"
                                      onClick={() =>
                                        handlePurchase(
                                          LichChieuTheoPhimItem.maLichChieu
                                        )
                                      }
                                    >
                                      <div className="date">
                                        {dateTime[0] + ` ~ `}
                                      </div>
                                      <div className="time">{dateTime[1]}</div>
                                    </button>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                    );
                  });
                }
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CinemaList;
