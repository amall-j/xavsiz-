import { ChevronLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../components/BreadCrumb";
import {
  tashqikurinish1,
  tashqikurinish2,
} from "../../../../mockData/data.statistika";

export default function Studentappearance() {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div className="flex items-center gap-4 bg-[#2E3741] p-4 rounded-lg">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#37414C] p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <div>
          <Breadcrumb
            items={[
              { title: "Talabalar tashqi ko‘rinishi bo‘yicha", link: "" },
            ]}
          />
          <h1 className="text-[25px] font-bold text-white">
            Talabalar hozirgi kayfiyati bo‘yicha maulmotlar
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {tashqikurinish1.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md  px-4 py-2 flex items-center gap-5 justify-between    bg-[#2E3741] `}
          >
            <img src={item.icon} className=" w-15 h-20 object-contain mb-3" />

            <h3 className=" text-[20px] text-white font-medium mb-2">
              {item.title}
            </h3>
            <p className={`text-[35px] font-medium mt-6 -translate-y-4 pr-20`}>
              {item.number}
            </p>
          </div>
        ))}
      </div>{" "}
      <div className="text-[25px] my-4">Talablar</div>
      <div className="grid grid-cols-2 gap-4">
        {tashqikurinish2.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md  p-10 flex flex-col gap-4    bg-[#2E3741] `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl  w-[150px] h-[150px] overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full  object-cover  mb-3 "
                  />
                </div>

                <h3 className="  text-[25px] text-white font-medium mb-2 max-w-[250px]">
                  {item.fullName}
                </h3>
              </div>
              <div className="p-2 bg-[#475360] flex items-center justify-center rounded-full">
                <img src={item.icon} alt="" className="w-[40px] h-[40px]" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span>
                <p className="text-[#8EA1B6] text-[16px] ">Fakultet</p>
                <h2 className="text-[#C9C9C9] text-[20px] ">{item.fakultet}</h2>
              </span>
              <p className="text-[#C9C9C9] text-[18px]">{item.grux}</p>
            </div>
            <div className="py-3 flex items-center justify-center gap-3 bg-[#37414C] hover:scale-102 transition rounded-[8px] text-[#AAC0D8]">
              <span className=" bg-[#AAC0D8] text flex items-center justify-center w-max rounded-full text-[#37414C]">
                <User />
              </span>
              Talaba kartochkasi
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
