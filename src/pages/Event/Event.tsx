import { Search, ArrowUpRight } from "lucide-react";
import CustomSelect from "../../components/CustumSelect";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CustomTable } from "../../components/Table";
import ProfilaktikaModal from "../../modal/ProfilaktikaModal";
import type { Column } from "../../type/Table";

export default function Event() {
  const [region, setRegion] = useState("");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfilaktikaClick = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const columns: Column[] = [
    { key: "id", title: "ID", align: "center" },
    {
      key: "video",
      title: "Video",
      align: "center",
      render: (value: string) => (
        <video
          src={value}
          controls
          autoPlay
          className="w-28 h-20 mx-auto rounded-lg"
        />
      ),
    },
    { key: "hodisaTuri", title: "Hodisa turi", align: "center" },
    { key: "aniqlanganVaqt", title: "Aniqlangan vaqti", align: "center" },
    { key: "kameraNomi", title: "Kamera nomi", align: "center" },
    { key: "kameraJoylashuvi", title: "Kamera joylashuvi", align: "center" },
    {
      key: "profilaktika",
      title: "Amallar",
      align: "center",
      render: (_: string, row: any) => (
        <button
          onClick={() => handleProfilaktikaClick(row)}
          className="bg-red-500 text-white py-2 px-6 rounded-[8px] flex items-center gap-1"
        >
          Profilaktika
          <ArrowUpRight size={18} className="text-[#AAC0D8]" />
        </button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      hodisaTuri: "Yiqilish Odamlar gavjumligi",
      aniqlanganVaqt: "2025-08-27 14:30",
      kameraNomi: "Kamera #1",
      kameraJoylashuvi: "Bosh eshik",
    },
    {
      id: 2,
      video: "https://www.w3schools.com/html/movie.mp4",
      hodisaTuri: "Odamlar gavjumligi",
      aniqlanganVaqt: "2025-08-28 09:15",
      kameraNomi: "Kamera #2",
      kameraJoylashuvi: "Sport zal",
    },
  ];

  return (
    <div>
      {/* qidiruv va filter */}
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
          value={region}
          onChange={(val) => setRegion(val)}
          options={[
            "Janjallar va mushtlashuvlar",
            "Kech qolgan talabalar",
            "Dars vaqtida masjidga chiqqan talabalar",
            "Odamlar gavjumligi",
          ]}
          placeholder="Barchasi"
          icon={
            <FaStar className="text-black bg-white w-[25px] h-[25px] rounded-full p-1 " />
          }
        />
      </div>

      {/* table */}
      <CustomTable
        columns={columns}
        data={data}
        striped
        showPagination={true}
      />

      {/* modal */}
      <ProfilaktikaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedRow}
      />
    </div>
  );
}
