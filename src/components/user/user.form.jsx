import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { loadUser } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);

    if (res.data) {
      notification.success({
        message: "Create user",
        description: "tạo mới user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  return (
    <div className="user-form my-3 mx-0">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">Table User</h3>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create User
        </Button>
      </div>

      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={handleSubmitClick}
        onCancel={resetAndCloseModal}
        okText="CREATE"
        maskClosable={false}
      >
        <div className="flex flex-col gap-3">
          <div>
            <span>Full Name</span>
            <Input
              className="mt-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              className="mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              className="mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>Number</span>
            <Input
              className="mt-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
