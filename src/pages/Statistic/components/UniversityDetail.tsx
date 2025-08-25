import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { DetIcon1, Go, PoliceIcon } from "../../../assets";
import UniverServCard from "../../../components/card/UniverServCard";

export default function UniversityDetail() {
  const location = useLocation();
  const { title } = location.state || {};

  return (
    <div className="flex flex-col gap-3 ">
      {/* detailing header */}
      <div className="flex justify-between bg-[#2E3741] p-4 rounded-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <p className="text-[14px] text-[#AAC0D8]">Dashbord</p>
            <ChevronRight />
            <p className="text-[14px] text-white">Universitet</p>
          </div>
          <h1 className="text-[20px] font-bold">{title}</h1>
        </div>
        <div className="flex items-center gap-2 bg-[#37414C] px-4 py-2 rounded-lg ">
          <img src={PoliceIcon} alt="" />
          Profilaktika inspektori
          <img src={Go} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-6 items-center gap-3">
        <div>
          <UniverServCard
            id={1}
            title="Talabalar hozirgi
          kayfiyati bo‘yicha"
            img={DetIcon1}
            number={6565}
            mode="primary"
          />
        </div>
      </div>
    </div>
  );
}
