import { ChevronLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrumb";
import { Pagination } from "../../../../components/Pagination";
import { machitStudent } from "../../../../mockData/data.statistika";
import { useState } from "react";
import { usersSvg } from "../../../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StudentMachit() {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const itemsPerPage = 3;

  // filter qilish
  const filteredStudents = machitStudent.filter((student) => {
    const studentDate = new Date(student.date.replace(/-/g, "/"));

    if (startDate && endDate) {
      return studentDate >= startDate && studentDate <= endDate;
    }
    if (startDate && !endDate) {
      return studentDate >= startDate;
    }
    if (!startDate && endDate) {
      return studentDate <= endDate;
    }
    return true; // agar tanlanmagan bo‘lsa hammasi chiqsin
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudentMachits = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <div className=" gap-4 bg-[#2E3741] p-4 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>

          {/* Filter va jami */}
          <div className="flex items-center gap-4">
            <div className="py-1.5 px-4 flex items-center justify-center gap-2 bg-[#37414C] rounded-[8px] text-[#AAC0D8]">
              jami {filteredStudents.length}
            </div>

            {/* Start date */}
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setCurrentPage(1);
              }}
              showTimeSelect
              dateFormat="yyyy.MM.dd - HH:mm"
              placeholderText="Boshlanish vaqti"
              className="bg-[#37414C] text-white px-3 py-2 rounded-lg cursor-pointer"
            />

            {/* End date */}
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                setCurrentPage(1);
              }}
              showTimeSelect
              dateFormat="yyyy.MM.dd - HH:mm"
              placeholderText="Tugash vaqti"
              className="bg-[#37414C] text-white px-3 py-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Pagination */}
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

      {/* Cardlar */}
      <div className="grid grid-cols-3 gap-4">
        {currentStudentMachits.map((student, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md  p-8 flex flex-col gap-4 bg-[#2E3741]"
          >
            <div className="flex items-center gap-7">
              <div className="w-[200px] h-[200px]">
                <img
                  src={student.img1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-[200px] h-[200px]">
                <img
                  src={student.img2}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1 py-3 flex items-center justify-center gap-2 bg-[#37414C]  rounded-[8px] text-[#AAC0D8]">
                <p className="text-[#4BE07E] text-[18px] ">{student.foiz}%</p>
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
                  {student.fullName}
                </h2>
              </span>
              <div className="grid grid-cols-2 items-center">
                <span>
                  <p className="text-[#8EA1B6] text-[16px] ">Fakultet</p>
                  <h2 className="text-[#C9C9C9] text-[20px] ">
                    {student.fakultet}
                  </h2>
                </span>
                <h2 className="text-[#C9C9C9] text-[20px] ">{student.grux}</h2>
              </div>

              <span>
                <p className="text-[#8EA1B6] text-[16px] ">Masjid nomi</p>
                <h2 className="text-[#C9C9C9] text-[20px] ">
                  {student.machitTitle}
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
                    {student.date}
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
