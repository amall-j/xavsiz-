import { ChevronLeft } from "lucide-react";
import {  useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrumb";
import StudentTablePage from "../../../../components/StudentLeaveTablePage";

export default function StudentLeave() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center  gap-6 bg-[#2E3741] p-4 rounded-lg">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#37414C] p-2 rounded-full flex items-center justify-center"
        >
          <ChevronLeft />
        </button>
        <div>
          <Breadcrumb
            items={[
              {
                title: "Hodisalar",
                link: "",
              },
            ]}
          />
          <h1 className="text-[25px] font-bold text-white">
            Dars 5 va undan ortiq kun kelmagan talabalar
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <StudentTablePage />
      </div>
    </div>
  );
}
