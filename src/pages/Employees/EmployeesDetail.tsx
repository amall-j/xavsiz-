import { useParams } from "react-router-dom";
import { StudentsData } from "../../mockData/data.studentTable";
import {
  ArrowLeft,
  FileQuestionMark,
  Printer,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  MapPin,
  Copy,
} from "lucide-react";
import StudentCard from "../../components/StudentCard";
import { TableIcon } from "../../assets";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

export default function XodimlarDetail() {
  const { id } = useParams<{ id: string }>();
  const student = StudentsData.find((s) => s.id === parseInt(id || "0"));
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1)
  const [activeStatus, setActiveStatus] = useState("ota-ona");

  if (!student) {
    return <div className="container text-white">Talaba topilmadi</div>;
  }

  const staticData = {
    birthDate: "03.01.1990",
    residence:
      "Buxarskaya oblast, Vabkentskiy rayon, Sariasiyskiy MSG, Yuqori Sariasiys, dom 95",
    gender: "AYOL",
    citizenship: "O'zbekiston Respublikasi",
    nationality: "O'zbek",
    passport: "AE 1485554",
    familyStatus: "Oilaviy holat: Turmush qurmagan",
    lifestyle: "Turmush tarzi: Oddiy",
    father: "Fayzullayev Zokir Temur o'g'li",
    fatherBirth: "03.11.1965",
    fatherAge: "60 yosh",
    mother: "Hayotullayeva Xamida Xamroyevna",
    motherBirth: "18.02.1966",
    motherAge: "59 yosh",
    position: "Lavozimi: Kotiba",
    workplace: "Korxona nomi: Buxoro viloyati, Vobkent tumani",
    workStart: "2023-08-01",
    registrationDate: "11.07.2008",
    district: "Viloyat: Buxoro viloyati",
    city: "Tuman: Vobkent tumani",
    educationType: "Bakalavr",
    educationYear: "2025",
    universityType: "Davlat",
    educationForm: "Kunduzgi",
    facultyName: "Iqtisodiyot",
    specialty: "Iqtisodiyot va menejment",
    group: "4124-21",
    course: "1-kurs",
    admissionDate: "2023-09-01",
    pin: "Shaxsiy PIN: 40301905290010",
    birthPlace: "Tug'ilgan joyi: Buxoro viloyati, Vobkent tumani",
    admissionNumber: "Admissions No: 2023-001",
    contractNumber: "Shartnoma raqami: 206-233",
    cadastr: "Kadastr raqami: 20:02:00:04:0260",
  };

  return (
    <div className="container text-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-4">
          <ArrowLeft size={15} />
          <h1 className="text-2xl font-bold">Talaba kartochkasi</h1>
        </div>
        <div className="bg-[#0095FF] text-white px-4 py-2 rounded flex items-center gap-2">
          <Printer />
          PDF chop etish
        </div>
      </div>

      <div className="bg-[#2E3741] flex items-center rounded-[16px] py-[20px] px-[16px] gap-[15px]">
        <img
          src={student.img}
          alt="Student Photo"
          className="w-[105px] h-40 rounded-lg mb-6 object-cover"
        />

        <div className="w-full flex flex-col gap-[11px]">
          <div className="flex items-stretch justify-between">
            <StudentCard title="F.I.SH" text={student.fullName} />
            <StudentCard title="Tug’Ilgan sanasi" text={staticData.birthDate} />
            <StudentCard title="Yashash manzili" text={staticData.residence} />
            <StudentCard title="Jinsi" text={staticData.gender} />
            <StudentCard title="Fuqaroligi" text={staticData.citizenship} />
          </div>

          <div className="flex items-stretch justify-between">
            <StudentCard title="Universitet nomi" text={student.universitet} />
            <StudentCard title="Fakultet" text={staticData.facultyName} />
            <StudentCard title="Gruppa" text={staticData.group} />
            <StudentCard title="jSHSHIR" text={student.jshshir} />
            <StudentCard
              title="Passport seriya va raqami"
              text={staticData.passport}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-between w-full mt-12">
        <div>
          <div className="flex flex-col rounded-lg">
            <div className="bg-[#77899C] px-2 py-2 rounded-t-lg flex items-center gap-2">
              <div className="bg-[#192129] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                <Users size={30} className="text-[#E8F7FD]" />
              </div>
              <h2 className="text-[#FFFFFF] text-[18px] uppercase font-semibold">
                Oilaviy holati
              </h2>
            </div>
            <div className="bg-[#2E3741] px-3 py-2 rounded-b-lg flex flex-col  gap-2">
              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => setActiveStatus("ota-ona")}
                  className={`px-4 py-1 rounded-lg text-white ${
                    activeStatus === "ota-ona" ? "bg-[#0095FF]" : "bg-[#475360]"
                  }`}
                >
                  Ota-ona
                </button>
                <button
                  onClick={() => setActiveStatus("turmush-quruvchi")}
                  className={`px-4 py-1 rounded-lg text-white ${
                    activeStatus === "turmush-quruvchi"
                      ? "bg-[#0095FF]"
                      : "bg-[#475360]"
                  }`}
                >
                  Turmush quruvchi
                </button>
              </div>
              <div className=" py-2 rounded-lg flex items-center gap-3">
                <div className="bg-[#192129] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                  <Users size={20} className="text-[#E8F7FD]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Ota</p>
                  <p className="text-lg font-semibold">
                    Fayzullayev Zokir Temur o'g'li
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">
                      Tug'ilgan sana:{" "}
                      <p className="text-[#0095FF]">09.11.1965</p>
                    </p>
                    <div className="text-sm w-[84px] h-[28px] bg-[#37414C] flex items-center justify-center rounded-sm">
                      69 yosh
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-2 rounded-lg flex items-center gap-3">
                <div className="bg-[#192129] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                  <Users size={20} className="text-[#E8F7FD]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Ona</p>
                  <p className="text-lg font-semibold">
                    Hayotullayeva Xamida Xamroyevna
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">
                      Tug'ilgan sana:{" "}
                      <p className="text-[#0095FF]">18.02.1966</p>
                    </p>
                    <div className="text-sm w-[84px] h-[28px] bg-[#37414C] flex items-center justify-center rounded-sm">
                      59 yosh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg mt-4">
            <div className="bg-[#77899C] px-2 py-2 rounded-t-lg flex items-center gap-2">
              <div className="bg-[#192129] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                <MapPin size={30} className="text-[#E8F7FD]" />
              </div>
              <h2 className="text-[#FFFFFF] max-w-[200px] text-[18px] uppercase font-semibold">
                manzil bo’yicha doimiy yashash joyi
              </h2>
            </div>
            <div className="bg-[#2E3741] px-3 py-2 rounded-b-lg flex flex-col  gap-2">
              <div className="grid grid-cols-2 gap-[3px]">
                <StudentCard sm={true} title="Mamlakat" text="ЎЗБЕКИСТОН" />
                <StudentCard
                  sm={true}
                  title="registratsiya sanasi"
                  text="11.07.2008"
                />
                <StudentCard sm={true} title="Viloyat" text="БУХОРО ВИЛОЯТИ" />
                <StudentCard sm={true} title="Tuman" text="ВОБКЕНТ ТУМАНИ" />
              </div>

              <StudentCard
                w={true}
                title="manzil"
                text="Бухарская область, Вабкентский район, Сариасия МСГ, Юқори Сариосиё, дом 95"
              />

              <div className="bg-[#37414C] p-[10px] rounded-[8px] flex gap-[8px] flex-wrap">
                <div className="bg-[#0095FF] rounded-[4px] p-2 text-sm ">
                  Kadastr raqami
                </div>
                <div className="bg-[#0095FF] rounded-[4px] p-2 text-sm">
                  20:02:08:04:04:0260
                </div>
                <div className="w-[40px] h-[36px] bg-[#0095FF4D] rounded-[4px] flex items-center justify-center">
                  <Copy size={20} className="text-[#FFFFFF]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg ">
          <div className="bg-[#77899C] px-3 py-2 rounded-t-lg flex items-center gap-2">
            <GraduationCap
              size={32}
              className="text-[#E8F7FD] bg-[#192129] w-[40px] h-[40px] rounded-[50%]"
            />
            <h2 className="text-[#FFFFFF] text-[18px] uppercase font-semibold">
              Ta’lim olayotgan (oliygoh)
            </h2>
          </div>

          <div className="bg-[#2E3741] px-3 py-2 rounded-b-lg flex flex-col  gap-2">
            <div className="grid grid-cols-2 gap-[4px] items-stretch">
              <StudentCard
                sm={true}
                title="Ta'lim turi"
                text={staticData.educationType}
              />
              <StudentCard
                sm={true}
                title="Ta'lim yili"
                text={staticData.educationYear}
              />
              <StudentCard
                sm={true}
                title="Universitet nomi"
                text={student.universitet}
              />
              <StudentCard
                sm={true}
                title="Universitet turi"
                text={staticData.universityType}
              />
            </div>
            <StudentCard
              w={true}
              text={staticData.universityType}
              title="Universitetning mulk turi"
            />
            <div className="grid grid-cols-2 gap-[4px] items-stretch">
              <StudentCard sm={true} title="Ta'lim tili" text={staticData.nationality} />
              <StudentCard sm={true} title="Ta'lim shakli" text="Sirtqi" />
              <StudentCard sm={true} title="Fakultet nomi" text={student.fakultet} />
              <StudentCard sm={true} title="Mutaxassislik" text={student.fakultet} />
              <StudentCard sm={true} title="Guruh nomi" text="4is24" />
              <StudentCard sm={true} title="Kurs" text="1-kurs" />
              <StudentCard sm={true} title="To'lov turi" text="To'lov-shartnoma" />
              <StudentCard sm={true} title="Holati" text="O'qimoqda" />
            </div>
            <Pagination
              currentPage={currentPage2}
              totalPages={2}
              onPageChange={setCurrentPage2}
            />
          </div>
        </div>

        <div className="flex flex-col rounded-lg ">
          <div className="bg-[#77899C] px-2 py-2 rounded-t-lg flex items-center gap-2">
            <div className="bg-[#192129] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
              <BriefcaseBusiness size={30} className="text-[#E8F7FD]" />
            </div>
            <h2 className="text-[#FFFFFF] text-[18px] uppercase font-semibold">
              Mehnat faoliyati
            </h2>
          </div>

          <div className="bg-[#2E3741] px-2 py-2 rounded-b-lg flex flex-col  gap-2">
            <div className="grid grid-cols-2 gap-[2px] items-stretch">
              <StudentCard
                sm={true}
                title="Lavozimi"
                text={"Котиба-машинкачи"}
              />
              <StudentCard sm={true} title="Korxona INN" text={"206902892"} />
              <StudentCard sm={true} title="Buyruq raqami" text={"206-2-33"} />
              <StudentCard
                sm={true}
                title="Buyruq sanasi"
                text={"2023-11-15"}
              />
            </div>
            <StudentCard
              w={true}
              text={"Buxoro viloyati, Vobkent tumani, ROZMOZ"}
              title="Ish joyining manzili"
            />

            <StudentCard
              w={true}
              text={
                "VOBKENT TUMAN XALQ TA'LIMI MUASSASALARI FAOLIYATINI METODIK TA'MINLASH VA TASHKIL ETISH BO'LIMIGA QARASHLI 17-SON UMUMTA'LI MAKTABI"
              }
              title="Korxona nomi"
            />
            <div className="grid grid-cols-2 gap-[4px] items-stretch">
              <StudentCard
                sm={true}
                title="Shartnoma sanasi"
                text={"2023-11-15"}
              />
              <StudentCard sm={true} title="Shartnoma raqami" text="206-2-33" />
              <StudentCard
                sm={true}
                title="Bo'lim nomi"
                text={"Xo'jalik ishlari"}
              />
              <StudentCard
                sm={true}
                title="Shaxs PIN"
                text={"40301905290010"}
              />
              <StudentCard
                sm={true}
                title="Boshlangan sana"
                text="2023-11-15"
              />
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex bg-[#2E3741] w-1/4 mb-4 rounded-lg">
          <button className="bg-[#2E3741] text-white px-4 py-2 rounded  hover:bg-gray-700 transition">
            Hodisalar
          </button>
          <button className="bg-[#2E3741] text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            Ogohlantirishlar
          </button>
          <button className="bg-[#2E3741] text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            Qoidabuzarliklar
          </button>
        </div>
        <div className="pb-6 flex flex-col rounded-lg text-center w-full">
          <div className="bg-[#344363] text-[#CACACA] flex items-center justify-between py-4 px-12 rounded-t-lg">
            <div className="flex items-center gap-1">
              <img src={TableIcon} alt="" />
              <p>№</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={TableIcon} alt="" />
              <p>Vaqt</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={TableIcon} alt="" />
              <p>Joyi</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={TableIcon} alt="" />
              <p>Holati</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={TableIcon} alt="" />
              <p>Amallar</p>
            </div>
          </div>
          <div className="bg-[#192129] flex items-center justify-center py-[50px] rounded-b-lg">
            <div className="flex flex-col items-center justify-center gap-4">
              <FileQuestionMark className="text-[#E6E6E6]" size={80} />
              <h1 className="text-[#CACACA] text-[24px] font-medium">
                Ma`lumot topilmadi
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
