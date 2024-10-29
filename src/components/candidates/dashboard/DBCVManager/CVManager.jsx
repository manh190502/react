import DBCandidateHeader from "@/components/layout/header/components/dashboard/DBCandidateHeader";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import DBCandidateSidebar from "../menusidebar/DBCandidateSidebar";
import BreadCrumb from "./components/BreadCrumb";
import DBMenuToggler from "@/components/layout/header/components/nav/mobile/DBMenuToggler";
import CvUploader from "./components/CvUploader";
import CopyrightFooterDB from "@/components/layout/footer/components/CopyrightFooterDB";

const CVManager = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DBCandidateHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DBCandidateSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="CV Manager!" />
          {/* breadCrumb */}

          <DBMenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="cv-manager-widget ls-widget">
                <div className="widget-title">
                  <h4>Cv Manager</h4>
                </div>
                {/* End widget-title */}
                <div className="widget-content">
                  <CvUploader />
                </div>
                {/* End widget-content */}
              </div>
              {/* End Ls widget */}
            </div>
            {/* End .col */}
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

export default CVManager;
