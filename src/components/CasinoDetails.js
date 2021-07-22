import React from "react";

const CasinoDetails = ({ img, info, title }) => {
  return (
    <div
      data-aos="zoom-in"
      className="CasinoDetails flex flex-col px-10 items-center py-12"
    >
      <h2 className="text-3xl mb-6 font-race text-white">{title}</h2>
      <img className="w-1/2 sm:max-w-sm mb-6" src={img} alt="casino" />
      <p className="text-center text-md sm:text-lg md:text-xl font-electro text-white">
        {info}
      </p>
    </div>
  );
};

export default CasinoDetails;
