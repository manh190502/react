import CopyrightFooter from "./components/CopyrightFooter";
import FooterApps from "./components/FooterApps";
import FooterHomeContent from "./components/FooterHomeContent";
import SubForm from "./components/SubForm";

const FooterHome = () => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(/images/background/3.png)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>Subscribe Our Newsletter</h2>
              <div className="text">We don’t send spam so don’t worry.</div>
            </div>
            <SubForm />
          </div>
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/logo.png" alt="brand" />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="#">0988 888 888</a>
                </p>
                <p className="address">
                  Luong Nha, Thanh Son
                  <br /> Phu Tho, Viet Nam. <br />
                  <a
                    href="mailto:manh.dc204583@sis.hust.edu.vn"
                    className="email"
                  >
                    manh.dc204583@sis.hust.edu.vn
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterHomeContent />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default FooterHome;
