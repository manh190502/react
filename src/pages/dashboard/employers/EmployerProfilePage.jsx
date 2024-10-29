import MetaComponent from "@/components/common/MetaComponent";
import EmployerProfile from "@/components/companies/dashboard/DBMyProfile/EmployerProfile";

const metadata = {
  title: "Employer Profile || JobFind",
  description: "employerprofile",
};

const EmployerProfilePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <EmployerProfile />
    </>
  );
};

export default EmployerProfilePage;
