import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrumb";
import StudentTablePage from "../../../../components/StudentLeaveTablePage";

export default function StudentLeave() {
  return (
    <div>
      <div className="flex items-center  gap-6 bg-[#2E3741] p-4 rounded-lg">
        <span className="bg-[#37414C] p-2 rounded-full flex items-center justify-center">
          <Link to={"/"}>
            <ChevronLeft />
          </Link>
        </span>
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
// id,rasm,kelmagan kun, fullName, talaba kartochkasi, darsjadvali, profilaktika, jshshir. univer nomi,fakultet, grux, yashash manzili, hodisalar, ogohlantirihslar
