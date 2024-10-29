import Blog from "@/components/blog/blog-list/Blog";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blog List|| JobFind",
  description: "bloglist",
};

const BlogListPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Blog />
    </>
  );
};

export default BlogListPage;
