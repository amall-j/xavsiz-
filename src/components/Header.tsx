import { useState, type ReactNode } from "react";
import {
  CalendarDays,
  Sun,
  Moon,
  SlidersHorizontal,
  FileInput,
} from "lucide-react";
import uzb from "../assets/uzb.svg";

type HeaderProps = {
  title: string;
  extra?: ReactNode;
};

export default function Header({ title, extra }: HeaderProps) {
  const [enabled, setEnabled] = useState(true);
  return (
    <header className="py-[20px] bg-[#2E3741] flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <h1 className="font-medium text-[24px]/[31.2px]">{title}</h1>
        {extra && <div className="ml-2">{extra}</div>}
        <h1 className="font-semibold text-[20px]/[24px]">
          Xavfsiz dargoh — Xavfsiz talaba
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-[15px] py-[13px] bg-[#37414C] rounded flex items-center gap-2">
          <CalendarDays width={15} height={15} className="text-[#FFFFFF]" />
          <button className="text-[16px]/[21px]">Dars jadvali</button>
        </div>

        <div className="bg-[#475360] p-[15px] py-[14px] rounded flex items-center gap-2 text-sm">
          <Sun width={16} height={16} className="text-[#FFC000]" />
          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-[20px] w-[40px] items-center rounded-full transition-colors ${
              enabled ? "bg-[#0095FF]" : "bg-gray-400"
            }`}
          >
            <span
              className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${
                enabled ? "translate-x-[20px]" : "translate-x-[2px]"
              }`}
            />
          </button>
          <Moon width={16} height={16} className="text-[#0095FF]" />
        </div>

        <div className="bg-[#475360] px-[15px] py-[11px] rounded flex items-center gap-2 text-sm ">
          <img src={uzb} alt="" />
          <select className="">
            <option>O'zbekcha</option>
            <option>Русский</option>
            <option>English</option>
          </select>
        </div>

        <div className="px-[15px] py-[13px] bg-[#475360] rounded flex items-center gap-2">
          <SlidersHorizontal
            width={15}
            height={15}
            className="text-[#AAC0D8]"
          />
          <button className="text-[16px]/[21px]">Filtr</button>
        </div>

        <div className="px-[15px] py-[13px] bg-[#0095FF] rounded flex items-center gap-2">
          <FileInput width={15} height={15} className="text-[#FFFFFF]" />
          <button className="text-[16px]/[21px]">Export</button>
        </div>
      </div>
    </header>
  );
}
