import React from "react";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-red">
      <div className="w-3/4 sm:w-1/2 h-1/2 flex flex-col justify-center rounded-lg bg-white text-center">
        <h2 className="font-race text-lg md:text-xl lg:text-2xl mb-4">
          Sign Up
        </h2>
        <form>
          <div className="w-3/4 my-0 mx-auto flex flex-col">
            <input
              className="form-text p-1 border mb-1 rounded-sm text-sm outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-1 mb-1 rounded-sm text-sm outline-none"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border p-1 rounded-sm text-sm mb-4 outline-none"
              type="text"
              placeholder="Password"
            />
            <button className="py-2 px-2 mb-4 bg-red rounded-lg text-white font-race text-sm">
              Register
            </button>
            <p className="font-electro text-xs sm:text-sm md:text-lg">
              Already a member? <strong className="text-red">Login</strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
