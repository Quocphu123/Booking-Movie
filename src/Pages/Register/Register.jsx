import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleUserRegister, registerUserFinish } from "../../Slice/user";
import Swal from "sweetalert2";

// validations schema
const schema = object({
  taiKhoan: string()
    .required("Tài khoản không được để trống")
    .matches(
      /^[a-zA-Z0-9]{5,}$/,
      "Tài khoản bao gòm các kí tự hoa, thường, số và ít nhất 5 kí tự"
    ),
  matKhau: string().required("Mật khẩu không được để trống"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //   "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 kí tự"
  // ),
  email: string()
    .required("Email Không được để trống")
    .email("Email không đúng định dạng"),
  hoTen: string().required("Họ tên không được để trống"),
  soDt: string().required("Số điện thoại không được để trống"),
});

const Register = () => {
  const { isRegister, registerError } = useSelector(
    (state) => state.userReducer.userRegisterSlice
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    dispatch(handleUserRegister(values));

    // if (!isRegister) {
    //   Swal.fire({
    //     title: `${registerError}`,
    //     icon: "warning",
    //     timer: 3000,
    //     confirmButtonText: "Đóng",
    //   });
    // }
  };
  if (isRegister) {
    dispatch(registerUserFinish());
    Swal.fire({
      title: "Đăng ký thành công",
      icon: "success",
      timer: 2000,
      confirmButtonText: "Đóng",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="register">
      <div className="container py-5">
        <form className="form py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-title">
            <i class="fa fa-lock"></i>
            <h1 className="mb-4 ">Đăng ký</h1>
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Tài Khoản *"
              {...register("taiKhoan")}
            />
            <div style={{ padding: "0.3rem 0 0 0.5rem" }}>
              {errors.taiKhoan && (
                <span style={{ color: "red" }}>{errors.taiKhoan?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Mật Khẩu *"
              {...register("matKhau")}
            />
            <div style={{ padding: "0.3rem 0 0 0.5rem" }}>
              {errors.matKhau && (
                <span style={{ color: "red" }}>{errors.matKhau?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email *"
              {...register("email")}
            />
            <div style={{ padding: "0.3rem 0 0 0.5rem" }}>
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Số Điện Thoại *"
              {...register("soDt")}
            />
            <div style={{ padding: "0.3rem 0 0 0.5rem" }}>
              {errors.soDt && (
                <span style={{ color: "red" }}>{errors.soDt?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Họ Tên *"
              {...register("hoTen")}
            />
            <div style={{ padding: "0.3rem 0 0 0.5rem" }}>
              {errors.hoTen && (
                <span style={{ color: "red" }}>{errors.hoTen?.message}</span>
              )}
            </div>
          </div>
          {registerError && (
            <div
              className="d-flex align-items-center"
              style={{
                backgroundColor: "rgb(253, 236, 234",
                padding: "0 16px",
                fontSize: "16px",
              }}
            >
              <i
                class="fa fa-exclamation-triangle"
                style={{ color: "red" }}
              ></i>

              <p
                className="mb-0 ml-3"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {registerError}
              </p>
            </div>
          )}
          <button type="submit btnRegister" className=" btnRegister">
            ĐĂNG KÝ
          </button>
          <div className="btnNavigate">
            <button onClick={() => navigate("/login")}>
              Bạn đã có tài khoản? Đăng nhập
            </button>
          </div>
        </form>
      </div>
      ;
    </div>
  );
};

export default Register;
