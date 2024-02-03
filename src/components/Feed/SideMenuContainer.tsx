import { CreatePostButton, Options, Languages, Footer } from "./index";
import Tags from "../Tags";
import Button from "../button";

const SideMenuContainer: React.FC = () => {
  return (
    <>
      {/* <CreatePostButton /> */}
      <Button fullWidth>Create Post</Button>
      <Tags />
      <Options />
      <Languages />
      <Footer />
    </>
  );
};

export default SideMenuContainer;
