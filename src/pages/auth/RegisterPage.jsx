import Register from "@/components/auth/register/Register";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register || JobFind",
  description: "Register",
};

const RegisterPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Register />
    </>
  );
};

export default RegisterPage;
