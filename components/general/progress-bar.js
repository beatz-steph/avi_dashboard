import React from "react";

const ProgressBar = ({ total, value }) => {
  return (
    <div className="w-full h-2 bg-[#38383838]">
      <div
        style={{ width: `${Math.round((value / total) * 100)}%` }}
        className={`h-2 bg-black`}
      ></div>
    </div>
  );
};

export default ProgressBar;
