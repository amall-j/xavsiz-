import { Link } from "react-router-dom";
import { CustomTable } from "./Table";
import { ArrowUpRight } from "lucide-react";

export default function HodisaTablePage() {
  const columns: Column[] = [
    {
      key: "id",
      title: "ID",
      align: "center",
      render: (value: string) => (
        <p className="text-[16px] text-[#CACACA]">{value}</p>
      ),
    },
    {
      key: "video",
      title: "Video",
      align: "center",
      render: (value: string) => (
        <video src={value} controls className="w-28 h-20 mx-auto rounded-lg" />
      ),
    },
    {
      key: "hodisaTuri",
      title: "Hodisa turi",
      align: "center",
      render: (value: string) => (
        <p className="  text-[16px] text-[#CACACA]  text-center bg-[#37414C] py-3 rounded-lg   ">
          {value}
        </p>
      ),
    },
    {
      key: "aniqlanganVaqt",
      title: "Aniqlangan vaqti",
      align: "center",
    },
    {
      key: "kameraNomi",
      title: "Kamera nomi",
      align: "center",
    },
    {
      key: "kameraJoylashuvi",
      title: "Kamera joylashuvi",
      align: "center",
    },
    {
      key: "profilaktika",
      title: "Amallar",
      align: "center",
      render: (_: string, row: any) => (
        <Link to={`/profilaktika/${row.id}`}>
          <p className="bg-red-500 text-white py-2 mx-auto w-max px-8  text-center rounded-[8px] justify-center gap-1 flex items-center">
            Profilaktika
            <ArrowUpRight size={18} className="text-[#AAC0D8]" />
          </p>
        </Link>
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
      profilaktika: "Profilaktika",
    },
    {
      id: 2,
      video: "https://www.w3schools.com/html/movie.mp4",
      hodisaTuri: "Odamlar gavjumligi",
      aniqlanganVaqt: "2025-08-28 09:15",
      kameraNomi: "Kamera #2",
      kameraJoylashuvi: "Sport zal",
      profilaktika: "Profilaktika",
    },
  ];

  return (
    <div className="rounded-lg overflow-hidden">
      <CustomTable
        columns={columns}
        data={data}
        striped
        showPagination={true}
        totalCount={data.length}
      />
    </div>
  );
}
