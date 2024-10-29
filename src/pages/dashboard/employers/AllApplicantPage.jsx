import MetaComponent from "@/components/common/MetaComponent";
import AllApplicant from "@/components/companies/dashboard/AllApplicant/AllApplicant";

const metadata = {
  title: "All Applicants || Superio - Job Borad ReactJs Template",
  description: "Superio - Job Borad ReactJs Template",
};

const AllApplicantPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <AllApplicant />
    </>
  );
};

export default AllApplicantPage;
