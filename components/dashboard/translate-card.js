import React from "react";
import { Input } from "../index";

const TranslateCard = () => {
  return (
    <div className="bg-[#F7E6E5] w-full h-72 rounded-lg flex overflow-x-hidden">
      {/* left */}
      <div className="w-[50%] px-16 py-8">
        <div>
          <span className="text-[#D68585] font-semibold  text-lg">
            Translate!
          </span>
        </div>
        <div className="flex flex-col mt-8">
          <span className="text-[#D68585] font-semibold text-lg mb-2">
            Spanish
          </span>

          <span className="text-[#4B4B4B] font-semibold text-md">
            Caminante, no hay camino, se hace camino al ander
          </span>
        </div>
      </div>

      {/* right */}
      <div className="bg-[#7180C0] h-full w-full px-16 py-8 relative">
        <div className="flex flex-col mt-12">
          <span className="text-white font-semibold text-lg mb-2">English</span>
        </div>
        <Input
          placeholder="Type here"
          className="outline-none placeholder-[#9AA4D1] bg-transparent text-white text-xl py-2"
        />
        <button className="bg-white rounded-full w-[fit-content] px-12 py-2 text-sm absolute bottom-8 right-8">
          Check
        </button>
      </div>
    </div>
  );
};

export default TranslateCard;
