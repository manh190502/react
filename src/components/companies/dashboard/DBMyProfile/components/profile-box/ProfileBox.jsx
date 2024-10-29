import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const ProfileBox = () => {
  return (
    <div className="widget-content">
      <LogoUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox />
      {/* compnay info box */}
    </div>
  );
};

export default ProfileBox;
