import { useState } from "react";
import {
  DetIcon1,
  faceMood1,
  faceMood2,
  iconMood1,
  MoodLoading,
} from "../../../../assets";
import Breadcrumb from "../../../../components/BreadCrumb";
import StudentsCard from "../../../../components/card/StudentsCard";
import { Pagination } from "../../../../components/Pagination";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
export const students = [
  {
    id: 1,
    img1: faceMood1,
    img2: faceMood2,
    icon: iconMood1,
    similarity: "82.45%",
    fullName: "Aliyev Jasur Bekzod o‘g‘li",
    fakultet: "Informatika",
    jins: "Erkak",
    date: "2025-01-12 14:23:00",
    gruh: "INF-21",
    age: 21,
  },
  {
    id: 2,
    img1: "/images/student2.jpg",
    img2: "/images/student2-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "76.12%",
    fullName: "Karimova Dilnoza Anvar qizi",
    fakultet: "Matematika",
    jins: "Ayol",
    date: "2025-01-13 09:45:00",
    gruh: "MAT-22",
    age: 20,
  },
  {
    id: 3,
    img1: "/images/student3.jpg",
    img2: "/images/student3-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "90.11%",
    fullName: "Saidov Ulug‘bek Jamshid o‘g‘li",
    fakultet: "Fizika",
    jins: "Erkak",
    date: "2025-01-14 11:10:00",
    gruh: "FIZ-20",
    age: 22,
  },
  {
    id: 4,
    img1: "/images/student4.jpg",
    img2: "/images/student4-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "68.22%",
    fullName: "Toshpulatova Aziza Rustam qizi",
    fakultet: "Kimyo",
    jins: "Ayol",
    date: "2025-01-15 13:32:00",
    gruh: "KIM-21",
    age: 21,
  },
  {
    id: 5,
    img1: "/images/student5.jpg",
    img2: "/images/student5-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "71.08%",
    fullName: "Ismoilov Sanjar Odil o‘g‘li",
    fakultet: "Biologiya",
    jins: "Erkak",
    date: "2025-01-16 10:11:00",
    gruh: "BIO-19",
    age: 23,
  },
  {
    id: 6,
    img1: "/images/student6.jpg",
    img2: "/images/student6-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "84.50%",
    fullName: "Raxmonova Shahlo Botir qizi",
    fakultet: "Tarix",
    jins: "Ayol",
    date: "2025-01-17 08:54:00",
    gruh: "TAR-20",
    age: 22,
  },
  {
    id: 7,
    img1: "/images/student7.jpg",
    img2: "/images/student7-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "65.90%",
    fullName: "Yoqubov Azizbek Rustam o‘g‘li",
    fakultet: "Huquq",
    jins: "Erkak",
    date: "2025-01-18 15:45:00",
    gruh: "HUQ-21",
    age: 21,
  },
  {
    id: 8,
    img1: "/images/student8.jpg",
    img2: "/images/student8-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "79.34%",
    fullName: "Hamidova Madina Bahodir qizi",
    fakultet: "Filologiya",
    jins: "Ayol",
    date: "2025-01-19 17:05:00",
    gruh: "FIL-22",
    age: 20,
  },
  {
    id: 9,
    img1: "/images/student9.jpg",
    img2: "/images/student9-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "88.10%",
    fullName: "Rustamov Nodirbek Murod o‘g‘li",
    fakultet: "Arxitektura",
    jins: "Erkak",
    date: "2025-01-20 12:41:00",
    gruh: "ARX-19",
    age: 23,
  },
  {
    id: 10,
    img1: "/images/student10.jpg",
    img2: "/images/student10-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "74.56%",
    fullName: "To‘xtayeva Zilola Akmal qizi",
    fakultet: "Psixologiya",
    jins: "Ayol",
    date: "2025-01-21 09:30:00",
    gruh: "PSI-21",
    age: 21,
  },
  {
    id: 11,
    img1: "/images/student11.jpg",
    img2: "/images/student11-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "92.00%",
    fullName: "Qodirov Islombek Sherzod o‘g‘li",
    fakultet: "Jurnalistika",
    jins: "Erkak",
    date: "2025-01-22 18:20:00",
    gruh: "JUR-20",
    age: 22,
  },
  {
    id: 12,
    img1: "/images/student12.jpg",
    img2: "/images/student12-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "81.77%",
    fullName: "Xolmatova Maftuna Orif qizi",
    fakultet: "Xorijiy tillar",
    jins: "Ayol",
    date: "2025-01-23 16:05:00",
    gruh: "XOR-22",
    age: 20,
  },
  {
    id: 13,
    img1: "/images/student13.jpg",
    img2: "/images/student13-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "67.20%",
    fullName: "Abdurahmonov Diyor Shavkat o‘g‘li",
    fakultet: "Iqtisodiyot",
    jins: "Erkak",
    date: "2025-01-24 11:55:00",
    gruh: "IQT-21",
    age: 21,
  },
  {
    id: 14,
    img1: "/images/student14.jpg",
    img2: "/images/student14-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "73.33%",
    fullName: "Ortikova Sevara Anvar qizi",
    fakultet: "Geografiya",
    jins: "Ayol",
    date: "2025-01-25 10:40:00",
    gruh: "GEO-20",
    age: 22,
  },
  {
    id: 15,
    img1: "/images/student15.jpg",
    img2: "/images/student15-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "86.15%",
    fullName: "Sharipov Doston Rauf o‘g‘li",
    fakultet: "Sport",
    jins: "Erkak",
    date: "2025-01-26 14:29:00",
    gruh: "SPT-19",
    age: 23,
  },
  {
    id: 16,
    img1: "/images/student16.jpg",
    img2: "/images/student16-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "80.44%",
    fullName: "Yuldasheva Malika Farrux qizi",
    fakultet: "San’atshunoslik",
    jins: "Ayol",
    date: "2025-01-27 13:18:00",
    gruh: "SAN-21",
    age: 21,
  },
  {
    id: 1,
    img1: faceMood1,
    img2: faceMood2,
    icon: iconMood1,
    similarity: "82.45%",
    fullName: "Aliyev Jasur Bekzod o‘g‘li",
    fakultet: "Informatika",
    jins: "Erkak",
    date: "2025-01-12 14:23:00",
    gruh: "INF-21",
    age: 21,
  },
  {
    id: 2,
    img1: "/images/student2.jpg",
    img2: "/images/student2-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "76.12%",
    fullName: "Karimova Dilnoza Anvar qizi",
    fakultet: "Matematika",
    jins: "Ayol",
    date: "2025-01-13 09:45:00",
    gruh: "MAT-22",
    age: 20,
  },
  {
    id: 3,
    img1: "/images/student3.jpg",
    img2: "/images/student3-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "90.11%",
    fullName: "Saidov Ulug‘bek Jamshid o‘g‘li",
    fakultet: "Fizika",
    jins: "Erkak",
    date: "2025-01-14 11:10:00",
    gruh: "FIZ-20",
    age: 22,
  },
  {
    id: 4,
    img1: "/images/student4.jpg",
    img2: "/images/student4-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "68.22%",
    fullName: "Toshpulatova Aziza Rustam qizi",
    fakultet: "Kimyo",
    jins: "Ayol",
    date: "2025-01-15 13:32:00",
    gruh: "KIM-21",
    age: 21,
  },
  {
    id: 5,
    img1: "/images/student5.jpg",
    img2: "/images/student5-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "71.08%",
    fullName: "Ismoilov Sanjar Odil o‘g‘li",
    fakultet: "Biologiya",
    jins: "Erkak",
    date: "2025-01-16 10:11:00",
    gruh: "BIO-19",
    age: 23,
  },
  {
    id: 6,
    img1: "/images/student6.jpg",
    img2: "/images/student6-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "84.50%",
    fullName: "Raxmonova Shahlo Botir qizi",
    fakultet: "Tarix",
    jins: "Ayol",
    date: "2025-01-17 08:54:00",
    gruh: "TAR-20",
    age: 22,
  },
  {
    id: 7,
    img1: "/images/student7.jpg",
    img2: "/images/student7-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "65.90%",
    fullName: "Yoqubov Azizbek Rustam o‘g‘li",
    fakultet: "Huquq",
    jins: "Erkak",
    date: "2025-01-18 15:45:00",
    gruh: "HUQ-21",
    age: 21,
  },
  {
    id: 8,
    img1: "/images/student8.jpg",
    img2: "/images/student8-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "79.34%",
    fullName: "Hamidova Madina Bahodir qizi",
    fakultet: "Filologiya",
    jins: "Ayol",
    date: "2025-01-19 17:05:00",
    gruh: "FIL-22",
    age: 20,
  },
  {
    id: 9,
    img1: "/images/student9.jpg",
    img2: "/images/student9-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "88.10%",
    fullName: "Rustamov Nodirbek Murod o‘g‘li",
    fakultet: "Arxitektura",
    jins: "Erkak",
    date: "2025-01-20 12:41:00",
    gruh: "ARX-19",
    age: 23,
  },
  {
    id: 10,
    img1: "/images/student10.jpg",
    img2: "/images/student10-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "74.56%",
    fullName: "To‘xtayeva Zilola Akmal qizi",
    fakultet: "Psixologiya",
    jins: "Ayol",
    date: "2025-01-21 09:30:00",
    gruh: "PSI-21",
    age: 21,
  },
  {
    id: 11,
    img1: "/images/student11.jpg",
    img2: "/images/student11-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "92.00%",
    fullName: "Qodirov Islombek Sherzod o‘g‘li",
    fakultet: "Jurnalistika",
    jins: "Erkak",
    date: "2025-01-22 18:20:00",
    gruh: "JUR-20",
    age: 22,
  },
  {
    id: 12,
    img1: "/images/student12.jpg",
    img2: "/images/student12-mood.jpg",
    icon: "/icons/faculty2.png",
    similarity: "81.77%",
    fullName: "Xolmatova Maftuna Orif qizi",
    fakultet: "Xorijiy tillar",
    jins: "Ayol",
    date: "2025-01-23 16:05:00",
    gruh: "XOR-22",
    age: 20,
  },
  {
    id: 13,
    img1: "/images/student13.jpg",
    img2: "/images/student13-mood.jpg",
    icon: "/icons/faculty3.png",
    similarity: "67.20%",
    fullName: "Abdurahmonov Diyor Shavkat o‘g‘li",
    fakultet: "Iqtisodiyot",
    jins: "Erkak",
    date: "2025-01-24 11:55:00",
    gruh: "IQT-21",
    age: 21,
  },
  {
    id: 14,
    img1: "/images/student14.jpg",
    img2: "/images/student14-mood.jpg",
    icon: "/icons/faculty4.png",
    similarity: "73.33%",
    fullName: "Ortikova Sevara Anvar qizi",
    fakultet: "Geografiya",
    jins: "Ayol",
    date: "2025-01-25 10:40:00",
    gruh: "GEO-20",
    age: 22,
  },
  {
    id: 15,
    img1: "/images/student15.jpg",
    img2: "/images/student15-mood.jpg",
    icon: "/icons/faculty5.png",
    similarity: "86.15%",
    fullName: "Sharipov Doston Rauf o‘g‘li",
    fakultet: "Sport",
    jins: "Erkak",
    date: "2025-01-26 14:29:00",
    gruh: "SPT-19",
    age: 23,
  },
  {
    id: 16,
    img1: "/images/student16.jpg",
    img2: "/images/student16-mood.jpg",
    icon: "/icons/faculty1.png",
    similarity: "80.44%",
    fullName: "Yuldasheva Malika Farrux qizi",
    fakultet: "San’atshunoslik",
    jins: "Ayol",
    date: "2025-01-27 13:18:00",
    gruh: "SAN-21",
    age: 21,
  },
];

export default function UniversityDetailStat() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(students.length / itemsPerPage);

  // slice qilish
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = students.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="flex items-center gap-4 bg-[#2E3741] p-4 rounded-lg">
        <span className="bg-[#37414C] p-2 rounded-full">
          <Link to={"/"}>
            <ChevronLeft />
          </Link>
        </span>
        <div>
          <Breadcrumb
            items={[
              { title: "Dashboard", link: "/" },
              { title: "Talabaning kayfiyati", link: "" },
            ]}
          />
          <h1 className="text-[25px] font-bold text-white">
            Talabalar hozirgi kayfiyati bo‘yicha maulmotlar
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-6 gap-4">
        <div
          className={`rounded-2xl shadow-md  p-5 px-10 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
        >
          <img
            src={DetIcon1}
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
          <img
            src={DetIcon1}
            className="col-span-1 w-15 h-20 object-contain mb-3"
          />
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
            src={DetIcon1}
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
            src={DetIcon1}
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
      {!students ? (
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
