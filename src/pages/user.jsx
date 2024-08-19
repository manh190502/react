import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUser();
    setDataUsers(res.data);
  };

  return (
    <div className="p-5">
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};

export default UserPage;
