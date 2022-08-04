import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Apps from "./Apps";
import Footer from "./Footer";
import { useDispatch} from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";
import MovieList from "./MovieList/MovieList";
import CinemaList from "./Cinema/CinemaList";
import News from "./News/News";

const HomePage = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  // if(isLoading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="app">
      <Carousel />
      <MovieList />
      <CinemaList />
      <News />
      <Apps />
      <Footer />
    </div>
  );
};

export default HomePage;
