import { ArrowUpRight, CalendarClock, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CustomSelect from "../../components/CustumSelect";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { SlidersHorizontal } from "lucide-react";
import { StudentsData } from "../../mockData/data.studentTable";
import ProfilaktikaModal from "../../modal/ProfilaktikaModal";
import StudentModal from "../../modal/StudentModal";
import { CustomTable } from "../../components/Table";

interface Student {
  id: number;
  img: string;
  fullName: string;
  talabaKartochka: string;
  darsJadvali: string;
  profilaktika: string;
  jshshir: string;
  universitet: string;
  fakultet: string;
  grux: string;
  yashashManzil: string;
  hodisalar: string;
  ogohlantirishlar: string;
  qoidabuzarliklar: string;
}

interface Column {
  key: string;
  title: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export default function Xodimlar() {
  const [student, setStudent] = useState("");
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showProfilaktika, setShowProfilaktika] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Student | null>(null);
  const data: Student[] = StudentsData;
  const navigate = useNavigate();

  const columns: Column[] = [
    { key: "id", title: "№", align: "center" },
    {
      key: "img",
      title: "Rasm",
      align: "center",
      render: (value: string) => (
        <img src={value} alt="avatar" className="w-12 h-12 rounded-lg mx-auto" />
      ),
    },
    { key: "fullName", title: "F.I.SH", align: "center" },
    {
      key: "talabaKartochka",
      title: "Xodim kartochkasi",
      align: "center",
      render: (value: string) => (
        <Link to={""}>
          <p className="bg-[#37414C] text-white py-1.5 mx-auto w-max px-3 text-center rounded-[8px] justify-center gap-2 flex items-center">
            <span className="rounded-full">
              <img src="/path/to/usersSvg" alt="" />
            </span>
            {value}
          </p>
        </Link>
      ),
    },
    {
      key: "darsJadvali",
      title: "Dars jadvali",
      align: "center",
      render: (value: string) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          className="bg-[#37414C] text-white py-1.5 mx-auto w-max px-3 text-center rounded-[8px] justify-center gap-2 flex items-center"
        >
          <CalendarClock size={18} className="text-[#AAC0D8] font-bold" />
          {value}
        </button>
      ),
    },
    {
      key: "profilaktika",
      title: "Profilaktika",
      align: "center",
      render: (value: string, row: Student) => (
        <p
          onClick={(e) => {
            e.stopPropagation();
            setSelectedRow(row);
            setShowProfilaktika(true);
          }}
          className="bg-[#37414C] text-white py-1.5 mx-auto px-3 text-center rounded-[8px] justify-center gap-1 flex items-center"
        >
          {value}
          <ArrowUpRight size={18} className="text-[#AAC0D8] font-bold" />
        </p>
      ),
    },
    { key: "jshshir", title: "JSHSHIR", align: "center" },
    { key: "universitet", title: "Universitet nomi", align: "center" },
    { key: "fakultet", title: "Fakultet", align: "center" },
    { key: "grux", title: "Guruh", align: "center" },
    { key: "yashashManzil", title: "Yashash manzili", align: "center" },
    {
      key: "hodisalar",
      title: "Hodisalar",
      align: "center",
      render: (value: string, row: any) => (
        <Link to={`/hodisalar/${row.id}`}>
          <p className="text-[#0095FF] underline bg-[#228BE626]/15 px-[12px] flex items-start justify-center text-[16px]">
            {value}
            <ArrowUpRight size={18} />
          </p>
        </Link>
      ),
    },
    {
      key: "ogohlantirishlar",
      title: "Ogohlantirishlar",
      align: "center",
      render: (value: string, row: any) => (
        <Link to={`/ogohlantirishlar/${row.id}`}>
          <p className="text-[#0095FF] underline bg-[#228BE626]/15 px-[12px] flex items-start justify-center text-[16px]">
            {value}
            <ArrowUpRight size={18} />
          </p>
        </Link>
      ),
    },
    {
      key: "qoidabuzarliklar",
      title: "Qoidabuzarliklar",
      align: "center",
      render: (value: string, row: any) => (
        <Link to={`/qoidabuzarliklar/${row.id}`}>
          <p className="text-[#0095FF] underline bg-[#228BE626]/15 px-[12px] flex items-start justify-center text-[16px]">
            {value}
            <ArrowUpRight size={18} />
          </p>
        </Link>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="mb-4 flex items-center gap-4">
        <div className="bg-[#2E3741] flex items-center rounded-lg py-2 px-2">
          <Search className="ml-2 text-white" />
          <input
            type="text"
            className="border-none outline-none px-4 w-[300px] text-[16px] bg-[#2E3741] text-white"
            placeholder="Qidiruv F.I.SH / JSHSHIR / Login"
          />
        </div>

        <CustomSelect
          value={student}
          onChange={(val) => setStudent(val)}
          options={["Janjallar va mushtlashuvlar", "Alochi talabalar"]}
          placeholder="Barchasi"
          icon={
            <FaStar className="text-black bg-white w-[25px] h-[25px] rounded-full p-1" />
          }
        />

        <CustomSelect
          value={type}
          onChange={(val) => setType(val)}
          options={["Janjallar va mushtlashuvlar", "Alochi talabalar"]}
          placeholder="Jadval boyicha"
          icon={
            <SlidersHorizontal className="text-[#E8F7FD] w-[25px] h-[25px] rounded-full p-1" />
          }
        />
      </div>

      <CustomTable
        columns={columns}
        data={data}
        striped
        showPagination={false}
        onRowClick={(id) => {
          navigate(`/employees/${id}`);
        }}
      />

      {showModal && (
        <StudentModal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold">Dars jadvali</h2>
          <p>Bu yerda dars jadvali ma'lumotlari chiqadi...</p>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
          >
            Yopish
          </button>
        </StudentModal>
      )}

      <ProfilaktikaModal
        isOpen={showProfilaktika}
        onClose={() => setShowProfilaktika(false)}
        data={selectedRow}
      />
    </div>
  );
}