import DBCandidateHeader from "@/components/layout/header/components/dashboard/DBCandidateHeader";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import DBCandidateSidebar from "../menusidebar/DBCandidateSidebar";
import BreadCrumb from "./components/BreadCrumb";
import DBMenuToggler from "@/components/layout/header/components/nav/mobile/DBMenuToggler";
import AppliedJobTable from "./components/AppliedJobTable";
import CopyrightFooterDB from "@/components/layout/footer/components/CopyrightFooterDB";

const AppliedJob = () => {
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
          <BreadCrumb title="Applied jobs!" />
          {/* breadCrumb */}

          <DBMenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <AppliedJobTable />
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

export default AppliedJob;
