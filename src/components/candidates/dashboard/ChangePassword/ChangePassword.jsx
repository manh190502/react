import DBCandidateHeader from "@/components/layout/header/components/dashboard/DBCandidateHeader";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import DBCandidateSidebar from "../menusidebar/DBCandidateSidebar";
import BreadCrumb from "./components/BreadCrumb";
import DBMenuToggler from "@/components/layout/header/components/nav/mobile/DBMenuToggler";
import FormChangePassword from "./components/FormChangePassword";
import CopyrightFooterDB from "@/components/layout/footer/components/CopyrightFooterDB";

const ChangePassword = () => {
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
          <BreadCrumb title="Change Password!" />
          {/* breadCrumb */}

          <DBMenuToggler />
          {/* Collapsible sidebar button */}

          <div className="ls-widget">
            <div className="widget-title">
              <h4>Change Password</h4>
            </div>

            <div className="widget-content">
              <FormChangePassword />
            </div>
          </div>
          {/* <!-- Ls widget --> */}
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

export default ChangePassword;
