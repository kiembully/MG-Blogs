const NavMenu = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-4 min-h-[5rem] justify-center items-center w-full mx-auto max-w-[1440px] px-[4rem]">
        <div className="flex gap-[1rem]">
          <a className="h-[2rem] w-[2rem] rounded-full border-4 border-solid border-orange" href="/">
            {/* icon here  */}
          </a>
          <p className="neutral-800">
            <span className="text-lg text-[tail">MASHUP</span>
            garage
            <span>Blogs</span>
          </p>
        </div>
        <div className="flex flex-auto px-[2.5rem] justify-center">
          <div className="flex items-center max-w-[600px] h-[3rem] bg-neutral-100 w-full px-[1rem] rounded-md flex">
            <img alt="search icon" src="./icons/search-icon.png" className="h-md" />
            <input className="bg-[transparent] w-full outline-none px-[0.75rem]" type="text" placeholder="Search Post" />
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <button type="button" className="rounded-md bg-white px-[1rem] py-[0.75rem] text-primary-500 text-lg leading-[normal]">Login</button>
          <button type="button" className="rounded-md bg-primary-500 px-[1rem] py-[0.75rem] text-[white] text-lg leading-[normal]">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;