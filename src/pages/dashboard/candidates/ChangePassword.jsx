import ChangePassword from "@/components/candidates/dashboard/ChangePassword/ChangePassword";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Change Password || JobFind",
  description: "changepassword",
};

const ChangePasswordPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ChangePassword />
    </>
  );
};

export default ChangePasswordPage;
