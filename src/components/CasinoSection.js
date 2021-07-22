import React from "react";
import casino from "../assets/casino.svg";
import chips from "../assets/chips.svg";
import horses from "../assets/horses.svg";
import CasinoDetails from "./CasinoDetails";

const CasinoSection = () => {
  return (
    <div className="bg-black">
      <CasinoDetails
        img={casino}
        title="Casino"
        info={
          "Play our online casino, which features slot machines, video poker, and video blackjack!"
        }
      />
      <CasinoDetails
        img={chips}
        title="Table Games"
        info="Table games include Poker, Blackjack, Craps, and Roulette!"
      />
      <CasinoDetails
        img={horses}
        title="Horse Betting"
        info="Bet on your favorite horse from home!"
      />
    </div>
  );
};

export default CasinoSection;
