import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <form className="sm:w-[400px] sm:mx-auto sm:right-0 sm:left-0 sm:rounded-lg my-36 px-16 py-10 absolute bg-black text-white bg-opacity-80">
        <h1 className="my-4 text-2xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-3 my-4 bg-gray-700 w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 my-4 bg-gray-700 w-full"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-3 my-4 bg-gray-700 w-full"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 my-4 bg-red-600 w-full sm:rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer text-sm mx-auto my-4"
          onClick={toggleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already Registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
