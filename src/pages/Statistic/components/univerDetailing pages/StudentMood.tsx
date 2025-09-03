import { useState } from "react";
import {
  Agresive,

  MoodLoading,
  Neytral,
  Xafa,
  Xursand,
} from "../../../../assets";
import Breadcrumb from "../../../../components/BreadCrumb";
import StudentsCard from "../../../../components/card/StudentsCard";
import { Pagination } from "../../../../components/Pagination";
import { ChevronLeft } from "lucide-react";

import { studentsMood } from "../../../../mockData/data.statistika";

import { useNavigate } from "react-router-dom";
export default function UniversityDetailStat() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(studentsMood.length / itemsPerPage);

  // slice qilish
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = studentsMood.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div>
      <div className="flex items-center gap-4 bg-[#2E3741] p-4 rounded-lg">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#37414C] p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <div>
          <Breadcrumb items={[{ title: "Talabaning kayfiyati", link: "" }]} />
          <h1 className="text-[25px] font-bold text-white">
            Talabalar hozirgi kayfiyati bo‘yicha maulmotlar
          </h1>
        </div>
      </div>
      {/*statik  */}
      <div className="grid grid-cols-4 mt-6 gap-4">
        <div
          className={`rounded-2xl shadow-md  p-5 px-10 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
        >
          <img
            src={Neytral}
            className="col-span-1 w-15 h-20 object-contain mb-3"
          />
          <div className="flex items-center  flex-col">
            <h3 className="col-span-2 text-[20px] text-white font-medium mb-2">
              Neytral
            </h3>
            <p className={`text-[35px] font-medium mt-6 -translate-y-4 `}>
              200
            </p>
          </div>
        </div>
        <div
          className={`rounded-2xl shadow-md  p-5 px-10 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
        >
          <div className="w-15 h-20 flex items-center justify-center  ">
            <img
              src={Xursand}
              className="col-span-1  object-contain mb-3 shadow-amber-300 shadow-2xl w-full h-max rounded-full"
            />
          </div>
          <div className="flex items-center  flex-col">
            <h3 className="col-span-2 text-[20px] text-white font-medium mb-2">
              Hursand
            </h3>
            <p className={`text-[35px] font-medium mt-6 -translate-y-4 `}>
              200
            </p>
          </div>
        </div>
        <div
          className={`rounded-2xl shadow-md  p-5 px-10 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
        >
          <img
            src={Xafa}
            className="col-span-1 w-15 h-20 object-contain mb-3"
          />
          <div className="flex items-center  flex-col">
            <h3 className="col-span-2 text-[20px] text-white font-medium mb-2">
              Hafa
            </h3>
            <p className={`text-[35px] font-medium mt-6 -translate-y-4 `}>
              200
            </p>
          </div>
        </div>
        <div
          className={`rounded-2xl shadow-md  p-5 px-10 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
        >
          <img
            src={Agresive}
            className="col-span-1 w-15 h-20 object-contain mb-3"
          />
          <div className="flex items-center  flex-col">
            <h3 className="col-span-2 text-[20px] text-white font-medium mb-2">
              Agressive
            </h3>
            <p className={`text-[35px] font-medium mt-6 -translate-y-4 `}>
              200
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-[25px] mt-4">Talablar</div>
        <div className="mt-6 ml-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      {!studentsMood ? (
        <div className="flex items-center flex-col gap-5 justify-center mt-25 ">
          <div>
            <img src={MoodLoading} alt="" className="w-[150px] h-[150px]" />
          </div>
          <p className="text-[24px] font-medium text-center text-[#C9C9C9]">
            Iltimos kutib turing, ma`lumotlar <br /> yuklanmoqda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {currentStudents.map((student) => (
            <StudentsCard
              key={student.id}
              img1={student.img1}
              img2={student.img2}
              icon={student.icon}
              similarity="70.31%"
              fullName={student.fullName}
              fakultet={student.fakultet}
              jins={student.jins}
              date={student.date}
              gruh={student.gruh}
              age={student.age}
            />
          ))}
        </div>
      )}
    </div>
  );
}
