import React from "react";
import { ProgressBar } from "../index";

const ChapterCard = ({ title, imgUrl, Topic, total, current }) => {
  return (
    <div className="bg-[#D68585] h-72  w-72 rounded-lg p-4 relative mb-10 mr-16">
      <h3 className="text-white ml-4 mt-6 font-semibold text-xl">{title}</h3>

      <p className="ml-4 text-3xl max-w-[50%] mb-6 mt-16 text-white font-semibold h-16">
        {Topic}
      </p>
      <ProgressBar total={total} value={current} />
      <div className="absolute bottom-2 right-2">
        <span className="text-xl font-semibold">
          {Math.round((current / total) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default ChapterCard;
