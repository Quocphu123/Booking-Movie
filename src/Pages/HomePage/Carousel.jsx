import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";
import BannerTrailer from "./BannerTrailer";
import "./Carousel.css";
import PlayTrailer from "./PlayTrailer";

const Carousel = () => {
  const [isDisplayTrailer, setDisplayTrailer] = useState(false);
  const [bannerId, setBannerId] = useState(0);
  const bannerTrailerRef = useRef();
  const carouselRef = useRef();
  const domToBannerTrailer = (address) => {
    bannerTrailerRef.current = address;
  };

  const { bannerMovies } = useSelector(
    (state) => state.movieReducer.bannerMovie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  const displayBannerTrailer = (maBanner) => {
    setDisplayTrailer(true);
    setBannerId(maBanner);
    console.log(bannerTrailerRef.current);
  };

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        {isDisplayTrailer && (
          <div
            className="cover"
            onClick={() => {
              setDisplayTrailer(false);
            }}
          ></div>
        )}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            {bannerMovies.map((bannerMovie) => {
              return (
                <div
                  key={bannerMovie.maBanner}
                  className="carousel-item active"
                >
                  <img
                    src={bannerMovie.hinhAnh}
                    className="d-block w-100"
                   
                    alt={bannerMovie.maBanner}
                  />
                  <PlayTrailer
                    displayBannerTrailer={displayBannerTrailer}
                    bannerMovie={bannerMovie}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {isDisplayTrailer && (
          <BannerTrailer
            bannerId={bannerId}
            setDisplayTrailer={setDisplayTrailer}
            domToBannerTrailer={domToBannerTrailer}
          />
        )}
      </div>
    </>
  );
};

export default Carousel;
