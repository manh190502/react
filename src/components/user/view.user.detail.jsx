import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { updateUserAPI, uploadFile } from "../../services/api.service";

const ViewUserDetail = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { setDataDetail, dataDetail, setIsDetailOpen, isDetailOpen, loadUser } =
    props;

  const handleOnChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    // Upload File
    const resUpload = await uploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const newAvatarRes = await updateUserAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (newAvatarRes.data) {
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();

        notification.success({
          message: "Upload File",
          description: "Cập nhật avatar thành công",
        });
      } else {
        notification.error({
          message: "Error Upload File",
          description: JSON.stringify(resUpload.message),
        });
      }
    } else {
      notification.error({
        message: "Error Upload File",
        description: JSON.stringify(resUpload.message),
      });
    }
  };

  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Full Name: {dataDetail.fullName}</p>
          <br />
          <p>Phone: {dataDetail.phone}</p>
          <br />
          <p>Avatar: </p>
          <div className="h-40 w-40 border">
            <img
              className="h-full w-full object-contain"
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <div>
            <label
              className="border px-2 py-1.5 inline-block mt-3 ml-8 rounded-md bg-cyan-300 cursor-pointer"
              htmlFor="btnUpload"
            >
              Upload File
            </label>
            <input
              type="file"
              id="btnUpload"
              hidden
              onChange={handleOnChangeFile}
            />
          </div>
          {preview && (
            <>
              <div className="h-40 w-40 border mt-4">
                <img className="h-full w-full object-contain" src={preview} />
              </div>
              <Button
                onClick={handleUpdateUserAvatar}
                className="mt-4 ml-12"
                type="primary"
              >
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Khong co du lieu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
