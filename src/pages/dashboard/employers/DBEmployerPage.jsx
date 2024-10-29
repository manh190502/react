import MetaComponent from "@/components/common/MetaComponent";
import DBEmployerHome from "@/components/companies/dashboard/DBHome/DBEmployerHome";

const metadata = {
  title: "Employeers Dashboard || JobFind",
  description: "employersdashboard",
};

const DBEmployerPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DBEmployerHome />
    </>
  );
};

export default DBEmployerPage;
