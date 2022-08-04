import React from "react";
import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "../../Slice/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     taiKhoan: "",
  //     matKhau: "",
  //   },
  //   mode: "onTouched",
  // });
  // console.log(isLogin);
  const goToRegister = () => {
    navigate("/register");
  };

  const onFinish = (value) => {
    dispatch(handleUserLogin(value));
  };

  return (
    <div className="login">
      <div className="container py-5">
        <Form
          name="normal_login"
          className="login-form py-4 mt-4"
          initialValues={{
            remember: true,
          }}
          // onSubmit={onSubmit}
          onFinish={onFinish}
        >
          <div className="login-title">
            <i className="fa fa-user"></i>
            <h1 className="mb-4 ">Đăng nhập</h1>
          </div>
          <Form.Item
            className="marginBottomInput"
            name="taiKhoan"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your Username!",
            //   },
            // ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon py-3" />}
              placeholder="Tài Khoản"
              // {...register("taiKhoan", {
              //   pattern: {
              //     value: /^[a-zA-Z0-9]{5,}$/,
              //     message:
              //       "Tài khoản bao gòm các kí tự hoa, thường, số và ít nhất 5 kí tự",
              //   },
              // })}
            />

            {/* {errors.taiKhoan && <span>{errors.taiKhoan?.message}</span>} */}
          </Form.Item>
          <Form.Item
            className="marginBottomInput"
            name="matKhau"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your Password!",
            //   },
            // ]}
          >
            <Input
              prefix={
                <LockOutlined className="site-form-item-icon py-3 rounded" />
              }
              type="password"
              placeholder="Mật Khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button btnLogin"
            >
              ĐĂNG NHẬP
            </Button>
            <div className="btnNavigate">
              <button onClick={() => goToRegister()}>
                Bạn chưa có tài khoản?Đăng ký
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
