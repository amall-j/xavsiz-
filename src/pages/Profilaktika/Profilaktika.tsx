// import { Info } from "lucide-react";
// import { CustomTable } from "../../components/Table";
// import CustomSelect from "../../components/CustumSelect";
// import { useState } from "react"; // Import useState to manage select state

// // Jadval uchun mock data
// const data = [
//   {
//     id: 1,
//     userImg: "https://i.pravatar.cc/50?img=1",
//     eventImg: "https://picsum.photos/100/60",
//     participant1: "Abdullayev Og‘abek.U",
//     participant2: "Muxtarov Abbos.S",
//     date: "15:12:25 2025-05-01",
//     university: "O‘zMU",
//     eventType: "Urush va janjallar",
//     comment: "Camera 1 nimadir profilaktika qildi",
//     holat: "Yangi",
//   },
//   {
//     id: 2,
//     userImg: "https://i.pravatar.cc/50?img=2",
//     eventImg: "https://picsum.photos/100/61",
//     participant1: "Meliboyev Jahongir.U",
//     participant2: "Muxtarov Abbos.S",
//     date: "15:12:25 2025-05-01",
//     university: "O‘zMU",
//     eventType: "Urush va janjallar",
//     comment: "Camera 1 nimadir profilaktika qildi",
//     holat: "Jarayonda",
//   },
// ];

// // Jadval ustunlari
// const columns = [
//   {
//     key: "id",
//     title: "№",
//     align: "center" as const,
//     render: (_: any, row: any, idx: number) => <span>{row.id}</span>,
//   },
//   {
//     key: "userImg",
//     title: "Rasm",
//     align: "center" as const,
//     render: (value: string) => (
//       <img
//         src={value}
//         alt="user"
//         className="w-10 h-10 rounded-full object-cover mx-auto"
//       />
//     ),
//   },
//   {
//     key: "eventImg",
//     title: "Biriktirilgan foto",
//     align: "center" as const,
//     render: (value: string) => (
//       <img
//         src={value}
//         alt="event"
//         className="w-16 h-10 rounded-md object-cover mx-auto"
//       />
//     ),
//   },
//   {
//     key: "participants",
//     title: "Qatnashuvchilar",
//     align: "center" as const,
//     render: (_: any, row: any) => (
//       <div className="flex items-center gap-3">
//         <p className="bg-[#37414C] px-3 py-2 rounded-md">{row.participant1}</p>
//         <p className="bg-[#37414C] px-3 py-2 rounded-md">{row.participant2}</p>
//       </div>
//     ),
//   },
//   {
//     key: "date",
//     title: "Yaratilgan vaqt",
//     align: "center" as const,
//   },
//   {
//     key: "university",
//     title: "Universitet nomi",
//     align: "center" as const,
//   },
//   {
//     key: "eventType",
//     title: "Hodisa turi",
//     align: "center" as const,
//     render: (value: string) => (
//       <span className="bg-[#37414C] px-3 py-2 rounded-md">{value}</span>
//     ),
//   },
//   {
//     key: "comment",
//     title: "Izoh",
//     align: "center" as const,
//     render: (value: string) => (
//       <div className="flex items-center justify-center gap-2">
//         <span>{value}</span>
//         <Info size={18} className="text-gray-400 cursor-pointer" />
//       </div>
//     ),
//   },
//   {
//     key: "holat",
//     title: "Holat",
//     align: "center" as const,
//     render: (value: string, row: any) => {
//       // Define options for the select
//       const options = ["Yangi", "Jarayonda"];

//       // Define the onChange handler
//       const handleChange = (newValue: string) => {
//         // Update the data state (this assumes you have a way to update the data)
//         // For simplicity, we'll log the change here; in a real app, update the state
//         console.log(`Row ${row.id} holat changed to: ${newValue}`);
//       };

//       // Conditional background color based on the value
//       const selectClassName =
//         value === "Yangi" ? "bg-blue-600" : "bg-yellow-500";

//       return (
//         <CustomSelect
//           value={value}
//           onChange={handleChange}
//           options={options}
//           placeholder="Holatni tanlang"
//           className={selectClassName}
//         />
//       );
//     },
//   },
// ];

// export default function Profilaktika() {
//   // State to manage data updates
//   const [tableData, setTableData] = useState(data);

//   // Handle select change for updating the holat value
//   const handleHolatChange = (id: number, newValue: string) => {
//     setTableData((prevData) =>
//       prevData.map((row) => (row.id === id ? { ...row, holat: newValue } : row))
//     );
//   };

//   return (
//     <div className="p-6">
//       <CustomTable
//         title="Profilaktika hodisalari"
//         columns={columns.map((column) =>
//           column.key === "holat"
//             ? {
//                 ...column,
//                 render: (value: string, row: any) => {
//                   const options = ["Yangi", "Jarayonda"];
//                   const selectClassName =
//                     value === "Yangi" ? "bg-blue-600" : "bg-yellow-500";

//                   return (
//                     <CustomSelect
//                       value={value}
//                       onChange={(newValue) =>
//                         handleHolatChange(row.id, newValue)
//                       }
//                       options={options}
//                       placeholder="Holatni tanlang"
//                       className={selectClassName}
//                     />
//                   );
//                 },
//               }
//             : column
//         )}
//         data={tableData}
//         showPagination={true}
//         currentPage={1}
//         totalPages={5}
//         className={``}
//         onPageChange={(page) => console.log("page", page)}
//       />
//     </div>
//   );
// }

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
];

const columns = [
  { key: "id", title: "№", align: "center" as const },
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
        <p className="bg-[#37414C] px-3 py-2 rounded-md">{row.participant1}</p>
        <p className="bg-[#37414C] px-3 py-2 rounded-md">{row.participant2}</p>
      </div>
    ),
  },
  { key: "date", title: "Yaratilgan vaqt", align: "center" as const },
  { key: "university", title: "Universitet nomi", align: "center" as const },
  {
    key: "eventType",
    title: "Hodisa turi",
    align: "center" as const,
    render: (v: string) => (
      <span className="bg-[#37414C] px-3 py-3 rounded-md">{v}</span>
    ),
  },
  {
    key: "comment",
    title: "Izoh",
    align: "center" as const,
    render: (v: string) => (
      <div className="flex items-center justify-center gap-2">
        <span>{v}</span>
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
      handleHolatChange: (id: number, newValue: string) => void
    ) => {
      const options = ["Yangi", "Jarayonda"];
      const selectClassName =
        value === "Yangi" ? "bg-blue-600" : "bg-yellow-500";
      return (
        <CustomSelect
          value={value}
          onChange={(newValue) => handleHolatChange(row.id, newValue)}
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
      handleHolatChange: (id: number, newValue: string) => void
    ) => {
      const options = ["Uchrashuv belgilash", "Suxbat qurish"];
      return (
        <CustomSelect
          value={value}
          onChange={(newValue) => handleHolatChange(row.id, newValue)}
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

  // har bir sahifada nechta qator ko‘rsatilsin
  const rowsPerPage = 5;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // joriy sahifaga tegishli datani olish
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
    <div className="p-6">
      <CustomTable
        title="Profilaktika hodisalari"
        columns={columns.map((col) =>
          col.key === "holat"
            ? {
                ...col,
                render: (val: string, row: any) =>
                  col.render!(val, row, handleHolatChange),
              }
            : col
        )}
        data={paginatedData}
        showPagination={true}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
      />
    </div>
  );
}
