import React from "react";

const PlayTrailer = (props) => {
  const { bannerMovie, displayBannerTrailer } = props;
  return (
    <div>
      <div
        className="playTrailer"
        onClick={() => {
          displayBannerTrailer(bannerMovie.maBanner);
        }}
      >
        <i className="fa fa-play"></i>
      </div>
    </div>
  );
};

export default PlayTrailer;
