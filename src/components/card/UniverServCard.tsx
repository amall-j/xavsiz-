import { useNavigate } from "react-router-dom";

interface UniverServCardProps {
  id: number;
  img: string;
  title: string;
  number: number;
  numColor?: string;
  link?: string;
  mode?: "primary" | "secondary";
}

export default function UniverServCard({
  id,
  img,
  title,
  number,
  numColor = "text-white",
  mode = "primary",
  link,
}: UniverServCardProps) {
  const modeClass = {
    primary: "flex-col",
    secondary: "",
  }[mode];

  const navigate = useNavigate();

  return (
    <div
      key={id}
      onClick={() => link && navigate(link)}
      className={`rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] p-5 flex justify-between cursor-pointer transition bg-[#2E3741] ${modeClass}`}
    >
      <div className="grid grid-cols-3 gap-2 items-center">
        <img
          src={img}
          alt={title}
          className="col-span-1 w-15 h-20 object-contain mb-3"
        />
        <h3 className="col-span-2 text-[20px] text-[#8EA1B6] font-medium mb-2">
          {title}
        </h3>
      </div>
      <p className={`text-[24px] font-medium mt-6 ${numColor}`}>{number}</p>
    </div>
  );
}
