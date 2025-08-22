import type { ReactNode } from "react";
import { Bell, User } from "lucide-react";

type HeaderProps = {
  title: string;
  extra?: ReactNode;
};

export default function Header({ title, extra }: HeaderProps) {
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
        <button className="px-3 py-1 bg-gray-700 rounded text-sm">
          Dars jadvali
        </button>

        <div className="flex items-center bg-gray-700 rounded px-2">
          <span className="text-yellow-400">☀️</span>
          <input type="checkbox" className="mx-1" />
          <span className="text-blue-400">🌙</span>
        </div>

        <select className="bg-gray-700 px-2 py-1 rounded text-sm">
          <option>O'zbekcha</option>
          <option>Русский</option>
          <option>English</option>
        </select>

        <button className="px-3 py-1 bg-gray-700 rounded text-sm">Filtr</button>

        <button className="px-3 py-1 bg-blue-600 rounded text-sm">
          Export
        </button>
      </div>
    </header>
  );
}
