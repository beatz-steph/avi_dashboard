import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["jan", "feb", "mar", "apr"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      tension: 0.1,
    },
  ],
};
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    //your code
    var ctx = document.getElementById("canvas").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(229, 239, 255, 1)");
    gradient.addColorStop(1, "#FFFFFF");
    const newData = {
      labels: [1, 1],
      datasets: [
        {
          label: "usd",
          data: [1, 1],
          backgroundColor: gradient,
          borderColor: this.props.border_color,
          pointRadius: 0,
        },
      ],
    };
    this.setState({ chartData: newData });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div
        {...props}
        className={`${className} flex flex-col justify-center items-center relative`}
      >
        <div className="absolute top-8 right-4 text-[#B6B6B6] font-bold">
          <span>Level 3</span>
        </div>
        <div className=" w-[fit-content] absolute left-0 top-20 mt-4">
          <span className="font-bold text-[#4B4B4B] text-xl ">Vocab</span>
        </div>
        {/* chart */}
        <div className="w-[100%] relative">
          <Line
            id="canvas"
            width={800}
            height={400}
            data={data}
            options={{
              plugins: {
                legend: { display: false },
              },
              scales: {
                xAxes: { grid: { display: false } },
                yAxes: { display: false },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default LineChart;
