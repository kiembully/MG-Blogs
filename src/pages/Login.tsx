import { useState } from "react";
import { PageLayout } from "../components";

type LoginTypes = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginTypes>({
    username: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = () => {
    console.log({ credentials });
  };

  return (
    <PageLayout>
      <div className="relative h-full w-full flex flex-row">
        <img
          src="/assets/mg-background.png"
          alt="mg-background"
          className="relative h-full w-1/2 aspect-auto"
        />
        <div className="relative h-full w-1/2 bg-white flex items-center justify-center">
          <span className="absolute top-6 right-8 text-sm">
            New to Mashup Garage Blogs?{" "}
            <a
              href="/signup"
              className="underline text-primary-500 underline-offset-2"
            >
              Sign up
            </a>
          </span>
          <form className="relative w-72 flex flex-col item-start justify-start mb-28">
            <p className="text-xl">Login</p>
            <p className="text-sm mt-6">Username</p>
            <input
              type="text"
              value={credentials.username}
              name="username"
              onChange={onChange}
              className="h-10 w-full mt-2 bg-neutral-100 outline-none text-sm pl-4 text-black/75"
            />
            <p className="text-sm mt-6">Password</p>
            <input
              type="password"
              value={credentials.password}
              name="password"
              onChange={onChange}
              className="h-10 w-full mt-2 bg-neutral-100 outline-none text-sm pl-4 text-black/75"
            />
            <a href="#" className="text-xs text-primary-500">
              Forgot your password?
            </a>
            <button
              type="button"
              onClick={() => onSubmit()}
              className="relative mt-12 h-10 w-full bg-primary-500 rounded text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
