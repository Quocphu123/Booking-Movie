import React, { useRef } from "react";

const BannerTrailer = (props) => {
  const { bannerId, setDisplayTrailer, domToBannerTrailer } = props;
  const bannerTrailerRef = useRef();
  const bannerTrailer = [
    "https://www.youtube.com/embed/uqJ9u7GSaYM",
    "https://www.youtube.com/embed/kBY2k3G6LsM",
    "https://www.youtube.com/embed/ZT7rSBbhFGE",
  ];
  domToBannerTrailer(bannerTrailerRef.current);

  return (
    <>
      <div className="bannerTrailer" ref={bannerTrailerRef}>
        <div
          className="close"
          onClick={() => {
            setDisplayTrailer(false);
          }}
        >
          X
        </div>
        <iframe
          width={885}
          height={498}
          src={`${bannerTrailer[bannerId - 1]}?autoplay=1`}
          title="LẬT MẶT: 48H - Ly Hai Production | Official Trailer | Khởi Chiếu 16.04.2021"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default BannerTrailer;
