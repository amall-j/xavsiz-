import { Info } from "lucide-react";
import { CustomTable } from "../../components/Table";
import CustomSelect from "../../components/CustumSelect";
import { useState } from "react";

const data = [
  {
    id: 1,
    userImg: "https://i.pravatar.cc/50?img=1",
    eventImg: "https://picsum.photos/100/60",
    participant1: "Abdullayev Og‘abek.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Yangi",
  },
  {
    id: 2,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 3,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 4,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 5,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 6,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 7,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 8,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
  {
    id: 9,
    userImg: "https://i.pravatar.cc/50?img=2",
    eventImg: "https://picsum.photos/100/61",
    participant1: "Meliboyev Jahongir.U",
    participant2: "Muxtarov Abbos.S",
    date: "15:12:25 2025-05-01",
    university: "O‘zMU",
    eventType: "Urush va janjallar",
    comment: "Camera 1 nimadir profilaktika qildi",
    holat: "Jarayonda",
  },
];

const columns = [
  {
    key: "id",
    title: "№",
    align: "center" as const,
    render: (v: string) => <p className="text-[20px]">{v}</p>,
  },
  {
    key: "userImg",
    title: "Rasm",
    align: "center" as const,
    render: (v: string) => (
      <img src={v} className="w-10 h-10 rounded-full mx-auto" />
    ),
  },
  {
    key: "eventImg",
    title: "Biriktirilgan foto",
    align: "center" as const,
    render: (v: string) => (
      <img src={v} className="w-16 h-10 rounded-md mx-auto" />
    ),
  },
  {
    key: "participants",
    title: "Qatnashuvchilar",
    align: "center" as const,
    render: (_: any, row: any) => (
      <div className="flex items-center gap-3">
        <p className="bg-[#37414C] px-3 py-2 rounded-md text-[16px]">
          {row.participant1}
        </p>
        <p className="bg-[#37414C] px-3 py-2 rounded-md text-[16px]">
          {row.participant2}
        </p>
      </div>
    ),
  },
  {
    key: "date",
    title: "Yaratilgan vaqt",
    align: "center" as const,
    render: (v: string) => <p className="text-[15px]">{v}</p>,
  },
  {
    key: "university",
    title: "Universitet nomi",
    align: "center" as const,
    render: (v: string) => <p className="text-[20px]">{v}</p>,
  },
  {
    key: "eventType",
    title: "Hodisa turi",
    align: "center" as const,
    render: (v: string) => (
      <p className="bg-[#37414C]   text-[16px] py-3 rounded-md">{v}</p>
    ),
  },
  {
    key: "comment",
    title: "Izoh",
    align: "center" as const,
    render: (v: string) => (
      <div className="flex items-center justify-center gap-2">
        <p className="text-[15px]">{v}</p>
        <Info size={18} className="text-gray-400 cursor-pointer" />
      </div>
    ),
  },
  {
    key: "holat",
    title: "Holat",
    align: "center" as const,
    render: (
      value: string,
      row: any,
      handleHolatChange?: (id: number, newValue: string) => void
    ) => {
      const options = ["Yangi", "Jarayonda"];
      const selectClassName =
        value === "Yangi" ? "bg-blue-600" : "bg-yellow-500";
      return (
        <CustomSelect
          value={value}
          onChange={(newValue) =>
            handleHolatChange && handleHolatChange(row.id, newValue)
          }
          options={options}
          placeholder="Holatni tanlang"
          className={selectClassName}
        />
      );
    },
  },
  {
    key: "aybdorStud",
    title: "Aybdor talaba",
    align: "center" as const,
    render: (
      value: string,
      row: any,
      handleHolatChange?: (id: number, newValue: string) => void
    ) => {
      const options = ["Uchrashuv belgilash", "Suxbat qurish"];
      return (
        <CustomSelect
          value={value}
          onChange={(newValue) =>
            handleHolatChange && handleHolatChange(row.id, newValue)
          }
          options={options}
          placeholder="Holatni tanlang"
        />
      );
    },
  },
];

export default function Profilaktika() {
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleHolatChange = (id: number, newValue: string) => {
    setTableData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, holat: newValue } : row))
    );
  };

  return (
    <div className="p-6 overflow-x-auto">
      <CustomTable
        title="Profilaktika hodisalari"
        columns={columns}
        data={paginatedData}
        showPagination={true}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
        onHolatChange={handleHolatChange}
      />
    </div>
  );
}
