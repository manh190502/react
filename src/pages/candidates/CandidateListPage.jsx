import CandidateList from "@/components/candidates/candidate-list/CandidateList";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Candidates List  || JobFind",
  description: "candidateslist",
};

const CandidateListPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <CandidateList />
    </>
  );
};

export default CandidateListPage;
