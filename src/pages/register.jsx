import {
  Button,
  Form,
  Input,
  message,
  notification,
  Row,
  Col,
  Divider,
} from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );

    if (res.data) {
      notification.success({
        message: "Register User",
        description: "Đăng ký user thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Error register user",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <div>
      <Form className="m-5" onFinish={onFinish} form={form} layout="vertical">
        <h3 className="text-center">Đăng ký tài khoản</h3>
        <Row className="justify-center">
          <Col xs={24} md={8}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row className="justify-center">
          <Col xs={24} md={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row className="justify-center">
          <Col xs={24} md={8}>
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
          </Col>
        </Row>
        <Row className="justify-center">
          <Col xs={24} md={8}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  // required: true,
                  pattern: new RegExp(/\d+/g),
                  message: "Wrong format!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row className="justify-center">
          <Col xs={24} md={8}>
            <div>
              <Button onClick={() => form.submit()} type="primary">
                Register
              </Button>
            </div>
            <Divider />
            <div className="text-center">
              Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RegisterPage;
