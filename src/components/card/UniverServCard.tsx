import { useNavigate } from "react-router-dom";

interface UniverServCardProps {
  id: number;
  img: string;
  title: string;
  number: number;
  numColor?: string;
  link?: string;
  mode?: "top" | "side" | "column" | "row"; // 4 xil sxema
  className?: string;
  classNameitem?: string;
  classPadText?: string;
  extraNumber?: number;
  extraIcon?: string; // ikon URL yoki emoji/text
  extraColor?: string;
}

export default function UniverServCard({
  id,
  img,
  title,
  number,
  numColor = "text-white",
  mode = "top",
  link,
  classPadText,
  className = "",
  classNameitem = "",
  extraNumber,
  extraIcon,
  extraColor = "text-red-400",
}: UniverServCardProps) {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      onClick={() => link && navigate(link)}
      className={`
        rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] 
        p-5 cursor-pointer transition bg-[#2E3741] 
        w-full h-full flex ${className}
      `}
    >
      {mode === "top" && (
        <div className="flex flex-col justify-center items-center  w-full">
          {/* icon + title */}
          <div className="flex flex-1300 items-center gap-2 max-[1320px]:min-h-[150px] ">
            <img src={img} alt={title} className="w-20 h-20 object-contain" />
            <h3 className="text-[16px] text-[#8EA1B6] font-medium">{title}</h3>
          </div>

          <div className="flex justify-center items-center  gap-3  flex-1300 max-w-[200px]   ">
            <p
              className={`text-[22px] font-semibold max-[1300px]:text-[16px] translate-y-`}
            >
              {number}
            </p>

            {(extraNumber || extraIcon) && (
              <div className="flex items-center justify-end gap-1  ">
                {extraNumber !== undefined && (
                  <>
                    <span
                      className={`text-[22px] max-[1300px]:text-[16px] font-medium ${extraColor}`}
                    >
                      <span className="text-white max-[1320px]:hidden">/</span>
                      {extraNumber} %
                    </span>
                  </>
                )}
                {extraIcon && (
                  <img
                    src={extraIcon}
                    alt="extra"
                    className="w-10 h-10 max-[1330px]:w-7 max-[1300px]:h-7 object-contain"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {mode === "side" && (
        // 2) Chapda katta icon, o‘rtada text+number, o‘ngda icon
        <div
          className={`flex items-center justify-between gap-4 w-full ${className}`}
        >
          <img
            src={img}
            alt="left-icon"
            className={`w-50 h-50  object-contain`}
          />
          <div className="flex flex-col flex-1">
            <h3 className="text-[18px] text-[#8EA1B6] font-medium max-w-[150px]">
              {title}
            </h3>
            <p className={`text-[60px] font-semibold `}>{number}</p>
          </div>
        </div>
      )}

      {mode === "column" && (
        // 3) Text → number → icon (ustma-ust)
        <div
          className={`flex flex-col items-start justify-between py-6 text-left h-full   w-full ${classNameitem}`}
        >
          <div className={` flex flex-col ${classPadText}`}>
            <h3 className="text-[20px] text-[#8EA1B6] font-medium">{title}</h3>
            <p className={`text-[25px] font-semibold my-2 ${numColor}`}>
              {number}
            </p>
          </div>
          <div>
            <img src={img} alt={title} className="w-22 h-22  object-contain" />
          </div>
        </div>
      )}

      {mode === "row" && (
        // 4) Icon + Text + Number (bitta qatorda)
        <div className="flex items-center justify-between gap-3 w-full">
          <img src={img} alt={title} className="w-15 h-15 object-contain" />
          <h3 className="text-[18px] text-[#8EA1B6] font-medium flex-1">
            {title}
          </h3>
          <p className={`text-[20px] font-semibold ${numColor}`}>{number}</p>
        </div>
      )}
    </div>
  );
}
