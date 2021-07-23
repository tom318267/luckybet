import React from "react";

const SignUp = () => {
  return (
    <div className="bg-red flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="w-4/5 h-1/2 flex bg-white">
        <form className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center font-race mb-4">
            Create an Account
          </h2>
          <div className="w-4/5 font-electro text-sm">
            <label>Name</label>
            <input className="border w-full mb-1" type="text" />
            <label>Email Address</label>
            <input className="border w-full mb-1" type="text" />
            <label>Password</label>
            <input className="border w-full mb-1" type="text" />
          </div>
          <button className="p-2 bg-red text-sm text-white font-race w-4/5 mb-4">
            Register
          </button>
          <p className="text-sm">
            Already have an account? <strong className="text-red">Login</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
