import Feed from "../components/Feed";
import NavMenu from "../components/NavMenu";

const MainPage = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-feed">
      <NavMenu />
      <Feed />
    </div>
  );
};

export default MainPage;
