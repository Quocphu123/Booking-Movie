import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.css";
const Loading = () => {
  const { isLoading } = useSelector((state) => state.movieReducer.movieList);

    

  return (
    <Fragment>
      {isLoading ? (
        <div className="loading  text-4xl text-white">
            <img src="https://tcdtist-tix-clone.vercel.app/static/media/loadingPage.a098baa8.gif" alt="" />
        </div>
        
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Loading;
