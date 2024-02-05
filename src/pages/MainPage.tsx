import { Feed, PageLayout, NavMenuLayout } from "../components";

const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <Feed />
      </NavMenuLayout>
    </PageLayout>
  );
};

export default MainPage;
