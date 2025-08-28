import { Search } from "lucide-react";
import HodisaTablePage from "../../components/StudentEventTablePage";
import CustomSelect from "../../components/RegionSelect";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function Event({}) {
  const [region, setRegion] = useState("");
  return (
    <div>
      <div className="mb-4 flex items-center">
        <div className="bg-[#2E3741] w-max flex items-center rounded-lg  h-max py-2 overflow-hidden ">
          <Search className="translate-x-5" />
          <input
            type="text"
            className="border-none outline-none px-8 w-[300px] text-[16px] bg-[#2E3741] "
            placeholder="QidiruvF.I.SH/JSHSHIR/Login"
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
            "Kampus hududida topilmagan talabalar",
            "Yotoqxonada begona odamlarning bo‘lishi",
            "OTM hududiga kirgan begona shaxslar ",
          ]}
          placeholder="Barchasi"
          icon={
            <FaStar
              className="text-black bg-white w-[25px] h-[25px] rounded-full p-1 "
              size={15}
            />
          }
        />
      </div>
      <HodisaTablePage />
    </div>
  );
}
