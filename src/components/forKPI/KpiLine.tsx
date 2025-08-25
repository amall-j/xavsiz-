import { Line } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["1-chorak", "2-chorak", "3-chorak", "4-chorak"],
  datasets: [
    {
      label: "KPI",
      data: [0, 80, 12, 5],
      borderColor: "#00E0FF", 
      borderWidth: 2,
      tension: 0.5,
      fill: true,
      backgroundColor: "rgba(0, 224, 255, 0.1)",
      pointBackgroundColor: "#00E0FF",
      pointRadius: 3,
      pointHoverRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  layout: { padding: { bottom: 10 } },
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { display: false },
    },
    y: {
      min: -5,
      max: 100,
      grid: { display: false, drawBorder: false },
      ticks: { display: false },
    },
  },
};

export default function KPILine() {
  return (
    <div className="h-full w-full bg-transparent">
      <Line data={data} options={options} />
    </div>
  );
}