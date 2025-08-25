type KPIPercentageProps = {
  color: string;
  title: string;
  percentage: string;
  index?: string;
};

export default function KPIPercentageCard({ color, title, percentage, index }: KPIPercentageProps) {
  return (
    <div className={`rounded-[16px] flex gap-2 ${index ? "pb-[5px] border-[#475360] border-b-1 rounded-none items-center justify-between" : 'flex-col bg-[#37414C] py-[16px] px-[30px]'}`}>
      <div className={`flex  gap-2 ${index ? "items-center" : "items-start"}`}>
        {index && <span className="text-[#8EA1B6]">{index}</span>}
        <div
          className={`${index ? "w-[20px] h-[20px] rounded-[50%]" : "w-[22px] h-[20px] rounded-full"}`}
          style={{ backgroundColor: color }}
        ></div>
        <h2 className={`text-[14px] text-[#FFFFFF] font-medium ${index ? "" : "max-w-[175px]"}`}>{title}</h2>
      </div>
      <p className={`text-[15px] text-[#FFFFFF] font-medium ${index ? "" : "mt-4"}`}>{percentage}</p>
    </div>
  );
}