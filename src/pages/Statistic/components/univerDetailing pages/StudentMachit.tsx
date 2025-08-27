import { ChevronLeft, Eye, User } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrumb";
import { Pagination } from "../../../../components/Pagination";
import { machitStudent } from "../../../../mockData/data.statistika";
import { useState } from "react";
import { faceMood1, faceMood2, usersSvg } from "../../../../assets";

export default function StudentMachit() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(machitStudent.length / itemsPerPage);

  // slice qilish
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudentMachits = machitStudent.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      {" "}
      <div className="flex items-center gap-4 bg-[#2E3741] p-4 rounded-lg">
        {/*  */}
        <div className="flex items-center justify-center">
          <span className="bg-[#37414C] p-2 rounded-full flex items-center justify-center">
            <Link to={"/"}>
              <ChevronLeft />
            </Link>
          </span>
          <div>
            <Breadcrumb
              items={[{ title: "Masjidda aniqlangan talabalar", link: "" }]}
            />
            <h1 className="text-[25px] font-bold text-white">
              Dars vaqtida masjidga chiqqan talabalar
            </h1>
          </div>
          {/*  */}
        </div>
        <p></p>
      </div>
      <div className=" flex items-center my-4">
        <div className="text-[25px] ">Talablar</div>
        <div className=" ml-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {currentStudentMachits.map(() => (
          <div
            className={`rounded-2xl shadow-md  p-8 flex flex-col gap-4    bg-[#2E3741] `}
          >
            <div className="flex items-center gap-7     ">
              <div className="w-[200px] h-[200px]">
                <img
                  src={faceMood1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-[200px] h-[200px]">
                <img
                  src={faceMood1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1 py-3 flex items-center justify-center gap-2 bg-[#37414C]  rounded-[8px] text-[#AAC0D8]">
                <p className="text-[#4BE07E] text-[18px] ">86.16%</p>
              </div>
              <div className=" col-span-3 py-3 flex items-center justify-center gap-2 bg-[#37414C] hover:scale-102 cursor-pointer transition rounded-[8px] text-[#AAC0D8]">
                <span className=" text flex items-center justify-center w-max rounded-full text-[#37414C]">
                  <img src={usersSvg} className="w-6 h-6" alt="" />
                </span>
                Talaba kartochkasi
              </div>
            </div>

            <div>
              <span>
                <p className="text-[#8EA1B6] text-[16px] ">F.I.SH</p>
                <h2 className="text-[#C9C9C9] text-[20px] ">
                  YOQUBJONOV OZODBEK MIRZAJON O‘G‘LI
                </h2>
              </span>
              <div className="grid grid-cols-2 items-center">
                <span>
                  <p className="text-[#8EA1B6] text-[16px] ">F.I.SH</p>
                  <h2 className="text-[#C9C9C9] text-[20px] ">
                    YOQUBJONOV OZODBEK MIRZAJON O‘G‘LI
                  </h2>
                </span>
                <h2 className="text-[#C9C9C9] text-[20px] ">ITS23/21 </h2>
              </div>

              <span>
                <p className="text-[#8EA1B6] text-[16px] ">Masjid nomi</p>
                <h2 className="text-[#C9C9C9] text-[20px] ">
                  Исломобод масжиди Сағбон кўчаси 244-уй, Face
                </h2>
              </span>
              <div className="mt-4 flex justify-between">
                <div className=" py-3 px-4 flex items-center justify-center gap-2 bg-[#37414C] cursor-pointer hover:scale-103  rounded-[8px] text-[#AAC0D8] w-max">
                  <p className="text-white text-[18px] flex items-center gap-2 ">
                    <Eye size={20} className="text-[#8D96B2]" /> Ko`rish
                  </p>
                </div>
                <div className=" py-3 px-4 flex items-center justify-center gap-2 bg-[#37414C]  rounded-[8px] text-[#AAC0D8] w-max">
                  <p className="text-[#C9C9C9] text-[18px] flex items-center gap-2 ">
                    2025.05.02 - 12:26:08
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
