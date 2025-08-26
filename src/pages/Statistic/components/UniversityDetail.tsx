import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { DetIcon1, Go, PoliceIcon } from "../../../assets";
import UniverServCard from "../../../components/card/UniverServCard";
const universityDashboard = [
  {
    id: 1,
    title: "Talabalar soni",
    icon: DetIcon1,
    number: 6236,
  },
  {
    id: 2,
    title: "Dars vaqtida masjidga chiqqan talabalar",
    icon: DetIcon1,
    number: 5,
  },
  {
    id: 3,
    title: "Odamlar gavjumligi",
    icon: DetIcon1,
    number: 2,
  },
  {
    id: 4,
    title: "Janjallar va mushtlashuvlar",
    icon: DetIcon1,
    number: 2,
  },
  {
    id: 5,
    title: "OTM hududiga kirgan begona shaxslar",
    icon: DetIcon1,
    number: 91,
  },
  {
    id: 6,
    title: "Talabalar tashqi ko‘rinishi bo‘yicha",
    icon: DetIcon1,
    number: 54,
  },
  {
    id: 7,
    title: "Darsga 5 va undan ortiq kun kelmagan talabalar",
    icon: DetIcon1,
    number: 8,
  },
  {
    id: 8,
    title: "Kampus hududida topilmagan talabalar",
    icon: DetIcon1,
    number: 1,
  },
  {
    id: 9,
    title: "Yotoqxonada begona odamlarning bo‘lishi",
    icon: DetIcon1,
    number: 0,
  },
  {
    id: 10,
    title: "Hodisa bo‘yicha ko‘rilgan chora-tadbirlar",
    icon: DetIcon1,
    number: 3712,
  },
  {
    id: 11,
    title: "Umumiy talaba",
    icon: DetIcon1,
    number: 50391,
  },
  {
    id: 12,
    title: "O‘qituvchilar",
    icon: DetIcon1,
    number: 11235,
  },
  {
    id: 13,
    title: "Chet elga chiqib ketgan talabalar",
    icon: DetIcon1,
    number: 626,
  },
  {
    id: 14,
    title: "Uzoq muddatli ta’tilga chiqqan talabalar",
    icon: DetIcon1,
    number: 329,
  },
  {
    id: 15,
    title: "Ijara sharoitida yashayotgan talabalar",
    icon: DetIcon1,
    number: 8587,
  },
  {
    id: 16,
    title: "Yotoqxonada yashayotgan talabalar",
    icon: DetIcon1,
    number: 8885,
  },
  {
    id: 17,
    title: "Tarixiy hududlarda yashayotgan talabalar",
    icon: DetIcon1,
    number: 112,
  },
  {
    id: 18,
    title: "Uyida yoki qarindoshinikida yashovchilar",
    icon: DetIcon1,
    number: 15148,
  },
  {
    id: 19,
    title: "Yoshlar tomonidan sodir etilgan jinoyatlar",
    icon: DetIcon1,
    number: 16,
  },
  {
    id: 20,
    title: "Yoshlar tomonidan sodir etilgan huquqbuzarliklar",
    icon: DetIcon1,
    number: 10618,
  },
];

