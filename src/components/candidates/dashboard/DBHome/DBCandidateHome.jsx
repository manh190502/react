import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";

import JobApplied from "./components/JobApplied";

import DBCandidateHeader from "@/components/layout/header/components/dashboard/DBCandidateHeader";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";

import CandidateBreadCrumb from "./components/CandidateBreadCrumb";

import TopCardBlock from "./components/TopCardBlock";
import CopyrightFooterDB from "@/components/layout/footer/components/CopyrightFooterDB";
import DBCandidateSidebar from "../menusidebar/DBCandidateSidebar";
import DBMenuToggler from "@/components/layout/header/components/nav/mobile/DBMenuToggler";

const DBCandidateHome = () => {
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
          <CandidateBreadCrumb title="Howdy, Jerome!!" />
          {/* breadCrumb */}

          <DBMenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  <Notification />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Jobs Applied Recently</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}

                    <JobApplied />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
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

export default DBCandidateHome;
