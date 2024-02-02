import { useEffect, useState } from "react";

const NavMenu: React.FC = () => {
  const [isUserActive, setUserActive] = useState<boolean>(false);
  useEffect(() => {
    // apply logic here
    const active: boolean = false;
    setUserActive(active);
  }, []);

  const renderActiveUserMenu = (): JSX.Element => {
    return (
      <>
        <button
          type="button"
          className="h-[2.5rem] w-[2.5rem] rounded-md bg-neutral-100 flex items-center justify-center lg:hidden"
        >
          <img
            alt="search icon"
            src="./icons/search-icon.png"
            className="h-md"
          />
        </button>
        <button
          type="button"
          className="h-[2.5rem] w-[2.5rem] rounded-md bg-neutral-100 flex items-center justify-center"
        >
          <img alt="add icon" src="/icons/add-icon.png" />
        </button>
        <span className="h-[2.5rem] w-[1px] bg-neutral-200"></span>
        <div className="flex justify-center items-center gap-[1rem]">
          <img alt="avatar icon" src="/icons/default-avatar.png"></img>
          <p>Kirby Borromeo</p>
        </div>
        <button>
          <img alt="toggle icon" src="/icons/caret-down-icon.png" />
        </button>
      </>
    );
  };

  const renderDefaultUserMenu = (): JSX.Element => {
    return (
      <>
        <a
          href="/login"
          className="rounded-md bg-white px-[1rem] py-[0.75rem] text-primary-500 text-lg leading-[normal]"
        >
          Login
        </a>
        <a
          href="/signup"
          className="rounded-md bg-primary-500 px-[1rem] py-[0.75rem] text-[white] text-lg leading-[normal]"
        >
          Signup
        </a>
      </>
    );
  };

  return (
    <div className="bg-white">
      <div className="flex gap-4 min-h-[5rem] justify-center items-center w-full mx-auto max-w-[1440px] px-[2rem] lg:px-[4rem]">
        <div className="flex gap-[1rem]">
          <a
            className="h-[2rem] w-[2rem] rounded-full border-4 border-solid border-orange"
            href="/"
          >
            {/* icon here  */}
          </a>
          <p className="neutral-800">
            <span className="text-lg text-[tail]">MASHUP</span>
            garage
            <span>Blogs</span>
          </p>
        </div>
        <div className="flex flex-auto px-[2.5rem] justify-center">
          <div className="hidden items-center max-w-[600px] h-[3rem] bg-neutral-100 w-full px-[1rem] rounded-md flex lg:flex">
            <img
              alt="search icon"
              src="./icons/search-icon.png"
              className="h-md"
            />
            <input
              className="bg-[transparent] w-full outline-none px-[0.75rem]"
              type="text"
              placeholder="Search Post"
            />
          </div>
        </div>
        <div className="flex gap-[1rem]">
          {isUserActive ? renderActiveUserMenu() : renderDefaultUserMenu()}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
