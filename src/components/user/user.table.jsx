import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./user.update";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);

  const {
    dataUsers,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete user",
        description: "Xóa user thành công",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };
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
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
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
            onConfirm={() => handleDeleteUser(record._id)}
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
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
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
        onChange={onChange}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        setDataDetail={setDataDetail}
        dataDetail={dataDetail}
        setIsDetailOpen={setIsDetailOpen}
        isDetailOpen={isDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
