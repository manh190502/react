import { Drawer } from "antd";
import { useState } from "react";

const ViewBookDetail = (props) => {
  const { bookDetail, setBookDetail, isBookDetailOpen, setIsBookDetailOpen } =
    props;

  return (
    <>
      <Drawer
        title="Basic Drawer"
        onClose={() => {
          setBookDetail(null);
          setIsBookDetailOpen(false);
        }}
        open={isBookDetailOpen}
      >
        {bookDetail ? (
          <>
            <p>Id: {bookDetail._id}</p>
            <br />
            <p>Tiêu đề: {bookDetail.mainText}</p>
            <br />
            <p>Tác giả: {bookDetail.author}</p>
            <br />
            <p>Thể loại: {bookDetail.category}</p>
            <br />
            <p>
              Giá tiền:{" "}
              {bookDetail.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <br />
            <p>Số lượng: {bookDetail.quantity}</p>
            <br />
            <p>Đã bán: {bookDetail.sold}</p>
            <br />
            <p>Avatar: </p>
            <div className="h-40 w-40 border">
              <img
                className="h-full w-full object-contain"
                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${
                  bookDetail.thumbnail
                }`}
              />
            </div>
          </>
        ) : (
          <>
            <p>Khong co du lieu</p>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewBookDetail;
