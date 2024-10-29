import MyProfile from "@/components/candidates/dashboard/DBMyProfile/MyProfile";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Profile || JobFind",
  description: "myprofile",
};

const MyProfilePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProfile />
    </>
  );
};

export default MyProfilePage;
