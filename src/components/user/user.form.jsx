import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    console.log(res.data);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "tạo mới user thành công",
      });
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <div className="user-form my-5 mx-0">
      <div className="flex flex-col gap-4">
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <span>Number</span>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <Button onClick={handleClick} type="primary">
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
