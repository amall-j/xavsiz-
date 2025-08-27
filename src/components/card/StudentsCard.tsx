// import { faceMood1, faceMood2, iconMood1 } from "../../assets";

// interface StudentsCardProps {
//   img1: string; // chapdagi 1-rasm
//   img2: string; // chapdagi 2-rasm
//   icon: string; // o‘ng tomondagi icon
//   similarity: string; // O‘xshashligi %
//   fullName: string; // F.I.SH
//   fakultet: string; // Fakultet
//   jins: string; // Jinsi
//   date: string; // Sana/vaqt
//   gruh: string; // Guruh
//   age: number; // Yoshi
// }
// export default function StudentsCard({
//   img1,
//   img2,
//   icon,
//   similarity,
//   fullName,
//   fakultet,
//   jins,
//   date,
//   gruh,
//   age,
// }: StudentsCardProps) {
//   return (
//     <div className="bg-[#2E3741] text-white rounded-xl p-4  grid grid-cols-2   shadow-md ">
//       <div className="flex justify-start gap-4">
//         <img
//           src={faceMood2}
//           alt=""
//           className="w-[110px] h-[110px] object-cover rounded-lg"
//         />
//         <img
//           src={faceMood1}
//           alt=""
//           className="w-[110px] h-[110px] object-cover rounded-lg"
//         />
//       </div>
//       <div className="flex justify-end">
//         <img src={iconMood1} alt="" className="w-[100px] h-[100px]" />
//       </div>
//       <div>
//         <span>
//           <p className="text-[#8EA1B6] text-[16px] ">O`xshashligi</p>
//           <h2 className="text-[#C9C9C9] text-[20px] ">70.31%</h2>
//         </span>
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">F.I.SH</p>
//           <h2 className="text-[#C9C9C9] ">
//             SAIDKARIMOV SAIDAZIZ SAIDMUROD O‘G‘LI
//           </h2>
//         </span>
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">Fakultet</p>
//           <h2 className="text-[#C9C9C9] ">
//             Amaliy matematika va intellektual texnologiyalar{" "}
//           </h2>
//         </span>
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">Jinsi</p>
//           <h2 className="text-[#C9C9C9] ">Erkak </h2>
//         </span>
//       </div>
//       <div className="flex gap-5 flex-col">
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">Vaqti</p>
//           <h2 className="text-[#C9C9C9] ">2025.05.29 - 19:13:00</h2>
//         </span>
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">Guruh</p>
//           <h2 className="text-[#C9C9C9] ">TM-2101KU</h2>
//         </span>
//         <span>
//           <p className="text-[#8EA1B6] text-[14px] ">Yoshi</p>
//           <h2 className="text-[#C9C9C9] ">22</h2>
//         </span>
//       </div>
//     </div>
//   );
// }

interface StudentsCardProps {
  img1: string; // chapdagi 1-rasm
  img2: string; // chapdagi 2-rasm
  icon: string; // o‘ng tomondagi icon
  similarity: string; // O‘xshashligi %
  fullName: string; // F.I.SH
  fakultet: string; // Fakultet
  jins: string; // Jinsi
  date: string; // Sana/vaqt
  gruh: string; // Guruh
  age: number; // Yoshi
}
export default function StudentsCard({
  img1,
  img2,
  icon,
  similarity,
  fullName,
  fakultet,
  jins,
  date,
  gruh,
  age,
}: StudentsCardProps) {
  return (
    <div className="bg-[#2E3741] text-white rounded-xl p-4 grid grid-cols-2 shadow-md">
      {/* Chap tarafdagi 2ta rasm */}
      <div className="flex justify-start gap-4">
        <img
          src={img1}
          alt=""
          className="w-[120px] h-[120px] object-cover rounded-lg"
        />
        <img
          src={img2}
          alt=""
          className="w-[120px] h-[120px] object-cover rounded-lg"
        />
      </div>

      {/* O‘ng tarafdagi icon */}
      <div className="flex justify-end">
        <img src={icon} alt="" className="w-[100px] h-[100px]" />
      </div>

      {/* Ma’lumotlar chapda */}
      <div className="mt-4">
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">O‘xshashligi</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{similarity}</h2>
        </span>
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">F.I.SH</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{fullName}</h2>
        </span>
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">Fakultet</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{fakultet}</h2>
        </span>
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">Jinsi</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{jins}</h2>
        </span>
      </div>

      <div className="flex gap-5 flex-col mt-5">
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">Vaqti</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{date}</h2>
        </span>
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">Guruh</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{gruh}</h2>
        </span>
        <span>
          <p className="text-[#8EA1B6] text-[16px] ">Yoshi</p>
          <h2 className="text-[#C9C9C9] text-[20px] ">{age}</h2>
        </span>
      </div>
    </div>
  );
}
