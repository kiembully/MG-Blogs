import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <div className="mb-[2rem]">
      <h1 className="mb-[1rem] text-neutral-800 text-[1.25rem] font-semibold">Trending today</h1>
      <TrendingCard />
    </div>
  );
}

export default Trending;