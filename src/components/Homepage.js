import React from "react";
import { Link } from "react-router-dom";
import luckybet from "../assets/luckybet.svg";
import CasinoSection from "./CasinoSection";

const Homepage = () => {
  return (
    <>
      <div className="Homepage w-screen h-screen bg-black flex flex-col justify-center items-center">
        <img
          className="w-3/4 md: max-w-md object-contain animate__animated animate__bounceInUp"
          src={luckybet}
          alt="luckybet"
        />
        <div className="relative bottom-10 sm:bottom-20 font-race">
          <Link to="/register">
            <button className="py-2 px-6 md:px-8 hvr-grow bg-red mr-2 sm:mr-4 rounded-full text-lg text-white">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="py-2 px-8 md:px-10 hvr-grow bg-red rounded-full sm:text-lg text-white text-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
      <CasinoSection />
    </>
  );
};

export default Homepage;
