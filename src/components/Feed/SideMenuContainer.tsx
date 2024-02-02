import { CreatePostButton, Options, Languages, Footer } from "./index";
import Tags from "../Tags";

const SideMenuContainer: React.FC = () => {
  return (
    <>
      <CreatePostButton />
      <Tags />
      <Options />
      <Languages />
      <Footer />
    </>
  );
};

export default SideMenuContainer;
