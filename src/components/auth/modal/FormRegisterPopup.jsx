import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";

import FormContentRegisterPopup from "./FormContentRegisterPopup";

const FormRegisterPopup = () => {
  return (
    <div className="form-inner">
      <h3>Create a Free jobfind Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <FormContentRegisterPopup />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <FormContentRegisterPopup />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            to="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
          </Link>
        </div>
      </div>
      {/* End bottom-box */}
    </div>
  );
};

export default FormRegisterPopup;
