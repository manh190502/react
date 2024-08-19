import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { setDataDetail, dataDetail, setIsDetailOpen, isDetailOpen } = props;

  return (
    <Drawer
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
