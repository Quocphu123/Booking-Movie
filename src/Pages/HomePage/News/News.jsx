import React from "react";
import { useState } from "react";
import Discount from "./Discount";
import Film24h from "./Film24h";
import FilmReview from "./FilmReview";
import "./new.css";

const News = () => {
  const activeBar = document.getElementsByClassName("news-active");
  const [newsDisplay, setNewsDisplay] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <>
      <div className="news-container" id="news">
        <div className="row">
          <div
            className="col col-md-4 news-item"
            onClick={() => {
              setNewsDisplay(0);
              activeBar[0].style.left = `${0 * 189}px`;
            }}
          >
            <h1 className="news-heading">Điện ảnh 24h</h1>
          </div>
          <div
            className="col col-md-4 news-item"
            onClick={() => {
              setNewsDisplay(1);
              activeBar[0].style.left = `${1 * 189}px`;
            }}
          >
            <h1 className="news-heading">Review</h1>
          </div>
          <div
            className="col col-md-4 news-item"
            onClick={() => {
              setNewsDisplay(2);
              activeBar[0].style.left = `${2 * 189}px`;
            }}
          >
            <h1 className="news-heading">Khuyến mãi</h1>
          </div>
          <div className="news-active"></div>
        </div>
        {newsDisplay === 0 && isDisplay ? (
          <Film24h />
        ) : newsDisplay === 1 && isDisplay ? (
          <FilmReview />
        ) : (
          newsDisplay === 2 && isDisplay && <Discount />
        )}
        <div
          className="watch-more"
          onClick={() => {
            setIsDisplay(!isDisplay);
          }}
        >
          <button className="watch-more-btn">
            {isDisplay ? "Rút gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
