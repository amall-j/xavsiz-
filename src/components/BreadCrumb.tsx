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
  return (
    <div>
      <p className="text-[18px] text-[#AAC0D8] flex items-center gap-2">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <Link
              to={item?.link}
              className={`${
                index === items.length - 1
                  ? "text-white font-bold"
                  : "text-[#AAC0D8] hover:text-white"
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
