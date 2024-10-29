import DBCandidateHome from "@/components/candidates/dashboard/DBCandidateHome";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Candidates Dashboard || Superio - Job Borad ReactJs Template",
  description: "Superio - Job Borad ReactJs Template",
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
