import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // empty array => run once
  // not empty array => next value !== prev value
  useEffect(() => {
    loadUser();
  }, [current, pageSize]);

  const loadUser = async () => {
    const res = await fetchAllUser(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  console.log(">>> check current ", pageSize);

  return (
    <div className="p-5">
      <UserForm loadUser={loadUser} />
      <UserTable
        loadUser={loadUser}
        dataUsers={dataUsers}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default UserPage;
