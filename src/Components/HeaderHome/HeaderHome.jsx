import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";
import "./HeaderHome.css";
const HeaderHome = () => {
  const [isActive, setIsActive] = useState(false);

  const { userLogin } = useSelector(
    (state) => state.userReducer.userLoginSlice
  );

  const handleClass = () => {
    setIsActive((isActive) => !isActive);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              style={{ fontSize: "16px" }}
              className="nav-link d-flex align-items-center"
              to={"login"}
            >
              <i className="fa fa-user mr-2"></i>
              <p className="mb-0"> Đăng nhập</p>
            </NavLink>
          </li>
          <hr style={{ width: "2px", height: "auto", alignSelf: "stretch" }} />
          <li className="nav-item">
            <NavLink
              style={{ fontSize: "16px" }}
              className="nav-link d-flex align-items-center"
              to={"register"}
            >
              <i className="fa fa-user mr-2"></i>
              <p className="mb-0"> Đăng ký</p>
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={{ fontSize: "16px", fontWeight: "600" }}
              to={"/account"}
            >
              {userLogin.hoTen}
            </NavLink>
          </li>
          <hr
            className="mx-2"
            style={{ width: "2px", height: "auto", alignSelf: "stretch" }}
          />
          <li className="nav-item ">
            <NavLink
              onClick={() => {
                localStorage.removeItem("userLogin");
                localStorage.removeItem("accessToken");
                Swal.fire({
                  title: "Đăng xuất thành công ",
                  icon: "success",
                  confirmButtonText: "Đóng",
                  timer: 2000,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              }}
              className="nav-link d-flex align-items-center singout"
              style={{ fontSize: "16px", fontWeight: "600" }}
              to={"/"}
            >
              <i className="fa fa-sign-out-alt mr-2"></i>
              <p className="mb-0">Đăng xuất</p>
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };
  return (

    <nav className="px-4 py-0 navbar navbar-expand-lg navbar-light header-nav">
      <NavLink className="navbar-brand title" to={"/"}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=="
          alt="Logo"
          width="50px"
          height="50px"
        />
      </NavLink>

      <button
        onClick={handleClass}
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
        id="navbarNav"
      >
        <div className="navbar-list">
          <ul className="navbar-nav justify-content-center">

            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="#movieList"
                style={{ fontWeight: "bold" }}
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#cinema"
                style={{ fontWeight: "bold" }}
              >
                Cụm Rạp
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#news"
                style={{ fontWeight: "bold" }}
              >
                Tin Tức
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#apps"
                style={{ fontWeight: "bold" }}
              >
                Ứng Dụng
              </a>
            </li>
          </ul>
        </div>


        <div className="navbar-sign">

          <ul className="navbar-nav">{renderLogin()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
