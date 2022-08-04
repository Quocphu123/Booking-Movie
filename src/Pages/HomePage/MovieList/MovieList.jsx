import React from "react";
import MovieItem from "../MovieList/MovieItem";
import "./MovieList.css";
const MovieList = () => {
  return (
    <div id="movieList" className="container mb-5 mt-3">
      <MovieItem />
    </div>
  );
};

export default MovieList;
