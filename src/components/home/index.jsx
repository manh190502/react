import LoginRegisterPopup from "../auth/modal/LoginRegisterPopup";
import BlogHome from "../blog/BlogHome";
import FooterHome from "../layout/footer/FooterHome";
import MobileMenu from "../layout/header/components/nav/mobile/MobileMenu";
import Header from "../layout/header/Header";
import Block from "./Block";
import Hero from "./hero/Hero";
import JobCategorie from "./JobCategorie";
import JobFilterTab from "./JobFilterTab";
import Partner from "./Partner";
import TopCompany from "./TopCompany";

const HomeComponent = () => {
  return (
    <>
      <LoginRegisterPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero />
      {/* <!-- End Banner Section--> */}

      <section className="job-section alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Most Popular Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End sec-title */}

          <div className="default-tabs tabs-box">
            <JobFilterTab />
          </div>
          {/* End .default-tabs */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="process-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>

          <div className="row" data-aos="fade-up">
            <Block />
          </div>
        </div>
      </section>
      {/* <!-- End Process Section --> */}

      <section className="top-companies style-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Company Registered</h2>
            <div className="text">
              Some of the companies we have helped recruit excellent applicants
              over the years.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <BlogHome />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="clients-section alternate">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>

      {/* <!-- End Clients Section--> */}

      <FooterHome />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default HomeComponent;
