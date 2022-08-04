import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { getMovieShowing } from "../../../Slice/movie";
import MovieFlip from "./MovieFlip";
import "./Slick.css";
const MovieItem = () => {
  const { movieShowing } = useSelector((state) => state.movieReducer.movieList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);

  let settings = {};
  {
    settings = {
      className: "center",
      // centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 4,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            active: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  return (
    <div>
      <Slider {...settings}>
        {movieShowing?.map((movie) => {
          return <MovieFlip key={movie.maPhim} movie={movie} />;
        })}
      </Slider>
    </div>
  );
};

export default MovieItem;
