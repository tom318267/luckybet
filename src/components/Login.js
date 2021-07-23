import React from "react";

const Login = () => {
  return (
    <div className="bg-red flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="w-4/5 h-2/3 rounded-lg flex bg-white">
        <form className="flex flex-col justify-center items-center">
          <h2 className="text-3xl text-center font-race mb-4">
            Log in to your account
          </h2>
          <div className="w-4/5 font-electro text-lg">
            <label>Name</label>
            <input className="border w-full mb-1" type="text" />
            <label>Email Address</label>
            <input className="border w-full mb-1" type="text" />
          </div>
          <button className="p-2 bg-red text-lg text-white font-race w-4/5 mb-4">
            Login
          </button>
          <p className="text-sm font-electro">
            Don't have an account <strong className="text-red">Sign Up</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
