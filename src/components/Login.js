import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-red flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="w-4/5 h-2/3 rounded-lg flex bg-white">
        <form className="flex flex-col justify-center items-center my-0 mx-auto">
          <h2 className="text-3xl text-center font-race mb-4">Sign In</h2>
          <div className="w-4/5 font-electro text-lg">
            <label>Name</label>
            <input className="border w-full mb-1" type="text" />
            <label>Email Address</label>
            <input className="border w-full mb-4" type="text" />
          </div>
          <button className="p-2 bg-red text-lg text-white font-race w-4/5 mb-4">
            Login
          </button>
          <p className="text-sm font-electro md:text-lg">
            Don't have an account{" "}
            <Link to="/register">
              <strong className="text-red">Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
