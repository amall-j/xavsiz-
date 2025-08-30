interface StudentCardProps {
    title: string;
    text: string;
    w?: boolean;
    sm?: boolean;
  }
  
  export default function StudentCard({ title, text, w = false, sm = false }: StudentCardProps) {
    let widthClass = "w-[200px]";
    if (sm) {
      widthClass = "w-[175px]";
    }
    if (w) {
      widthClass = "w-full";
    }
  
    const maxWidthClass = w ? "max-w-[360px]" : "max-w-[190px]";
  
    return (
      <div className={`bg-[#37414C] p-[10px] rounded-[8px] ${widthClass}`}>
        <h1 className="text-[#A1AEB6] text-[14px]/[16px] uppercase font-normal">{title}</h1>
        <p className={`mt-[5px] text-[#FFFFFF] text-[14px] ${maxWidthClass} uppercase`}>{text}</p>
      </div>
    );
  }