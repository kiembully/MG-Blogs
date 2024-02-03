import { Feed, PageLayout } from "../components";
import NavMenu from "../components/NavMenu";
import TextField from "../components/textfield";

const MainPage = () => {
  return (
    <PageLayout>
      <div className="relative h-full w-full bg-feed">
        <NavMenu />
        <Feed />
      </div>
    </PageLayout>
  );
};

export default MainPage;
