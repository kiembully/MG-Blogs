import { Feed, PageLayout, NavMenuLayout } from "../components";

const MainPage = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <Feed />
      </NavMenuLayout>
    </PageLayout>
  );
};

export default MainPage;
