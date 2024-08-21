import { Input, InputNumber, Modal, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { updateBookAPI, uploadFile } from "../../services/api.service";

const UpdateBook = (props) => {
  const {
    dataUpdate,
    setDataUpdate,
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    loadBook,
  } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [id, setId] = useState("");
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const resetAndCloseModal = () => {
    setId("");
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setSelectedFile(null);
    setPreview(null);
    setIsModalUpdateOpen(false);
    setDataUpdate(null);
  };

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setMainText(dataUpdate.mainText);
      setAuthor(dataUpdate.author);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setCategory(dataUpdate.category);
      setPreview(
        `${import.meta.env.VITE_BACKEND_URL}/images/book/${
          dataUpdate.thumbnail
        }`
      );
    }
  }, [dataUpdate]);

  console.log(dataUpdate);

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

  const updateBook = async (newThumbnail) => {
    const resBook = await updateBookAPI(
      id,
      newThumbnail,
      mainText,
      author,
      price,
      quantity,
      category
    );

    if (resBook.data) {
      resetAndCloseModal();
      await loadBook();
      notification.success({
        message: "Update book",
        description: "Cập nhật book thành công",
      });
    } else {
      notification.error({
        message: "Error Update Book",
        description: JSON.stringify(resBook.message),
      });
    }
  };

  const handleSubmitClick = async () => {
    if (!selectedFile && !preview) {
      notification.error({
        message: "Error Update Book",
        description: "Vui lòng upload ảnh thumbnail",
      });
      return;
    }
    let newThumbnail = "";

    if (!selectedFile && preview) {
      newThumbnail = dataUpdate.thumbnail;
    } else {
      const resUpload = await uploadFile(selectedFile, "book");

      if (resUpload.data) {
        newThumbnail = resUpload.data.fileUploaded;
      } else {
        notification.error({
          message: "Error upload file",
          description: JSON.stringify(resUpload.message),
        });
        return;
      }
    }

    await updateBook(newThumbnail);
  };

  return (
    <>
      <Modal
        title="Update Book"
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
            <span>Tiêu đề</span>
            <Input
              className="mt-2"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
          </div>
          <div>
            <span>Tác giả</span>
            <Input
              className="mt-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <span>Giá tiền</span>
            <InputNumber
              className="mt-2 w-full"
              value={price}
              onChange={(value) => setPrice(value)}
            />
          </div>
          <div>
            <span>Số lượng</span>
            <InputNumber
              className="mt-2 w-full"
              value={quantity}
              onChange={(e) => setQuantity(e)}
            />
          </div>
          <div>
            <span>Thể loại</span>
            <Select
              className="mt-2 w-full"
              value={category}
              defaultValue=""
              onChange={(value) => setCategory(value)}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Business", label: "Business" },
                { value: "Comics", label: "Comics" },
                { value: "Cooking", label: "Cooking" },
                { value: "Entertainment", label: "Entertainment" },
                { value: "History", label: "History" },
                { value: "Music", label: "Music" },
                { value: "Sports", label: "Sports" },
                { value: "Teen", label: "Teen" },
                { value: "Travel", label: "Travel" },
              ]}
            />
          </div>
          <div>
            <span>Ảnh thumbnail: </span>
            <div className="h-40 w-40 border">
              <img className="h-full w-full object-contain" src={preview} />
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
                onChange={(e) => handleOnChangeFile(e)}
                onClick={(e) => e.target.value === null}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateBook;
