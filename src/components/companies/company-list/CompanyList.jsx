import LoginRegisterPopup from "@/components/auth/modal/LoginRegisterPopup";
import MobileMenu from "@/components/layout/header/components/nav/mobile/MobileMenu";
import Header from "@/components/layout/header/Header";
import CompanySearchForm from "./CompanySearchForm";
import Footer from "@/components/layout/footer/Footer";
import FilterCompanyBox from "./FilterCompanyBox";

const CompanyList = () => {
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

      <section className="page-title">
        <div className="auto-container">
          <CompanySearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <FilterCompanyBox />
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

export default CompanyList;
