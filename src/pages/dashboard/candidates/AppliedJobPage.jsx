import AppliedJob from "@/components/candidates/dashboard/DBAppliedJob/AppliedJob";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Applied Job || JobFind",
  description: "appliedjob",
};

const AppliedJobPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <AppliedJob />
    </>
  );
};

export default AppliedJobPage;
