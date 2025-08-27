import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  title: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  if (!items || items.length === 0) return null; // ❌ Agar props bo'sh bo'lsa, umuman breadcrumb chiqmaydi

  return (
    <div>
      <p className="text-[18px] flex items-center gap-2">
        <span className="flex items-center gap-2">
          <Link to="/">
            <p className="text-[#AAC0D8] hover:text-white"> Dashboard</p>
          </Link>
          <ChevronRight className="text-white " size={25} />
        </span>

        {/* Propsdan kelgan itemlar */}
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <Link
              to={item.link}
              className={`${
                index === items.length - 1
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
            {index < items.length - 1 && (
              <ChevronRight className="text-white w-4 h-4" />
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Breadcrumb;
