import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomTable } from "./Table";
import StudentModal from "../modal/StudentModal";
import { ArrowUpRight, CalendarClock } from "lucide-react";
import { usersSvg } from "../assets";
import ProfilaktikaModal from "../modal/ProfilaktikaModal";
import type { Column } from "../type/Table";

export default function StudentTablePage() {
  const [showModal, setShowModal] = useState(false);
  const [showProfilaktika, setShowProfilaktika] = useState(false);
  const [slectRow, setSeletRow] = useState<any>(null);

  const columns: Column[] = [
    {
      key: "id",
      title: "ID",
      align: "center",
      render: (value: string) => (
        <p className="  text-[20px] text-[#CACACA]">{value}</p>
      ),
    },
    {
      key: "img",
      title: "Rasm",
      align: "center",
      render: (value: string) => (
        <img
          src={value}
          alt="avatar"
          className="w-12 h-12 rounded-lg mx-auto"
        />
      ),
    },
    {
      key: "kelmaganKun",
      title: "Kelmagan kun",
      align: "center",
      render: (value: string) => (
        <p className="  text-[20px] text-[#CACACA]">{value}</p>
      ),
    },
    { key: "fullName", title: "F.I.O", align: "center" },

    {
      key: "talabaKartochka",
      title: "Talaba kartochkasi",
      align: "center",
      render: (value: string, row: any) => (
        <Link to={`/talaba/${row.id}`}>
          <p className="bg-[#37414C] text-white py-1.5 mx-auto w-max px-3 text-center rounded-[8px] justify-center text-[16px] gap-2 flex items-center">
            <span className="  rounded-full">
              <img src={usersSvg} alt="" />
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
          onClick={() => setShowModal(true)}
          className="bg-[#37414C] text-white py-1.5 mx-auto text-[16px] w-max px-3 text-center rounded-[8px] justify-center gap-2 flex items-center"
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
      render: (value: string, row: any) => (
        <p
          onClick={() => {
            setSeletRow(row);
            setShowProfilaktika(true);
          }}
          className="bg-[#37414C] text-white text-[16px] py-1.5 mx-auto  px-3 text-center rounded-[8px] justify-center gap-1 flex items-center"
        >
          {value}
          <ArrowUpRight size={18} className="text-[#AAC0D8] font-bold" />
        </p>
      ),
    },
    {
      key: "jshshir",
      title: "JSHSHIR",
      align: "center",
      render: (value: string) => <p className="text-[16px] ">{value}</p>,
    },
    {
      key: "universitet",
      title: "Universitet",
      align: "center",
      render: (value: string) => <p className="text-[16px] ">{value}</p>,
    },
    {
      key: "fakultet",
      title: "Fakultet",
      align: "center",
      render: (value: string) => <p className="text-[16px] ">{value}</p>,
    },
    {
      key: "grux",
      title: "Guruh",
      align: "center",
      render: (value: string) => <p className="text-[16px] ">{value}</p>,
    },
    {
      key: "yashashManzil",
      title: "Yashash manzili",
      align: "center",
      render: (value: string) => <p className="text-[16px] ">{value}</p>,
    },
    {
      key: "hodisalar",
      title: "Hodisalar",
      align: "center",
      render: (value: string, row: any) => (
        <Link to={`/hodisalar/${row.id}`}>
          <p className="text-[#0095FF] underline   bg-[#228BE626]/15 px-[12px]  flex items-start justify-center text-[16px]">
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
          <p className="text-[#0095FF] underline  bg-[#228BE626]/15 px-[12px]  flex items-start justify-center text-[16px]">
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
          <p className="text-[#0095FF] underline  bg-[#228BE626]/15 px-[12px]  flex items-start justify-center text-[16px]">
            {value}
            <ArrowUpRight size={18} />
          </p>
        </Link>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      img: "https://i.pravatar.cc/50?img=1",
      kelmaganKun: 2,
      fullName: "FAYZULLAYEVA GULBAHOR .Z",
      talabaKartochka: "Talaba kartochkasi",
      darsJadvali: "Dars jadvali",
      profilaktika: "Profilaktika",
      jshshir: "12345678901234",
      universitet: "Buxoro innovatsion ta'lim va tibbiyot universiteti",
      fakultet: "Iqtisodiyot (Tarmoqlar va sohalar bo'yicha)",
      grux: "KKU-2205",
      yashashManzil: "Toshkent, Chilonzor-5",
      hodisalar: "0",
      ogohlantirishlar: "0 ",
      qoidabuzarliklar: "0",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/50?img=2",
      kelmaganKun: 0,
      fullName: "KARIMOV FARRUX",
      talabaKartochka: "Talaba kartochkasi",
      darsJadvali: "Dars jadvali",
      profilaktika: "Profilaktika",
      jshshir: "98765432101234",
      universitet: "Toshkent davlat universiteti",
      fakultet: "Matematika",
      grux: "MMU-1102",
      yashashManzil: "Samarqand, Registon",
      hodisalar: "0",
      ogohlantirishlar: "0",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/50?img=2",
      kelmaganKun: 0,
      fullName: "KARIMOV FARRUX",
      talabaKartochka: "Talaba kartochkasi",
      darsJadvali: "Dars jadvali",
      profilaktika: "Profilaktika",
      jshshir: "98765432101234",
      universitet: "Toshkent davlat universiteti",
      fakultet: "Matematika",
      grux: "MMU-1102",
      yashashManzil: "Samarqand, Registon",
      hodisalar: "0",
      ogohlantirishlar: "0",
    },
    {
      id: 4,
      img: "https://i.pravatar.cc/50?img=1",
      kelmaganKun: 2,
      fullName: "FAYZULLAYEVA GULBAHOR .Z",
      talabaKartochka: "Talaba kartochkasi",
      darsJadvali: "Dars jadvali",
      profilaktika: "Profilaktika",
      jshshir: "12345678901234",
      universitet: "Buxoro innovatsion ta'lim va tibbiyot universiteti",
      fakultet: "Iqtisodiyot (Tarmoqlar va sohalar bo'yicha)",
      grux: "KKU-2205",
      yashashManzil: "Toshkent, Chilonzor-5",
      hodisalar: "0",
      ogohlantirishlar: "0 ",
      qoidabuzarliklar: "0",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1400px]">
        <CustomTable
          columns={columns}
          data={data}
          striped
          showPagination={false}
          className="w-full"
        />
      </div>
      {/* Modal */}
      {showModal && (
        <StudentModal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold">Dars jadvali</h2>
          <p>Bu yerda dars jadvali ma'lumotlari chiqadi...</p>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-3 py-1  text-white rounded"
          >
            Yopish
          </button>
        </StudentModal>
      )}

      <ProfilaktikaModal
        isOpen={showProfilaktika}
        onClose={() => setShowProfilaktika(false)}
        data={slectRow}
      />
    </div>
  );
}
