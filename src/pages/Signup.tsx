import React, { useState } from "react";
import { AuthenticationPagesLayout } from "../components";

type UserTypes = {
  fullname: string;
  email: string;
  username: string;
  password: string;
};

const SignUp: React.FC = () => {
  const [user, setUser] = useState<UserTypes>({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = () => {
    console.log({ user });
  };

  return (
    <AuthenticationPagesLayout>
      <span className="absolute top-6 right-8">
        Already a member?{" "}
        <a
          href="/login"
          className="underline text-[#6366F1] underline-offset-2"
        >
          Sign in
        </a>
      </span>
      <form className="relative w-72 bg-white flex items-center justify-center">
        <div className="relative w-72 flex flex-col item-start justify-start">
          <p className="text-2xl font-medium">Sign Up</p>
          <p className="text-sm mt-6">Full name</p>
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={onChange}
            className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
          />
          <p className="text-sm mt-6">Email</p>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
            className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
          />
          <p className="text-sm mt-6">Username</p>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onChange}
            className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
          />
          <p className="text-sm mt-6">Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
            className="h-10 w-full mt-2 bg-[#ECF1F3] outline-none text-sm pl-4 text-black/75"
          />
          <span className="text-sm mt-6">
            By continuing you are setting up a Mashup Garage Blog account and
            agree to our{" "}
            <a href="#" className="underline text-[#6366F1] underline-offset-2">
              User Agreement
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-[#6366F1] underline-offset-2">
              Privacy Policy
            </a>
          </span>
          <button
            type="button"
            className="relative mt-6 h-10 w-full bg-[#6366F1] rounded text-white"
            onClick={() => onSubmit()}
          >
            Sign up
          </button>
        </div>
      </form>
    </AuthenticationPagesLayout>
  );
};

export default SignUp;
