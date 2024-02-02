import { PageLayout } from "../components";

const Login = () => {
  return (
    <PageLayout>
      <div className="relative h-3/4 w-3/5 flex flex-row">
        <div className="relative h-full w-1/2 bg-black/75"></div>
        <form className="relative h-full w-1/2 bg-white flex items-center justify-center">
          <span className="absolute top-6 right-8 text-sm">
            New to Mashup Garage Blogs?{" "}
            <a href="#" className="text-[#6366F1]">
              Sign up
            </a>
          </span>
          <div className="relative h-80 w-72 flex flex-col item-start justify-start">
            <p className="text-xl">Login</p>
            <p className="text-sm mt-6">Username</p>
            <input
              type="text"
              className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
            />
            <p className="text-sm mt-6">Password</p>
            <input
              type="password"
              className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
            />
            <a href="#" className="text-xs text-[#6366F1]">
              Forgot your password?
            </a>
            <button
              type="submit"
              className="absolute bottom-0 h-10 w-full bg-[#6366F1] rounded text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default Login;
