import Categories from "./components/findcandidate/Categories";
import LocationBox from "./components/findcandidate/LocationBox";
import SearchBox from "./components/findcandidate/SearchBox";

const CandidateSearchForm = () => {
  return (
    <div className="job-search-form">
      <div className="row">
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <SearchBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <LocationBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <Categories />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button type="submit" className="theme-btn btn-style-one">
            Find Candidates
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </div>
    // End job Search form
  );
};

export default CandidateSearchForm;
