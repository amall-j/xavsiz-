import { useLocation } from "react-router-dom";
import { DetIcon1, Sxema, talaba, UzbKarta, yoshlar } from "../../../assets";
import PieChart from "./Charts";
import UniverServCard from "../../../components/card/UniverServCard";
import CustomSelect from "../../../components/CustumSelect";
import { useState } from "react";
import { Building2, CalendarDays } from "lucide-react";
import Breadcrumb from "../../../components/BreadCrumb";
import {
  OffensStudents,
  universityDashboard,
} from "../../../mockData/data.statistika";
import ImageModal from "../../../modal/UniverSxemaModal";

export default function UniversityDetail() {
  const location = useLocation();
  const { title } = location.state || {};
  const [etaj, setEtaj] = useState("1-etaj");
  const [offenYear, setOffenYear] = useState("2025");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };
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
                mode="top"
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
                mode="top"
                link={item.link}
              />
            ))}
            <div className="col-span-2">
              <UniverServCard
                id={15}
                title={" Yotoqxonada begona odamlarning bo‘lishi"}
                img={DetIcon1}
                number={1212}
                mode="top"
                link={""}
              />
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
        <div className="col-span-3 h-full    flex flex-col gap-5">
          <div className="bg-[#2E3741] rounded-xl p-5 pb-70 ">
            <h3 className="text-white text-[20px] mt-5 font-semibold">
              Talabalar davomati
            </h3>
            {/* <PieChart value={93} /> */}
            <PieChart total={32732} present={30391} />
          </div>
          <div className="justify-center gap-4 flex h-full items-stretch ">
            <UniverServCard
              img={DetIcon1}
              number={255}
              id={100}
              title="O‘gil bolalar"
              className="h-full flex-1"
            />
            <UniverServCard
              img={DetIcon1}
              number={255}
              id={101}
              title="Qiz bolalar"
              className="h-full flex-1"
            />
          </div>
        </div>

        {/* 2) O‘rta blok */}
        <div className="col-span-6 bg-[#2E3741] rounded-xl p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] font-medium text-white">
              Universitet sxema holati
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <CustomSelect
                value={etaj}
                onChange={setEtaj}
                options={["1-etaj", "2-etaj", "3-etaj", "4-etaj"]}
                placeholder="Etaj tanlang"
                icon={<Building2 />}
                width={180}
              />
            </form>
          </div>
          <div className="w-full   pb-20 px-5 h-full rounded-lg overflow-hidden">
            <img
              src={UzbKarta}
              alt="sxema"
              className="w-full h-full object- rounded-lg"
              onClick={() => handleClick(UzbKarta)}
            />
            <ImageModal
              src={selectedImage}
              alt="Zoomed"
              isOpen={open}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>

        {/* 3) O‘ng blok */}
        <div className="col-span-3 bg-[#2E3741] rounded-xl p-5 flex flex-col gap-4">
          <div className="flex justify-between flex-coll items-center">
            <h3 className="text-white text-[20px] font-semibold">
              Huquqbuzarliklar
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <CustomSelect
                value={offenYear}
                onChange={setOffenYear}
                options={["2025", "2024", "2023", "2022"]}
                icon={<CalendarDays />}
                className="w-max"
                width={180}
              />
            </form>
          </div>

          <div className="grid grid-cols-1  gap-5 w-full">
            {OffensStudents.map((item, index) => (
              <div
                key={index}
                className="bg-[#37414C] p-2 rounded-xl flex max-[1310px]:flex-col  max-[1310px]:text-center  gap-2 items-center text-white shadow-md  "
              >
                {/* Icon */}
                <div className="flex-shrink-0  p-3 rounded-lg">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className=" huqu-card-icon"
                  />
                </div>

                {/* Texts */}
                <div className="flex flex-col items-center">
                  <h1
                    // lg:text-[14px] xl:text-[20px]
                    className=" 
                  font-medium leading-snug"
                  >
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
            mode="row"
          />
        </div>
        <div className="">
          <UniverServCard
            title="Kechki ta’limda o‘qiyotgan talabalar"
            id={103}
            img={DetIcon1}
            number={25}
            mode="row"
          />
        </div>
        <div className="">
          <UniverServCard
            title="Sirtqi ta’limda o‘qiyotgan talabalar"
            id={103}
            img={DetIcon1}
            number={25}
            mode="row"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <div>
            <UniverServCard
              img={DetIcon1}
              number={255}
              id={101}
              title=" Sirtqi talimda uqiydiogn talabalar"
              className="h-full flex-1"
              mode="side"
            />
          </div>
          <div className=" gap-4 mt-4 inline-flex ">
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title=" Uzoq muddatga chiqib ketgan talabalar"
                className="h-full  flex-1"
                mode="column"
                classNameitem=" 
                space-y-44
                 "
                classPadText="gap-15"
              />
            </div>
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title="     Uzoq muddatdan qaytib kelgan talabalar"
                className=" h-full flex-1"
                mode="column"
                classPadText="gap-15"
              />
            </div>
          </div>
        </div>
        <div className="inline-flex">
          <div className="grid grid-cols-2 gap-4 bg-[#2E3741] p-4 rounded-2xl">
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title="  Ijarada turadiganlar talabalar"
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
                classNameitem=" space-y-4 "
              />
            </div>
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title="   Yotoqxonada turadigan talabalar"
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
              />
            </div>
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title="       Tanishinikida turgan talabalar"
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
                classNameitem=" max-[1310px]:space-y-4 "
              />
            </div>
            <div>
              <UniverServCard
                img={DetIcon1}
                number={255}
                id={101}
                title="          Uyida yoki qarindoshinikida yashovchilar"
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#2E3741] p-8 rounded-lg">
          <h1 className="text-[23px] text-white font-medium">
            Yoshlar tomonidan sodir etilgan jinoyatlar
          </h1>
          <div className="flex justify-between mt-10">
            <span className="text-[40px] font-bold text-white">00.0% </span>
            <span className="text-[40px] font-bold text-white">00.0% </span>
          </div>
          <div className="h-[16px] rounded-full w-full  bg-[#FDCB6E]"></div>
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
