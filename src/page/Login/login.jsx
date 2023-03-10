import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthenApi from "../../api/AuthenApi";
import "./login.css";
export default function Login() {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values) => {
    AuthenApi.CreateRequestToken().then((res) => {
      setToken(res);
      localStorage.setItem("token", res.request_token);
      // navigate("/home", { replace: "true" });
    });
  };

  useEffect(() => {
    // if ((location.search = `?request_token=${token}&approved=true`)) {
    //   AuthenApi.CreateSection({ token }).then((res) => {
    //     console.log(res);
    //   });
    // }
    if (token !== undefined) {
      // console.log("Token", token);
      AuthenApi.CreateSection({ token });
      // AuthenApi.CreateSection({ token });
    }
    // if (location.pathname = )
    // console.log(location);
  }, [token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#CCC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
