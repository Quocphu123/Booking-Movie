import React from "react";
import "./MovieItem.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../../Detail/MyVerticallyCenteredModal";

const MovieFlip = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const navigate = useNavigate();

  const { movie } = props;

  const goToDetail = (maPhim) => {
    navigate(`/detail/${maPhim}`);
  };

  return (
    <div className="flip-card-item">
      <div className="flip-card">
        <div className="flip-card-inner ">
          <div className="flip-card-front">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              //   style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="flip-card-back">
            <img src={movie.hinhAnh} alt={movie.tenPhim} />
            <div className="flip-card-text">
              <h4>{movie.tenPhim}</h4>

              <Button className="btnModal" onClick={() => setModalShow(true)}>
                <i className="fa fa-play"></i>
              </Button>
              <MyVerticallyCenteredModal
                movietrailer={movie.trailer}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              {/* <button
                  type="button"
                  className="btnTrailer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleTrailerMovie(movie.trailer)}
                >
                  <i className="fa fa-play"></i>
                </button> */}

              <p className="movieDescription">{movie.moTa}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="bookTicket" onClick={() => goToDetail(movie.maPhim)}>
        MUA VÉ
      </button>
    </div>
  );
};

export default MovieFlip;
