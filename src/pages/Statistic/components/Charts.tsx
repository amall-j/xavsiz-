import { Pie } from "react-chartjs-2";
import "chart.js/auto";

interface PieChartProps {
  total: number; // jami talabalar soni
  present: number; // kelgan talabalar soni
}

const PieChart = ({ total, present }: PieChartProps) => {
  const absent = total - present;

  const data = {
    datasets: [
      {
        data: [present, absent],
        backgroundColor: ["#31BA6A", "#D63031"], // yashil = kelgan, qizil = kelmagan
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
    cutout: "75%",
  };

  return (
    <div className="relative w-full h-[300px] flex mt-5 flex-col items-center">
      <Pie data={data} options={options} />

      {/* markazdagi jami */}
      <div className="absolute inset-0 flex  items-center justify-center">
        <div className="bg-[#2E3741] w-[170px] h-[170px] rounded-full flex flex-col items-center justify-center text-[#AAC0D8]">
          <p className="text-[16px]">Jami</p>
          <p className="text-white text-[28px] font-bold">{total}</p>
        </div>
      </div>

      {/* pastdagi kelgan / kelmagan */}
      <div className="mt-2 flex flex-col gap-8 w-full ">
        <div className="bg-[#37414C] px-5 py-3 rounded-lg flex flex-col  items-start">
          <span className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#31BA6A]"></span>
            <span className=" text-[25px]">Kelganlar</span>
          </span>
          <span className="text-white text-[30px] font-bold">{present}</span>
        </div>
        <div className="bg-[#37414C] px-4 py-3 rounded-lg flex flex-col  items-start">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#D63031]"></span>
            <span className=" text-[25px]">Kelmaganlar</span>
          </span>
          <span className="text-white text-[30px] font-bold">{absent}</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