export default function UniversityDetail() {
  const location = useLocation();
  const { title } = location.state || {};

  // return (
  //   <div className="flex flex-col gap-3 ">
  //     {/* detailing header */}
  //     <div className="flex justify-between bg-[#2E3741] p-4 rounded-lg">
  //       <div className="flex flex-col gap-1">
  //         <div className="flex items-center">
  //           <p className="text-[14px] text-[#AAC0D8]">Dashbord</p>
  //           <ChevronRight />
  //           <p className="text-[14px] text-white">Universitet</p>
  //         </div>
  //         <h1 className="text-[20px] font-bold">{title}</h1>
  //       </div>
  //       <div className="flex items-center gap-2 bg-[#37414C] px-4 py-2 rounded-lg ">
  //         <img src={PoliceIcon} alt="" />
  //         Profilaktika inspektori
  //         <img src={Go} alt="" />
  //       </div>
  //     </div>

  //     <div className="flex flex-col gap-6">
  //       {/* 1-qator */}
  //       <div className="grid grid-cols-5 gap-4">
  //         {universityDashboard.slice(0, 5).map((item) => (
  //           <div key={item.id} className="col-span-1">
  //             <UniverServCard
  //               id={item.id}
  //               title={item.title}
  //               img={item.icon}
  //               number={item.number}
  //               mode="primary"
  //             />
  //           </div>
  //         ))}
  //       </div>

  //       {/* 2-qator */}
  //       <div className="grid grid-cols-5 gap-4">
  //         {/* 3 ta oddiy card */}
  //         {universityDashboard.slice(5, 8).map((item) => (
  //           <div key={item.id} className="col-span-1">
  //             <UniverServCard
  //               id={item.id}
  //               title={item.title}
  //               img={item.icon}
  //               number={item.number}
  //               mode="secondary"
  //             />
  //           </div>
  //         ))}

  //         {/* 2 ta cardni birlashtirib bitta qilish */}
  //         <div className="col-span-2">
  //           <UniverServCard
  //             id={999}
  //             title="Birlashtirilgan card"
  //             img={universityDashboard[8].icon}
  //             number={universityDashboard[8].number}
  //             mode="primary"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col gap-3 ">
      {/* detailing header */}
      <div className="flex justify-between bg-[#2E3741] p-4 mb-1 rounded-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <p className="text-[14px] text-[#AAC0D8]">Dashbord</p>
            <ChevronRight />
            <p className="text-[14px] text-white">Universitet</p>
          </div>
          <h1 className="text-[20px] font-bold">{title}</h1>
        </div>
        <div className="flex items-center gap-2 bg-[#37414C] px-4 py-2 rounded-lg ">
          <img src={PoliceIcon} alt="" />
          Profilaktika inspektori
          <img src={Go} alt="" />
        </div>
      </div>

      {/* asosiy layout */}

      <div className="grid grid-cols-4 gap-4">
        {/* chap taraf (2 qatorli gridlar) */}
        <div className="col-span-3 flex flex-col gap-4">
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
                mode="secondary"
              />
            ))}

            {/* 2 ta joyni egallovchi card */}
            <div className="col-span-2">
              <UniverServCard
                id={999}
                title="Birlashtirilgan card"
                img={universityDashboard[8].icon}
                number={universityDashboard[8].number}
                mode="primary"
              />
            </div>
          </div>
        </div>
        {/* o‘ng tarafdagi katta card (2 qatordan joy oladi) */}
        <div
          className={`rounded-2xl shadow-md p-5 flex flex-col cursor-pointer transition bg-[#2E3741] `}
        >
          <div className="flex flex-col items-start ">
            <img
              src={universityDashboard[9].icon}
              alt=""
              className=" col-span-1   w-35 h-35 object-contain mb-3"
            />
            <h3 className="col-span-2 text-[18px] text-[#8EA1B6]  font-medium mb-2">
              O‘ngdagi katta card
            </h3>
          </div>
          <p className={`text-[45px]  font-semibold mt-12 text-white `}>
            {universityDashboard[9].number}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3 bg-red-500">
          <div
            className={`rounded-2xl shadow-md p-5 flex flex-col cursor-pointer transition bg-[#2E3741] `}
          >
            <div className="grid grid-cols-3 items-center ">
              <img
                src={DetIcon1}
                alt=""
                className=" col-span-1   w-15 h-20 object-contain mb-3"
              />
              <h3 className="col-span-2 text-[16px] text-[#8EA1B6]  font-medium mb-2">
                Talabalar davomati
              </h3>
            </div>
            <p className={`text-[24px] font-medium mt-6 `}>1212</p>
          </div>
        </div>
        <div className="col-span-4 bg-red-400">2</div>
        <div className="col-span-3 bg-red-200">1</div>
      </div>
    </div>
  );
}
