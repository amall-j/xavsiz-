// UniversCard.tsx

import type { UniversCardState } from "../../type/UniversCard";

export default function UniversCard({
  icon,
  studentCount,
  title,
  adress,
}: UniversCardState) {
  return (
    <div className="bg-[#1E252B] text-white rounded-xl p-4 h-65 flex flex-col justify-between  shadow-md">
      <div>
        {/* Icon */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-17 h-17 flex items-center justify-center bg-[#2C333A] rounded-full">
            {icon}
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[16px] text-[#AAC0D8] font-normal">
              Talabar soni
            </p>
            <p className="text-2xl font-semibold">{studentCount}</p>
          </div>
        </div>

        {/* Student count */}

        {/* Title */}
        <div className="mt-2 text-lg font-semibold">{title}</div>
      </div>

      {/* Address */}
      <div className="flex flex-col items-start gap-">
        <p className="text-[#AAC0D8]">Manzil</p>
        <p className="mt-1 text-sm text-gray-400">{adress}</p>
      </div>
    </div>
  );
}
