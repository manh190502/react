import MetaComponent from "@/components/common/MetaComponent";
import ManageJob from "@/components/companies/dashboard/ManageJob/ManageJob";

const metadata = {
  title: "Manage Jobs || JobFind",
  description: "manegejobs",
};

const ManageJobPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ManageJob />
    </>
  );
};

export default ManageJobPage;
