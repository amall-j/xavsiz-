import type { ReactNode } from "react";

type KPIStatisticsProps = {
  icon: ReactNode;
  title: string;
  num: string;
  isFlex?: boolean;
};

export default function KPIStatistics({ icon, title, num, isFlex = true, }: KPIStatisticsProps) {
  return (
    <div className={`bg-[#2E3741] flex flex-col rounded-[16px] ${isFlex ? "py-[7px] px-[11px] justify-end" : 'pt-[32px] pr-[82.41px] pb-[32px] pl-[32px]'}`}>
      <div className={`flex items-center gap-2 ${isFlex ? '' : 'flex-col items-start'}`}>
        <div className={`${isFlex ? "w-[32px] h-[32px] text-[#E8F7FD]" : "w-[70px] h-[70px]"} flex items-center justify-center`}>
          {icon}
        </div>
        <h2 className={`text-[15px] text-[#8EA1B6] font-semibold ${isFlex? "max-w-[156px]" : "max-w-[200px]"}`}>{title}</h2>
      </div>
      <p className="text-[40px] text-[#FFFFFF] font-medium mt-4">{num}</p>
    </div>
  );
}
