import DBCandidateHome from "@/components/candidates/dashboard/DBHome/DBCandidateHome";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Candidates Dashboard || JobFind",
  description: "candidatesdashboard",
};

const DBCandidatePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DBCandidateHome />
    </>
  );
};

export default DBCandidatePage;
