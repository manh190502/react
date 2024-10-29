import MetaComponent from "@/components/common/MetaComponent";
import JobList from "@/components/jobs/job-list/JobList";

const metadata = {
  title: "Job List|| JobFind",
  description: "joblist",
};

const JobListPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage;
