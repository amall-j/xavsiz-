import { Calendar1, CalendarCheck2, CalendarClock } from "lucide-react";

// Images
import img from "../../assets/kpi.svg";
import map from "../../assets/map.png";
import decrease from "../../assets/decrease.svg";
import { good, bad } from "../../assets";

// Components
import KPICard from "../../components/forKPI/KpiCard";
import KPIStatistics from "../../components/forKPI/KpiStatistics";
import KPIProgress from "../../components/forKPI/KpiProgres";
import KPILine from "../../components/forKPI/KpiLine";
import KPIPercentageCard from "../../components/forKPI/KpiPercentageCard";
import { PieChart, BarChart } from "../../components/forKPI/KpiCharts";

// Mock data
import {
  data,
  statisticsData,
  negativeKPIData,
  leftCards,
  rightCards,
} from "../../mockData/data.kpi";
import { goodInspektros, badInspektros } from "../../mockData/data.kpiTable";
import { CustomTable } from "../../components/Table";

export default function KPI() {
  return (
    <div className="h-screen w-full pb-4">
      <div className="flex items-center justify-between gap-4">
        <KPICard
          icon={<CalendarClock />}
          title="KPI boshlanish sanasi"
          date="2025-07-01"
        />
        <KPICard
          icon={<CalendarCheck2 />}
          title="KPI tugash sanasi"
          date="2025-09-30"
        />
        <KPICard
          icon={<Calendar1 />}
          title="KPI tugashigacha qancha kun qolgani"
          date="82"
        />
      </div>

      <div className="flex gap-[10px] mt-[35px] items-stretch">
        <div className="flex gap-[15px] flex-wrap items-stretch w-full">
          {statisticsData.map((item, idx) => (
            <KPIStatistics
              key={idx}
              icon={item.icon}
              title={item.title}
              num={item.num}
            />
          ))}
        </div>

        <KPIStatistics
          icon={<img src={img} />}
          title="Jinoyat oldini olish bo'yicha qo'shimcha chora-tadbirlar"
          num="0"
          isFlex={false}
        />
      </div>

      <div className="flex gap-[14px] mt-[35px] items-stretch">
        <img className="rounded-lg" src={map} alt="" />
        <div className="bg-[#2E3741] p-[20px] rounded-[16px] w-full">
          <h2 className="text-[20px]/[31px] font-medium text-white">
            Viloyatlar kesimida o'rtancha KPI reytingi
          </h2>
          <div className="flex flex-col gap-4 mt-[15px]">
            {data.map((item, idx) => (
              <KPIProgress
                key={idx}
                index={idx + 1}
                title={item.title}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-[14px] mt-[35px] w-full items-stretch">
        <div className="bg-[#2E3741] p-[20px] rounded-[16px] w-1/2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18.7px]/[29px] font-bold text-white">
              KPI chorak hisoboti bo'yicha
            </h2>
            <div className="flex items-center gap-2 bg-[#37414C] px-3 py-2 rounded">
              <Calendar1 size={16} className="text-white" />
              <select className="bg-transparent text-white outline-none">
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="h-[550px]">
            <KPILine />
          </div>
        </div>

        <div className="bg-[#2E3741] p-[20px] rounded-[16px] w-1/2">
          <h1 className="text-[18.7px]/[29px] font-bold text-white">
            KPI salbiy ko'rsatkichlar bo'yicha
          </h1>
          <div className="flex items-center gap-[100px] mt-4 relative">
            <div className="absolute w-[160px] h-[160px] rounded-[50%] bg-[#37414C] flex flex-col justify-center items-center gap-2 ml-[80px]">
              <img src={decrease} alt="" />
              <h1 className="text-[#AAC0D8] font-medium text-[22px]">
                Salbiy KPI
              </h1>
            </div>
            <div className="flex flex-col gap-4 ml-auto">
              {negativeKPIData.map((item, idx) => (
                <KPIPercentageCard
                  key={idx}
                  percentage={item.percentage}
                  color={item.color}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-stretch my-[16px] gap-[14px]">
        <div className="w-1/2 bg-[#2E3741] p-[20px] rounded-[16px]">
          <h1 className="text-[18.7px]/[29px] font-bold text-white">
            KPI ijobiy ko'rsatkichlar bo'yicha
          </h1>
          <div className="mt-[30px]">
            <PieChart />
          </div>
        </div>
        <div className="w-1/2 bg-[#2E3741] p-[20px] rounded-[16px]">
          <div className="mt-[50px]">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-[#2E3741] my-[16px] gap-[25px] p-[15px] rounded-[16px]">
        <div className="flex flex-col gap-[10px] w-1/2">
          {leftCards.map((item, idx) => (
            <KPIPercentageCard
              key={idx}
              percentage={item.percentage}
              color={item.color}
              title={item.title}
              index={item.index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[10px] w-1/2">
          {rightCards.map((item, idx) => (
            <KPIPercentageCard
              key={idx}
              percentage={item.percentage}
              color={item.color}
              title={item.title}
              index={item.index}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex gap-[20px] mt-[35px]">
        <div className="bg-[#37414C] py-[20px] px-[32px] rounded-[12px]">
          <div className="flex items-center gap-3 mb-[25px] mt-[10px]">
            <img src={good} alt="" />
            <h2 className="text-[#FFFFFF font-medium text-[20px]">
              Top-10 ilg’or profilaktika inspektorlar
            </h2>
          </div>

          <CustomTable
            columns={[
              { key: "№", title: "№", align: "center", width: "w-1/12" },
              { key: "Rasm", title: "Rasm", align: "center" },
              { key: "F.I.SH", title: "F.I.Sh", align: "center" },
              {
                key: "Universitet nomi",
                title: "Universitet nomi",
                align: "center",
              },
              { key: "Tel.raqam", title: "Tel.raqam", align: "center" },
            ]}
            data={goodInspektros.map((item, index) => ({
              ...item,
              id: index + 1,
              Rasm: (
                <img
                  src={item.Rasm}
                  alt={item["F.I.SH"]}
                  className="w-12 h-12 rounded-[12px]"
                />
              ),
            }))}
            striped
            showPagination
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </div>

        <div className="bg-[#37414C] py-[20px] px-[32px] rounded-[12px] ">
          <div className="flex items-center gap-3 mb-[25px] mt-[10px]">
            <img src={bad} alt="" />
            <h2 className="text-[#FFFFFF font-medium text-[20px]">
              Top-10 past ko’rsatkichli profilaktika Inspektorlar
            </h2>
          </div>

          <CustomTable
            columns={[
              { key: "№", title: "№", align: "center", width: "w-1/12" },
              { key: "Rasm", title: "Rasm", align: "center" },
              { key: "F.I.SH", title: "F.I.Sh", align: "center" },
              {
                key: "Universitet nomi",
                title: "Universitet nomi",
                align: "center",
              },
              { key: "Tel.raqam", title: "Tel.raqam", align: "center" },
            ]}
            data={badInspektros.map((item, index) => ({
              ...item,
              id: index + 1,
              Rasm: (
                <img
                  src={item.Rasm}
                  alt={item["F.I.SH"]}
                  className="w-12 h-12 rounded-[12px]"
                />
              ),
            }))}
            striped
            showPagination
            currentPage={1}
            totalPages={1}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </div>
      </div>
    </div>
  );
}
