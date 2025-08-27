import { useLocation } from "react-router-dom";
import { DetIcon1, Sxema, talaba, yoshlar } from "../../../assets";
import PieChart from "./Charts";
import UniverServCard from "../../../components/card/UniverServCard";
import CustomSelect from "../../../components/RegionSelect";
import { useState } from "react";
import { Building2, CalendarDays } from "lucide-react";
import Breadcrumb from "../../../components/BreadCrumb";
import {
  OffensStudents,
  universityDashboard,
} from "../../../mockData/data.statistika";

export default function UniversityDetail() {
  const location = useLocation();
  const { title } = location.state || {};
  const [etaj, setEtaj] = useState("1-etaj");
  const [offenYear, setOffenYear] = useState("2025");

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col bg-[#2E3741] p-4 rounded-lg">
        <Breadcrumb items={[{ title: "Universitet", link: "" }]} />
        <h1 className="text-[25px] font-bold text-white">{title}</h1>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {/* Chap taraf (2 qatorli gridlar) */}
        <div className="col-span-5 flex flex-col gap-4">
          {/* 1-qator */}
          <div className="grid grid-cols-5 gap-4">
            {universityDashboard.slice(0, 5).map((item) => (
              <UniverServCard
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.icon}
                number={item.number}
                mode="primary"
                link={item.link}
              />
            ))}
          </div>

          {/* 2-qator */}
          <div className="grid grid-cols-5 gap-4">
            {/* 3 ta oddiy card */}
            {universityDashboard.slice(5, 8).map((item) => (
              <UniverServCard
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.icon}
                number={item.number}
                mode="primary"
                link={item.link}
              />
            ))}

            {/* 2 ta joyni egallovchi card */}
            <div className="col-span-2 h-full  flex ">
              <div
                className={`rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] p-5 flex justify-start flex-col w-full cursor-pointer transition bg-[#2E3741] `}
              >
                <div className="flex  gap-4  items-center ">
                  <img
                    src={DetIcon1}
                    alt=""
                    className=" col-span-1   w-15 h-20 object-contain mb-3"
                  />
                  <h3 className="col-span-2 text-[20px] text-[#8EA1B6]  font-medium mb-2">
                    Yotoqxonada begona odamlarning bo‘lishi
                  </h3>
                </div>
                <p className={`text-[24px] font-medium mt-6 `}>123</p>
              </div>
            </div>
          </div>
        </div>

        {/* O‘ng tarafdagi katta card (2 qatordan joy oladi) */}
        <div className="rounded-2xl hover:shadow-lg hover:scale-[1.02] shadow-md p-5 flex flex-col cursor-pointer transition bg-[#2E3741]">
          <div className="flex flex-col justify-center items-start">
            <img
              src={universityDashboard[9].icon}
              alt=""
              className=" w-30 h-30 object-contain mb-3"
            />
            <h3 className=" text-[18px] text-[#8EA1B6] font-medium mb-2">
              Hodisa bo‘yicha ko‘rilgan chora-tadbirlar
            </h3>
          </div>
          <p className="text-[45px] font-semibold mt-12 text-white">
            {universityDashboard[9].number}
          </p>
        </div>
      </div>

      {/* sxema   Grid */}
      <div className="grid grid-cols-12 gap-4 ">
        {/* 1) Chap blok */}
        <div className="col-span-3 h-max   flex flex-col gap-5">
          <div className="bg-[#2E3741] rounded-xl p-5 pb-80 ">
            <h3 className="text-white text-[20px] mt-5 font-semibold">
              Talabalar davomati
            </h3>
            {/* <PieChart value={93} /> */}
            <PieChart total={32732} present={30391} />
          </div>
          <div className="  justify-center gap-4 flex mt-  h-full ">
            <UniverServCard
              img={DetIcon1}
              number={255}
              id={100}
              title="O`gil bolalar"
            />
            <UniverServCard
              img={DetIcon1}
              number={255}
              id={101}
              title=" Qiz bolalar "
            />
          </div>
        </div>

        {/* 2) O‘rta blok */}
        <div className="col-span-6 bg-[#2E3741] rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] font-medium text-white">
              Universitet sxema holati
            </h2>

            <CustomSelect
              value={etaj}
              onChange={setEtaj}
              options={["1-etaj", "2-etaj", "3-etaj", "4-etaj"]}
              placeholder="Etaj tanlang"
              icon={<Building2 />}
            />
          </div>
          <img src={Sxema} alt="sxema" className="w-full object-contain" />
        </div>

        {/* 3) O‘ng blok */}
        <div className="col-span-3 bg-[#2E3741] rounded-xl p-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-[20px] font-semibold">
              Huquqbuzarliklar
            </h3>
            <CustomSelect
              value={offenYear}
              onChange={setOffenYear}
              options={["2025", "2024", "2023", "2022"]}
              icon={<CalendarDays />}
            />
          </div>

          <div className="grid grid-cols-1  gap-5 w-full">
            {OffensStudents.map((item, index) => (
              <div
                key={index}
                className="bg-[#37414C] p-4 rounded-xl flex gap-4 items-center text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                {/* Icon */}
                <div className="flex-shrink-0  p-3 rounded-lg">
                  <img src={item.icon} alt={item.title} className="w-20 h-20" />
                </div>

                {/* Texts */}
                <div className="flex flex-col">
                  <h1 className="text-[18px] font-medium leading-snug">
                    {item.title}
                  </h1>
                  <h2 className="text-[22px] font-bold mt-1">{item.number}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 3talik grid  */}
      <div className="grid grid-cols-3 gap-8">
        <div className="">
          <UniverServCard
            title="Kunduzgi ta’limda o‘qiyotgan talabalar"
            id={103}
            img={DetIcon1}
            number={25}
            mode="secondary"
          />
        </div>
        <div className="">
          <UniverServCard
            title="Kechki ta’limda o‘qiyotgan talabalar"
            id={103}
            img={DetIcon1}
            number={25}
            mode="secondary"
          />
        </div>
        <div className="">
          <UniverServCard
            title="Sirtqi ta’limda o‘qiyotgan talabalar"
            id={103}
            img={DetIcon1}
            number={25}
            mode="secondary"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div
            className={`rounded-2xl shadow-md p-5 flex gap-10 cursor-pointer transition bg-[#2E3741] `}
          >
            <img
              src={DetIcon1}
              alt=""
              className=" col-span-1   w-35 h-35 object-contain mb-3"
            />
            <div className="">
              <h3 className="col-span-2 text-[20px] text-[#8EA1B6]  font-medium mb-2">
                Sirtqi talimda uqiydiogn talabalar
              </h3>

              <p className={`text-[72px] font-medium mt-6 `}>102</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 ">
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#2E3741] `}
            >
              <h3 className="col-span-2 text-[25px] text-[#8EA1B6]  font-medium mb-2">
                Uzoq muddatga chiqib ketgan talabalar
              </h3>
              <p className={`text-[40px] font-medium mt-5 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-35 h-35 mt-25 object-contain mb-3"
              />
            </div>
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#2E3741] `}
            >
              <h3 className="col-span-2 text-[25px] text-[#8EA1B6] max-w-  font-medium mb-2">
                Uzoq muddatdan qaytib kelgan talabalar
              </h3>
              <p className={`text-[40px] font-medium mt-5 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-35 h-35 mt-25 object-contain mb-3"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 bg-[#2E3741] p-4 rounded-2xl">
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#37414C] `}
            >
              <h3 className="col-span-2 text-[24px] text-[#8EA1B6] max-w-  font-medium mb-2">
                Ijarada turadiganlar talabalar
              </h3>
              <p className={`text-[40px] font-medium mt-6 mb-10 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-30 h-30  object-contain mb-3"
              />
            </div>
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#37414C] `}
            >
              <h3 className="col-span-2 text-[24px] text-[#8EA1B6] max-w-  font-medium mb-2">
                Yotoqxonada turadigan talabalar
              </h3>
              <p className={`text-[40px] font-medium mt-6 mb-10 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-30 h-30 object-contain mb-3"
              />
            </div>
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#37414C] `}
            >
              <h3 className="col-span-2 text-[24px] text-[#8EA1B6] max-w-  font-medium mb-2">
                Tanishinikida turgan talabalar 112
              </h3>
              <p className={`text-[40px] font-medium mb-10   mt-6 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-30 h-30 object-contain mb-3"
              />
            </div>
            <div
              className={`rounded-2xl shadow-md p-5 flex flex-col justify-between cursor-pointer transition bg-[#37414C]`}
            >
              <h3 className="col-span-2 text-[24px] text-[#8EA1B6]  font-medium ">
                Uyida yoki qarindoshinikida yashovchilar
              </h3>
              <p className={`text-[40px] font-medium mt-6 mb-8 `}>2323</p>
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-30 h-30 object-contain mb-3"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#2E3741] p-8">
          <h1 className="text-[23px] text-white font-medium">
            Yoshlar tomonidan sodir etilgan jinoyatlar
          </h1>
          <div className="flex justify-between mt-15">
            <span className="text-[40px] font-bold text-white">00.0% </span>
            <span className="text-[40px] font-bold text-white">00.0% </span>
          </div>
          <div className="h-[16px] rounded-full w-full bg-[#FDCB6E]"></div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex flex-col pr-20 p-5 items-start justify-center bg-[#37414C] rounded-2xl">
              <img src={talaba} alt="" className="mt-3 mb-8 w-full" />
              <div className="h-[16px] rounded-full w-full bg-[#D63031]"></div>
              <h1 className="text-[24px] font-normal ">
                Yosh talabalar tomonidan
              </h1>
              <h1 className="text-[35px] font-normal pt-5 text-left">16</h1>
            </div>
            <div className="flex flex-col pr-20 p-5 items-start justify-center bg-[#37414C] rounded-2xl">
              <img src={yoshlar} alt="" className="mb-10 w-full" />
              <div className="h-[16px] rounded-full w-full -translate-y-5 bg-[#FDCB6E]"></div>
              <h1 className="text-[24px] font-normal -translate-y-4 ">
                Yoshlar o‘rtasida
              </h1>
              <h1 className="text-[35px]  translate-y-4  font-normal mt-5 text-left">
                16
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
