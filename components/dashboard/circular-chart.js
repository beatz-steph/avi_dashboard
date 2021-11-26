import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: "",
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ["#D68585", "#ffffff"],
      hoverBackgroundColor: ["#D68585", "#ffffff"],
    },
  ],
};

const CircularChart = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={`${className} flex flex-col justify-center items-center`}
    >
      <div className="mt-12 mb-10 w-[fit-content]">
        <span className="font-bold text-[#4B4B4B] text-xl">Vocab</span>
      </div>

      {/* chart */}

      <div className="w-[50%] relative">
        <Doughnut
          data={data}
          width={400}
          height={400}
          options={{
            cutout: "95%",
            rotation: 120,
          }}
        />
        <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <span className="text-2xl">25%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
