import MetaComponent from "@/components/common/MetaComponent";
import ChangePassword from "@/components/companies/dashboard/ChangePassword/ChangePassword";

const metadata = {
  title: "Change Password || JobFind",
  description: "changepassword",
};

const ChangeEmployerPasswordPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ChangePassword />
    </>
  );
};

export default ChangeEmployerPasswordPage;
