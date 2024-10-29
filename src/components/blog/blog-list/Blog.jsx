import LoginRegisterPopup from "@/components/auth/modal/LoginRegisterPopup";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "./components/Breadcrumb";
import BlogList from "./components/BlogList";
import BlogPagination from "./components/BlogPagination";
import Footer from "@/components/layout/footer/Footer";

const Blog = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginRegisterPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Blog" meta="Blog" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <BlogList />
                </div>
                {/* End .row */}

                <BlogPagination />
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <Footer footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Blog;
