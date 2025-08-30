import type { KPIProps } from "../../type/Kpi";



export default function KPICard({ icon, title, date }: KPIProps) {
  return (
    <div className="bg-[#2E3741] rounded-[16px] p-[16px] flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="w-[32px] h-[32px] flex items-center justify-center text-[#E8F7FD]">
          {icon}
        </div>
        <h2 className="text-[15px] text-[#8EA1B6] font-semibold">{title}</h2>
      </div>
      <p className="text-[16px] text-[#FFFFFF]">{date}</p>
    </div>
  );
}
