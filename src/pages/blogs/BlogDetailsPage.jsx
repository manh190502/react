import blogs from "@/data/blogs";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import LoginRegisterPopup from "@/components/auth/modal/LoginRegisterPopup";
import Header from "@/components/layout/header/Header";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import Footer from "@/components/layout/footer/Footer";
import BlogDetailsContent from "@/components/blog/blog-details/BlogDetailsContent";

const metadata = {
  title: "Blog Details || JobFind",
  description: "blogdetails",
};

const BlogDetailsPage = () => {
  let params = useParams();
  const id = params.id;

  const blog = blogs.find((item) => item.id == id) || blogs[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginRegisterPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Details --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <img src={"/images/resource/thumb-1.png"} alt="resource" />
                </span>
                Alison Dawn
              </li>
              <li>August 31, 2021</li>
              <li>12 Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <img src={blog?.img} alt="resource" />
        </figure>

        <BlogDetailsContent />
      </section>
      {/* <!-- End Blog Single --> */}

      <Footer footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default BlogDetailsPage;
