import type { KPIProgressProps } from "../../type/Kpi";

export default function KPIProgress({ index, title, percentage }: KPIProgressProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#FFFFFF]">
          {index}. {title}
        </span>
        <span className="text-[#FFFFFF]">{percentage} %</span>
      </div>

      <div className="w-full h-[6px] bg-[#3A4654] rounded">
        <div
          className="h-full bg-red-500 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
