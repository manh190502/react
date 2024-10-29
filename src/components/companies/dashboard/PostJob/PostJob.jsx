import DBCandidateHeader from "@/components/layout/header/components/dashboard/DBCandidateHeader";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import DBEmployerSidebar from "../common/DBEmployerSidebar";
import BreadCrumb from "../common/BreadCrumb";
import DBMenuToggler from "@/components/layout/header/components/nav/mobile/DBMenuToggler";
import TopBlock from "./components/TopBlock";
import PostBoxForm from "./components/PostBoxForm";
import CopyrightFooterDB from "@/components/layout/footer/components/CopyrightFooterDB";

const PostJob = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DBCandidateHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DBEmployerSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Post a New Job!" />
          {/* breadCrumb */}

          <DBMenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Post Job</h4>
                  </div>

                  <div className="widget-content">
                    <TopBlock />
                    {/* End job steps form */}
                    <PostBoxForm />
                    {/* End post box form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooterDB />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default PostJob;
