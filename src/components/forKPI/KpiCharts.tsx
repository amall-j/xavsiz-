import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import bar from "../../assets/bar.svg";

const PieChart = () => {
  const data = {
    datasets: [
      {
        data: [100, 0],
        backgroundColor: ["#A4E36D", "#2E3741"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    cutout: "70%",
  };

  return (
    <div className="relative w-full h-[300px] ">
      <Pie data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#37414C] w-[175px] h-[175px] rounded-full flex flex-col items-center justify-center text-[#AAC0D8]">
          <img src={bar} alt="" />
          <span className="text-[22px] font-medium mt-[10px]">Ijobiy KPI</span>
        </div>
      </div>
      <div className="absolute bottom-3 w-full text-center">
        <span className="text-white text-[20px] font-bold">100%</span>
      </div>
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Percentage",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100],
        backgroundColor: "#A4E36D",
        barThickness: 10,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          display: true,
          color: "#FFFFFF",
          font: { size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export { PieChart, BarChart };
