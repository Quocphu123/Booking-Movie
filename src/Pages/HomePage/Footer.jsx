import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import FooterPartnerLogo from "./FooterPartnerLogo";
const Footer = () => {
  const { cinemaList } = useSelector((state) => state.cinemaReducer.cinemaList);
  return (
    <div className="wrap">
      <div className="footer-container">
        <div className="row footer-partner">
          <div className="col-md-4 row footer-branch">
            <div className="footer-title">TIX</div>
            <div className="col-md-6">
              <a href="">FAQ</a>
              <a href="">Brand Guidelines</a>
            </div>
            <div className="col-md-6">
              <a href="">Thỏa thuận sử dụng</a>
              <a href="">Chính sách bảo mật</a>
            </div>
          </div>
          <div className="col-md-4 partner">
            <div className="footer-title">PARTNER</div>
            {cinemaList.map((item) => {
              return (
                <a href="" key={item.biDanh}>
                  <img src={item.logo} alt={item.maHeThongRap} />
                </a>
              );
            })}
            <FooterPartnerLogo
              src={"./assets/vietcombank-logo.jpg"}
              alt={"vietcombank-logo"}
            />
            <FooterPartnerLogo
              src={"./assets/zalo-logo.png"}
              alt={"zalo-logo"}
            />
            <FooterPartnerLogo src={"./assets/tvb-logo.svg"} alt={"tvb-logo"} />
            <FooterPartnerLogo
              src={"./assets/agribank-logo.png"}
              alt={"agribank-logo"}
            />
            <FooterPartnerLogo
              src={"./assets/viettienbank-logo.png"}
              alt={"viettienbank-logo"}
            />
            <FooterPartnerLogo
              src={"./assets/paydo-logo.png"}
              alt={"paydo-logo"}
            />
          </div>
          <div className="col-md-2 footer-mobile-app">
            <div className="footer-title">MOBILE APP</div>
            <span>
              <i className="fab fa-apple"></i>
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-android2"
              viewBox="0 0 16 16"
            >
              <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
            </svg>
          </div>
          <div className="col-md-2 footer-social">
            <div className="footer-title">SOCIAL</div>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>

        <div className="row footer-company">
          <div className="footer-company-logo col col-md-2">
            <img src="./assets/zion-logo.jfif" alt="" />
          </div>
          <div className="footer-info col col-md-8">
            <p className="company-statement">
              TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
          </div>
          <div className="footer-checked col col-md-2">
            <img src="./assets/dathongbao.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
