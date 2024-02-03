import React, { useState } from "react";
import { PageLayout } from "../components";
import TextField from "../components/textfield";
import Button from "../components/button";

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
    <PageLayout>
      <div className="relative h-full w-full flex flex-row">
        <img
          src="/assets/mg-background.png"
          alt="mg-background"
          className="relative h-full w-1/2 aspect-auto"
        />
        <form className="relative py-6 h-full w-1/2 bg-white flex items-center justify-center">
          <span className="absolute top-6 right-8 text-sm">
            Already a member?{" "}
            <a
              href="/login"
              className="underline text-indigo-500 underline-offset-2"
            >
              Sign in
            </a>
          </span>
          <div className="relative w-72 flex flex-col item-start justify-start">
            <p className="text-xl">Sign up</p>
            <TextField
              label="Full name"
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={onChange}
              fullWidth
              classNames="mt-4"
            />
            <TextField
              label="Email"
              type="text"
              name="email"
              value={user.email}
              onChange={onChange}
              fullWidth
              classNames="mt-4"
            />
            <TextField
              label="Username"
              type="text"
              name="username"
              value={user.username}
              onChange={onChange}
              fullWidth
              classNames="mt-4"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              fullWidth
              classNames="mt-4"
            />
            <span className="text-sm mt-6">
              By continuing you are setting up a Mashup Garage Blog account and
              agree to our{" "}
              <a
                href="#"
                className="underline text-indigo-500 underline-offset-2"
              >
                User Agreement
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline text-indigo-500 underline-offset-2"
              >
                Privacy Policy
              </a>
            </span>
            <Button classNames="mt-6" fullWidth onClick={() => onSubmit()}>
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default SignUp;
