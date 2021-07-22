import React from "react";

const Nav = () => {
  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-between font-race">
        <h3 className="text-white m-2 sm:text-xl font-race">LuckyBet</h3>
        <div className="m-3 sm:m-2 hidden sm:flex">
          <h3 className="text-white mr-4 sm:mr-6 text-xs sm:text-lg cursor-pointer">
            Home
          </h3>
          <h3 className="text-white mr-4 text-xs sm:text-lg cursor-pointer">
            Casino
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
