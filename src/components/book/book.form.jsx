import { Button, Input, InputNumber, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createBookAPI, uploadFile } from "../../services/api.service";

const BookForm = (props) => {
  const { loadBook } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const resetAndCloseModal = () => {
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setSelectedFile(null);
    setPreview(null);
    setIsModalOpen(false);
  };

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

  const handleSubmitClick = async () => {
    if (!selectedFile) {
      notification.error({
        message: "Error create book",
        description: "Vui lòng upload ảnh thumbnail",
      });
      return;
    }

    const resUpload = await uploadFile(selectedFile, "book");
    if (resUpload.data) {
      const newThumbnail = resUpload.data.fileUploaded;

      const resBook = await createBookAPI(
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
          message: "Create book",
          description: "Tạo mới book thành công",
        });
      } else {
        notification.error({
          message: "Error create book",
          description: JSON.stringify(resBook.message),
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">Table Book</h3>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create Book
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
            {preview && (
              <>
                <div className="h-40 w-40 border mt-4">
                  <img className="h-full w-full object-contain" src={preview} />
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookForm;
