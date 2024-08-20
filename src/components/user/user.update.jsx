import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitClick = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    // console.log(res.data);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "Cập nhật user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setId("");
    setFullName("");
    setPhone("");
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update User"
      open={isModalUpdateOpen}
      onOk={handleSubmitClick}
      onCancel={resetAndCloseModal}
      okText="SAVE"
      maskClosable={false}
    >
      <div className="flex flex-col gap-3">
        <div>
          <span>ID</span>
          <Input disabled={true} className="mt-2" value={id} />
        </div>
        <div>
          <span>Full Name</span>
          <Input
            className="mt-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
  );
};

export default UpdateUserModal;
