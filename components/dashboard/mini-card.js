import React from "react";

const MiniCard = () => {
  return (
    <div className="bg-[#D68585] w-72 h-72 rounded-lg px-8 py-8">
      <div>
        <span className="text-white font-semibold text-lg">Vocal test</span>
      </div>
      <div className="mt-16 mx-auto w-[fit-content]">
        <span className="text-white font-semibold text-3xl"> "Escuchar"</span>
      </div>
      <div className="mt-5 w-[fit-content] mx-auto">
        <span className="text-[#E5B1B1] font-semibold text-2xl ">
          To listen
        </span>
      </div>
    </div>
  );
};

export default MiniCard;
