import CVManager from "@/components/candidates/dashboard/DBCVManager/CVManager";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "CV Manager || JobFind",
  description: "cvmanager",
};

const CVManagerPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CVManager />
    </>
  );
};

export default CVManagerPage;
