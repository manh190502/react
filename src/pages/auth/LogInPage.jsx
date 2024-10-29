import LogIn from "@/components/auth/login/LogIn";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login || JobFind",
  description: "login",
};

const LogInPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <LogIn />
    </>
  );
};

export default LogInPage;
