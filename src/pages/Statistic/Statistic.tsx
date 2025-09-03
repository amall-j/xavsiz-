import {  MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UniversCard from "../../components/card/UniversCard";
import CustomSelect from "../../components/CustumSelect";
import { universities } from "../../mockData/data.statistika";

export default function Statistika() {
  const [selectedRegion, setSelectedRegion] = useState("");

  // Filter qilamiz
  const filteredUniversities = selectedRegion
    ? universities.filter((uni) => uni.region === selectedRegion)
    : universities;

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[23px]">Universitetlar ro`yxati</h1>
        <div className="flex items-center">
          <CustomSelect
            value={selectedRegion}
            onChange={setSelectedRegion}
            options={[
              "Toshkent",
              "Andijon",
              "Buxoro",
              "Farg‘ona",
              "Jizzax",
              "Xorazm",
              "Namangan",
              "Navoiy",
              "Qashqadaryo",
              "Qoraqalpog‘iston",
              "Samarqand",
              "Sirdaryo",
              "Surxondaryo",
            ]}
            placeholder="Viloyat tanlang"
            icon={<MapPin size={18} />}
          />

          <p className="text-[15px] px-3 py-1.5 bg-[#37414C] rounded-[10px] ml-2">
            Jami{" "}
            <span className="text-[18px] font-bold">
              {filteredUniversities.length}
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full py-5">
        {filteredUniversities.map((uni) => (
          <div key={uni.id} className="cursor-pointer">
            <Link
              to={`/university/${uni.id}`}
              state={{
                id: uni.id,
                title: uni.title,
                adress: uni.adress,
                studentCount: uni.studentCount,
                region: uni.region,
              }}
            >
              <UniversCard
                icon={uni.icon}
                studentCount={uni.studentCount}
                title={uni.title}
                adress={uni.adress}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
