import React from "react";
import luckybet from "../assets/luckybet.svg";

const Homepage = () => {
  return (
    <div className="Homepage w-screen h-screen bg-black flex flex-col justify-center items-center">
      <img
        className="w-3/4 md:w-1/2 object-contain"
        src={luckybet}
        alt="luckybet"
      />
      <div>
        <button className="p-2 px-6 bg-red mr-2 sm:mr-4 rounded-full text-lg text-white font-race">
          Sign Up
        </button>
        <button className="py-2 px-8 bg-red rounded-full sm:text-lg text-white text-lg font-race">
          Login
        </button>
      </div>
    </div>
  );
};

export default Homepage;
