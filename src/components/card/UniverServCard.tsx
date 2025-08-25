interface UniverServCardProps {
  id: number;
  img: string;
  title: string;
  number: number;
  numColor?: string;
  mode?: "primary" | "secondary"; // qo'shimcha variantlar ham bo'lishi mumkin
}

// const UniverServData=[
//   {
//     id:1,
//     title:""
//   }
// ]
export default function UniverServCard({
  id,
  img,
  title,
  number,
  numColor = "text-white",
  mode = "primary",
}: UniverServCardProps) {
  const modeClass = {
    primary: "flex flex-wrap",
    secondary: "",
  }[mode];

  return (
    <div
      key={id}
      className={`rounded-2xl shadow-md p-5  cursor-pointer transition bg-[#2E3741] ${modeClass}`}
    >
      <img src={img} alt={title} className="w-8 h-8 object-contain mb-3" />
      <h3 className=" text-[14px] font-medium mb-2">{title}</h3>
      <p className={`text-2xl font-bold ${numColor}`}>{number}</p>
    </div>
  );
}
