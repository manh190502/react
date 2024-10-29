import MetaComponent from "@/components/common/MetaComponent";
import PostJob from "@/components/companies/dashboard/PostJob/PostJob";

const metadata = {
  title: "Post Jobs || JobFind",
  description: "postjobs",
};

const PostJobPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PostJob />
    </>
  );
};

export default PostJobPage;
