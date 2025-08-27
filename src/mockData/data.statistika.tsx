import {
  Apperance,
  DetIcon1,
  faceMood1,
  faceMood2,
  Hijab,
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
    icon: DetIcon1,
    number: 5,
    link: "",
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
    icon: DetIcon1,
    number: 8,
    link: "",
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
export {
  universityDashboard,
  OffensStudents,
  tashqikurinish1,
  tashqikurinish2,
};
