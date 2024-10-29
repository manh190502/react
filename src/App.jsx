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
import LogInPage from "./pages/auth/LogInPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PageNotFound from "./pages/404/PageNotFound";
import DBCandidatePage from "./pages/dashboard/candidates/DBCandidatePage";
import MyProfilePage from "./pages/dashboard/candidates/MyProfilePage";
import AppliedJobPage from "./pages/dashboard/candidates/AppliedJobPage";
import CVManagerPage from "./pages/dashboard/candidates/CVManagerPage";
import ChangePasswordPage from "./pages/dashboard/candidates/ChangePassword";
import DBEmployerPage from "./pages/dashboard/employers/DBEmployerPage";
import EmployerProfilePage from "./pages/dashboard/employers/EmployerProfilePage";
import PostJobPage from "./pages/dashboard/employers/PostJobPage";
import ManageJob from "./components/companies/dashboard/ManageJob/ManageJob";
import AllApplicantPage from "./pages/dashboard/employers/AllApplicantPage";
import ChangeEmployerPasswordPage from "./pages/dashboard/employers/ChangePassword";

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

                <Route path="employers-dashboard">
                  <Route path="dashboard" element={<DBEmployerPage />} />
                  <Route
                    path="employer-profile"
                    element={<EmployerProfilePage />}
                  />
                  <Route path="post-jobs" element={<PostJobPage />} />
                  <Route path="manage-jobs" element={<ManageJob />} />
                  <Route path="all-applicants" element={<AllApplicantPage />} />
                  <Route
                    path="change-password"
                    element={<ChangeEmployerPasswordPage />}
                  />
                  {/* 
                  


                  <Route
                    path="shortlisted-resumes"
                    element={<ShortListedResumeEmploeeDBPage />}
                  />
                  <Route path="packages" element={<PackageEmploeeDBPage />} />
                  <Route path="messages" element={<MessageEmploeeDBPage />} />
                  <Route
                    path="resume-alerts"
                    element={<ResumeAlertsEmploeeDBPage />}
                  />
                  <Route
                    path="change-password"
                    element={<ChangePasswordEmploeeDBPage />}
                  /> */}
                </Route>

                <Route path="candidates-list" element={<CandidateListPage />} />
                <Route
                  path="candidate-details/:id"
                  element={<CandidateDetailsPage />}
                />

                <Route path="candidates-dashboard">
                  <Route path="dashboard" element={<DBCandidatePage />} />
                  <Route path="my-profile" element={<MyProfilePage />} />
                  <Route path="applied-jobs" element={<AppliedJobPage />} />
                  <Route path="cv-manager" element={<CVManagerPage />} />
                  <Route
                    path="change-password"
                    element={<ChangePasswordPage />}
                  />
                </Route>

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
            autoClose={2000}
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
