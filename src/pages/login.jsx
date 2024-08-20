import { ArrowRightOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useState } from "react";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginUserAPI(values.email, values.password);

    if (res.data) {
      message.success("Đăng nhập thành công");
      navigate("/");
    } else {
      notification.error({
        message: "Error Login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };

  return (
    <Row className="justify-center mt-8 ">
      <Col xs={24} md={16} lg={8}>
        <fieldset className="p-4 m-2 border border-gray-300">
          <legend>Đăng nhập</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Wrong Email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="flex justify-between items-center ">
              <Button
                loading={loading}
                onClick={() => form.submit()}
                type="primary"
              >
                Login
              </Button>

              <Link className="text-blue-600" to={"/"}>
                Go to homepage <ArrowRightOutlined />{" "}
              </Link>
            </div>
          </Form>
          <Divider />
          <div className="text-center">
            Chưa có tài khoản?{" "}
            <Link className="text-blue-600" to={"/register"}>
              Đăng ký tại đây
            </Link>{" "}
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
