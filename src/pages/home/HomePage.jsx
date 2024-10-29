import MetaComponent from "@/components/common/MetaComponent";
import HomeComponent from "@/components/home";
import Wrapper from "@/components/layout/wrapper/Wrapper";

const metadata = {
  title: "Home || JobFind ",
  description: "home",
};

export default function HomePage() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeComponent />
    </Wrapper>
  );
}
