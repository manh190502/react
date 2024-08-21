import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Drawer, Popconfirm, Table } from "antd";
import { useState } from "react";
import ViewBookDetail from "./view.bookdetail";
import BookForm from "./book.form";
import UpdateBook from "./update.book";

const BookTable = (props) => {
  const {
    loadBook,
    dataBook,
    setDataBook,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;

  const [bookDetail, setBookDetail] = useState(null);
  const [isBookDetailOpen, setIsBookDetailOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setBookDetail(record);
              setIsBookDetailOpen(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
      key: "title",
    },
    {
      title: "Giá tiền",
      render: (_, record, index) => {
        return (
          <>
            {record.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-5">
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            className="cursor-pointer text-orange-500 "
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            //   onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined className="cursor-pointer text-rose-500" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // nếu thay đổi trang current
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current); // "5" => 5
      }
    }
    // nếu thay đổi pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize); // "5" => 5
      }
    }
  };

  return (
    <div className="mt-4">
      <Table
        dataSource={dataBook}
        columns={columns}
        onChange={onChange}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
      />
      <ViewBookDetail
        bookDetail={bookDetail}
        setBookDetail={setBookDetail}
        isBookDetailOpen={isBookDetailOpen}
        setIsBookDetailOpen={setIsBookDetailOpen}
      />

      <UpdateBook
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        loadBook={loadBook}
      />
    </div>
  );
};

export default BookTable;
