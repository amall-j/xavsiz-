import {
  Apperance,
  DarsQoldirish,
  DetIcon1,
  faceMood1,
  faceMood2,
  Hijab,
  MachitIcon,
  Maska,
  Maskasvg,
  offenbicon1,
  offenbicon2,
  Soqol,
} from "../assets";

const universityDashboard = [
  {
    id: 1,
    title: "Talabalar hozirgi kayfiyati bo‘yicha",
    icon: DetIcon1,
    number: 6236,
    link: "/university/:id/studentsmood",
  },
  {
    id: 2,
    title: "Dars vaqtida masjidga chiqqan talabalar",
    icon: MachitIcon,
    number: 5,
    link: "/university/:id/mechet",
  },
  { id: 3, title: "Odamlar gavjumligi", icon: DetIcon1, number: 2, link: "" },
  {
    id: 4,
    title: "Janjallar va mushtlashuvlar",
    icon: DetIcon1,
    number: 2,
    link: "",
  },
  {
    id: 5,
    title: "OTM hududiga kirgan begona shaxslar",
    icon: DetIcon1,
    number: 91,
    link: "",
  },
  {
    id: 6,
    title: "Talabalar tashqi ko‘rinishi bo‘yicha",
    icon: Apperance,
    link: "/university/:id/appearance",
    number: 54,
  },
  {
    id: 7,
    title: "Darsga 5 va undan ortiq kun kelmagan talabalar",
    icon: DarsQoldirish,
    number: 8,
    link: "/university/:id/leave",
  },
  {
    id: 8,
    title: "Kampus hududida topilmagan talabalar",
    icon: DetIcon1,
    number: 1,
    link: "",
  },
  {
    id: 9,
    title: "Yotoqxonada begona odamlarning bo‘lishi",
    icon: DetIcon1,
    number: 0,
    link: "",
  },
  {
    id: 10,
    title: "Hodisa bo‘yicha ko‘rilgan chora-tadbirlar",
    icon: DetIcon1,
    number: 3712,
    link: "",
  },
  { id: 11, title: "Umumiy talaba", icon: DetIcon1, link: "", number: 50391 },
  { id: 12, title: "O‘qituvchilar", link: "", icon: DetIcon1, number: 11235 },
  {
    id: 13,
    title: "Chet elga chiqib ketgan talabalar",
    link: "",
    icon: DetIcon1,
    number: 626,
  },
  {
    id: 14,
    title: "Uzoq muddatli ta’tilga chiqqan talabalar",
    icon: DetIcon1,
    number: 329,
    link: "",
  },
  {
    id: 15,
    title: "Ijara sharoitida yashayotgan talabalar",
    icon: DetIcon1,
    number: 8587,
    link: "",
  },
  {
    id: 16,
    title: "Yotoqxonada yashayotgan talabalar",
    icon: DetIcon1,
    number: 8885,
    link: "",
  },
  {
    id: 17,
    title: "Tarixiy hududlarda yashayotgan talabalar",
    icon: DetIcon1,
    number: 112,
    link: "",
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

const OffensStudents = [
  {
    icon: offenbicon1,
    title: "Profilaktik hisobda turadigan talabalar",
    number: 0,
  },
  { icon: offenbicon2, title: "Sudlangan talabalar", number: 0 },
  {
    icon: offenbicon1,
    title: "Talabalar tomonidan sodir etilgan jinoyatlar",
    number: 2,
  },
  {
    icon: offenbicon2,
    title: "Narkologiya dispanseri ro`yxatida turuvchi talabalar",
    number: 250,
  },
  {
    icon: offenbicon1,
    title: "Ruhiy asab kasalliklari dispanseri ro`yxatida turuvchi talabalar",
    number: 3,
  },
];

const tashqikurinish1 = [
  {
    title: "Hijobda kelgan talabalar",

    icon: Hijab,
    number: 0,
  },
  {
    title: "Betartib soqol qo‘ygan talabalar",

    icon: Soqol,
    number: 0,
  },

  {
    title: "Maskada kelgan talabalar",
    icon: Maska,
    number: 10,
  },
];

const tashqikurinish2 = [
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
  {
    img: faceMood1,
    fullName: "KARIMJONOVFARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    icon: Maskasvg,
  },
];

const machitStudent = [
  // 1-kun (2025-05-02)
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 92.5,
    fullName: "KARIMJONOV FARRUX IXLOS O‘G‘LI",
    fakultet: "Geografiya",
    grux: "KKU-2205",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.02 - 05:00:00", // Bomdod
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 88.1,
    fullName: "ABDULLAEV JASUR SHAVKAT O‘G‘LI",
    fakultet: "Tarix",
    grux: "TTU-2104",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.02 - 13:00:00", // Peshin
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 81.6,
    fullName: "RAHMONOVA GULBAHOR AZIZ QIZI",
    fakultet: "Matematika",
    grux: "MMU-2301",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.02 - 16:30:00", // Asr
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 79.4,
    fullName: "SAIDOV AZIZBEK MANSUR O‘G‘LI",
    fakultet: "Fizika",
    grux: "FFU-2206",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.02 - 19:00:00", // Shom
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 84.2,
    fullName: "QODIROVA NOZIMA ISLOM QIZI",
    fakultet: "Kimyo",
    grux: "KKU-2207",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.02 - 21:00:00", // Xufton
  },

  // 2-kun (2025-05-03)
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 91.3,
    fullName: "ISMOILOV DAVRON ERKIN O‘G‘LI",
    fakultet: "Informatika",
    grux: "IIU-2203",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.03 - 05:00:00", // Bomdod
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 87.5,
    fullName: "KARIMOVA SEVINCH BOBUR QIZI",
    fakultet: "Biologiya",
    grux: "BBU-2102",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.03 - 13:00:00", // Peshin
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 83.4,
    fullName: "XOLIQOV NODIRBEK SHUKUR O‘G‘LI",
    fakultet: "Huquq",
    grux: "HHU-2208",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.03 - 16:30:00", // Asr
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 80.6,
    fullName: "JURAEVA NILUFAR OYBEK QIZI",
    fakultet: "Psixologiya",
    grux: "PPU-2304",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.03 - 19:00:00", // Shom
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 85.9,
    fullName: "TOSHQULOV UMID SHAVKAT O‘G‘LI",
    fakultet: "Sport",
    grux: "SSU-2105",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.03 - 21:00:00", // Xufton
  },

  // 3-kun (2025-05-04)
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 90.7,
    fullName: "YUSUPOVA MADINA QODIR QIZI",
    fakultet: "Filologiya",
    grux: "FFU-2209",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.04 - 05:00:00", // Bomdod
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 82.8,
    fullName: "MIRZAYEV SHERZOD JAHONGIR O‘G‘LI",
    fakultet: "Tarjima",
    grux: "TTU-2101",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.04 - 13:00:00", // Peshin
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 80.2,
    fullName: "ABDURAHMONOV DILSHOD ILHOM O‘G‘LI",
    fakultet: "Iqtisod",
    grux: "IIU-2202",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.04 - 16:30:00", // Asr
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 86.4,
    fullName: "HAMROYEVA AZIZA RUSTAM QIZI",
    fakultet: "Arxitektura",
    grux: "AAU-2307",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.04 - 19:00:00", // Shom
  },
  {
    img1: faceMood1,
    img2: faceMood2,
    foiz: 84.0,
    fullName: "RUSTAMOV SHERALI BOTIR O‘G‘LI",
    fakultet: "Qurilish",
    grux: "QQU-2203",
    machitTitle: "Исломобод масжиди Сағбон кўчаси 244-уй",
    date: "2025.05.04 - 21:00:00", // Xufton
  },

  // ⚡️ Shu tartibda 2025.05.05, 05.06, 05.07, 05.08 kunlari ham yoziladi...
];

export {
  universityDashboard,
  machitStudent,
  OffensStudents,
  tashqikurinish1,
  tashqikurinish2,
};
