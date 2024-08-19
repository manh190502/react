import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";

const UserPage = () => {
  return (
    <div className="p-5">
      <UserForm />
      <UserTable />
    </div>
  );
};

export default UserPage;
