import { Link, useLocation } from "react-router-dom";
import student from "../assets/student.svg";

import {
  AudioLines,
  ChartNoAxesColumn,
  GraduationCap,
  Users,
  Laptop2,
  ClipboardList,
} from "lucide-react";

const menu = [
  { path: "/", icon: AudioLines, label: "Statistika" },
  { path: "/kpi", icon: ChartNoAxesColumn, label: "KPI Baholash" },
  { path: "/students", icon: GraduationCap, label: "Talabalar" },
  { path: "/employees", icon: Users, label: "Hodimlar" },
  { path: "/accidents", icon: Laptop2, label: "Hodisalar" },
  { path: "/reports", icon: ClipboardList, label: "Hisobotlar" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 w-[90px] bg-[#2E3741] flex flex-col justify-between items-center py-4 border-r border-[#2A323B] h-screen">
      <div className="w-[50px] h-[50px] bg-[#37414C] rounded-full flex items-center justify-center text-white font-bold mb-4">
        <img src={student} alt="" />
      </div>

      <nav className="flex flex-col gap-6 flex-1 mt-6">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-center w-[50px] h-[50px] rounded-md transition-colors ${
                isActive ? "bg-[#1F242F]" : "hover:bg-gray-700"
              }`}
            >
              <Icon
                size={22}
                className={isActive ? "text-[#0E69D3]" : "text-[#77899C]"}
              />
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-1 border-t border-[#2A323B]">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded"
        />
        <span className="text-xs text-gray-300 max-w-[80px] line-clamp-2">
          umid101
        </span>
      </div>
    </aside>
  );
}
