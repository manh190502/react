import LoginRegisterPopup from "@/components/auth/modal/LoginRegisterPopup";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import Header from "@/components/layout/header/Header";
import CandidateSearchForm from "./CandidateSearchForm";
import Footer from "@/components/layout/footer/Footer";
import FilterCandidateBox from "./FilterCandidateBox";

const CandidateList = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginRegisterPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="page-title style-two">
        <div className="auto-container">
          <CandidateSearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterCandidateBox />
                {/* <!-- ls Switcher --> */}
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <Footer footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default CandidateList;
