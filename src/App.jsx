import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "./components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";

import HomePage from "./pages/home/HomePage";
import JobListPage from "./pages/jobs/JobListPage";
import JobDetailsPage from "./pages/jobs/JobDetailsPage";
import CompanyListPage from "./pages/companies/CompanyListPage";
import CompanyDetailsPage from "./pages/companies/CompanyDetailsPage";
import CandidateListPage from "./pages/candidates/CandidateListPage";
import CandidateDetailsPage from "./pages/candidates/CandidateDetailsPage";
import BlogListPage from "./pages/blogs/BlogListPage";
import BlogDetailsPage from "./pages/blogs/BlogDetailsPage";
import LoginPage from "./pages/auth/LogInPage";
import LogInPage from "./pages/auth/LogInPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <div className="page-wrapper">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />

                <Route path="job-list" element={<JobListPage />} />
                <Route path="job-details/:id" element={<JobDetailsPage />} />

                <Route path="company-list" element={<CompanyListPage />} />
                <Route
                  path="company-details/:id"
                  element={<CompanyDetailsPage />}
                />

                <Route path="candidates-list" element={<CandidateListPage />} />
                <Route
                  path="candidate-details/:id"
                  element={<CandidateDetailsPage />}
                />

                <Route path="blog-list" element={<BlogListPage />} />
                <Route path="blog-details/:id" element={<BlogDetailsPage />} />

                <Route path="login" element={<LogInPage />} />
                <Route path="register" element={<RegisterPage />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
            <ScrollTopBehaviour />
          </BrowserRouter>

          {/* Toastify */}
          <ToastContainer
            position="bottom-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {/* <!-- Scroll To Top --> */}
          <ScrollToTop />
        </div>
      </Provider>
    </>
  );
}

export default App;
