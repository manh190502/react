import MetaComponent from "@/components/common/MetaComponent";
import CompanyList from "@/components/companies/company-list/CompanyList";

const metadata = {
  title: "Company List || JobFind",
  description: "companylist",
};

const CompanyListPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CompanyList />
    </>
  );
};

export default CompanyListPage;
