import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-between font-race">
        <h3 className="text-white mx-4 my-2 sm:text-xl font-race">LuckyBet</h3>
        <div className="m-3 sm:m-2 hidden sm:flex font-electro font-bold">
          <Link to="/">
            <h3 className="text-white hvr-underline-from-left mr-4 sm:mr-6 text-xs sm:text-lg cursor-pointer">
              Home
            </h3>
          </Link>

          <h3 className="text-white mr-4 hvr-underline-from-left text-xs sm:text-lg cursor-pointer">
            Casino
          </h3>
          <Link to="/register">
            <h3 className="text-white mr-4 hvr-underline-from-left text-xs sm:text-lg cursor-pointer">
              Register/Login
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
