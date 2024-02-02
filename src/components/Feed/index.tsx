import CommonDivider from "../CommonDivider";
import Post from "../Posts";
import Tags from "../Tags";
import Trending from "./Trending";

const Feed = () => {
  return (
    <div className="mt-[5rem] pt-[2rem] mx-auto max-w-[840px]">
      <Trending />
      <CommonDivider orientation="horizontal" />
      <div className="mt-[2rem] grid grid-cols-12 gap-4">
        <div className="col-span-8 p-4 bg-gray-300">
        <Post />
        </div>
        <div className="col-span-4 p-4 bg-gray-500">
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Feed;