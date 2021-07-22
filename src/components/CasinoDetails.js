import React from "react";

const CasinoDetails = ({ img, info, title }) => {
  return (
    <div className="flex flex-col px-10 items-center py-12">
      <h2 className="text-3xl mb-6 font-race text-white">{title}</h2>
      <img className="w-1/2 mb-6" src={img} alt="casino" />
      <p className="text-center text-md sm:text-lg font-electro text-white">
        {info}
      </p>
    </div>
  );
};

export default CasinoDetails;
