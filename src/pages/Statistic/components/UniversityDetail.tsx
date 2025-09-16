import { useLocation } from "react-router-dom";
import {
  BuildSxema,
  BuildSxema2,
  DetIcon1,
  jaxl,
  talaba,
  XonadaBegona,
  yoshlar,
} from "../../../assets";
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
import { ImageModal } from "../../../modal/UniverSxemaModal";
const floorImages = {
  "1-etaj": BuildSxema,
  "2-etaj": BuildSxema2,
};
export default function UniversityDetail() {
  const location = useLocation();
  const { title } = location.state || {};
  const [etaj, setEtaj] = useState("1-etaj");
  const [offenYear, setOffenYear] = useState("2025");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const floorImage = floorImages[etaj] || null;
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
            <UniverServCard
              id={565}
              title={"Talabalar hozirgi kayfiyati bo‘yicha"}
              img={DetIcon1}
              number={1212}
              mode="top"
              link={"/university/:id/studentsmood"}
              extraNumber={1313}
              extraIcon={jaxl}
            />

            {universityDashboard.slice(1, 5).map((item) => (
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
                key={universityDashboard[8].id}
                id={universityDashboard[8].id}
                title={universityDashboard[8].title}
                img={universityDashboard[8].icon}
                number={universityDashboard[8].number}
                mode="top"
                link={universityDashboard[8].link}
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
              img={universityDashboard[10].icon}
              number={universityDashboard[10].number}
              id={universityDashboard[10].id}
              title={universityDashboard[10].title}
              className="h-full flex-1"
            />
            <UniverServCard
              img={universityDashboard[11].icon}
              number={universityDashboard[10].number}
              id={universityDashboard[10].id}
              title={universityDashboard[10].title}
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
          <div className="w-full  h-full p-3    rounded-lg overflow-hidden">
            {floorImage ? (
              <img
                src={floorImage}
                alt="Etaj sxemasi"
                className="w-full h-[90%] object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(floorImage)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                Iltimos, etaj tanlang
              </div>
            )}
            <ImageModal
              src={selectedImage}
              alt="Yaqinlashtirilgan sxema"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* 3) O‘ng blok */}
        <div className="col-span-3 bg-[#2E3741] rounded-xl p-3 flex flex-col gap-4">
          <div className="flex justify-between flex-coll items-center">
            <h3 className="text-white text-[20px] font-semibold">
              Huquqbuzarliklar
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <CustomSelect
                value={offenYear}
                onChange={setOffenYear}
                options={["2025", "2024"]}
                icon={<CalendarDays />}
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
                <div className="flex flex-col items-start justify-start">
                  <h1
                    // lg:text-[14px] xl:text-[20px]
                    className=" 
                  font-medium leading-snug"
                  >
                    {item.title}
                  </h1>
                  <h2 className="text-[27px] font-bold mt-1">{item.number}</h2>
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
            title={universityDashboard[12].title}
            id={universityDashboard[12].id}
            img={universityDashboard[12].icon}
            number={universityDashboard[12].number}
            mode="row"
          />
        </div>
        <div className="">
          <UniverServCard
            title={universityDashboard[13].title}
            id={universityDashboard[13].id}
            img={universityDashboard[13].icon}
            number={universityDashboard[13].number}
            mode="row"
          />
        </div>
        <div className="">
          <UniverServCard
            title={universityDashboard[14].title}
            id={universityDashboard[14].id}
            img={universityDashboard[14].icon}
            number={universityDashboard[14].number}
            mode="row"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <div>
            <UniverServCard
              img={universityDashboard[15].icon}
              number={universityDashboard[15].number}
              id={universityDashboard[15].id}
              title={universityDashboard[15].title}
              className="h-[200px] flex-1"
              mode="side"
            />
          </div>
          <div className=" gap-4 mt-4 inline-flex ">
            <div>
              <UniverServCard
                img={universityDashboard[16].icon}
                number={universityDashboard[16].number}
                id={universityDashboard[16].id}
                title={universityDashboard[16].title}
                className="h-full  flex-1"
                mode="column"
                classNameitem=" 
                space-y-30
                 "
              />
            </div>
            <div>
              <UniverServCard
                img={universityDashboard[17].icon}
                number={universityDashboard[17].number}
                id={universityDashboard[17].id}
                title={universityDashboard[17].title}
                className=" h-full flex-1"
                mode="column"
              />
            </div>
          </div>
        </div>
        <div className="inline-flex">
          <div className="grid grid-cols-2 gap-4 bg-[#2E3741] p-4 rounded-2xl">
            <div>
              <UniverServCard
                img={universityDashboard[18].icon}
                number={universityDashboard[18].number}
                id={universityDashboard[18].id}
                title={universityDashboard[18].title}
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
                classNameitem=" space-y-2.5 "
              />
            </div>
            <div>
              <UniverServCard
                img={universityDashboard[19].icon}
                number={universityDashboard[19].number}
                id={universityDashboard[19].id}
                title={universityDashboard[19].title}
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
              />
            </div>
            <div>
              <UniverServCard
                img={universityDashboard[20].icon}
                number={universityDashboard[20].number}
                id={universityDashboard[20].id}
                title={universityDashboard[20].title}
                className=" h-full flex-1 bg-[#37414C]"
                mode="column"
                classNameitem=" max-[1310px]:space-y-4 "
              />
            </div>
            <div>
              <UniverServCard
                img={universityDashboard[21].icon}
                number={universityDashboard[21].number}
                id={universityDashboard[21].id}
                title={universityDashboard[21].title}
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
