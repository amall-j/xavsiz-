import {
  Siren,
  ChartColumnIncreasing,
  ChartColumnDecreasing,
  House,
  Award,
  ThumbsUp,
  ThumbsDown,
  Check,
} from "lucide-react";


const data = [
    { title: "Andijon viloyati", percentage: 20 },
    { title: "Buxoro viloyati", percentage: 20 },
    { title: "Jizzax viloyati", percentage: 20 },
    { title: "Namangan viloyati", percentage: 90 },
    { title: "Navoiy viloyati", percentage: 20 },
    { title: "Qashqadaryo viloyati", percentage: 20 },
    { title: "Qoraqalpog'iston Resp.", percentage: 20 },
    { title: "Samarqand viloyati", percentage: 70 },
    { title: "Sirdaryo viloyati", percentage: 20 },
    { title: "Surxondaryo viloyati", percentage: 20 },
    { title: "Toshkent viloyati", percentage: 20 },
    { title: "Xorazm viloyati", percentage: 20 },
    { title: "Toshkent shahri", percentage: 0 },
  ];

  const statisticsData = [
    { icon: <Siren />, title: "Umumiy inspektorlar soni", num: "84" },
    {
      icon: <ChartColumnIncreasing />,
      title: "O'rtacha ijobiy KPI ko'rsatkichi Respublika kesimida",
      num: "20 ball",
    },
    {
      icon: <ChartColumnDecreasing />,
      title: "O'rtacha salbiy KPI ko'rsatkichi Respublika kesimida",
      num: "0 ball",
    },
    {
      icon: <House />,
      title: "“Qoniqarsiz” ko'rsatkichli universitetlar soni",
      num: "58",
    },
    { icon: <Award />, title: "“A’lo” ko'rsatkichli inspektorlar", num: "0" },
    { icon: <ThumbsUp />, title: "“Yaxshi” ko'rsatkichli inspektorlar", num: "0" },
    { icon: <Check />, title: "“Qoniqarli” ko'rsatkichli inspektorlar", num: "0" },
    {
      icon: <ThumbsDown />,
      title: "“Qoniqarsiz” ko'rsatkichli inspektorlar",
      num: "84",
    },
  ];

  const negativeKPIData = [
    {
      percentage: "%",
      color: "#D63031",
      title:
        "Xizmat intizomiga rioya etmaslik (xizmatga uzrli sababsiz chiqmaslik, xizmatga kech kelish, xizmat joyini o'zboshimchalik bilan tashlab ketish)",
    },
    {
      percentage: "%",
      color: "#891EDA",
      title:
        "O'tkazgan tergovga qadar tekshiruv materiallari bo'yicha qabul qilingan qaror prokuratura tomonidan bekor qilinishi",
    },
    {
      percentage: "%",
      color: "#0967E3",
      title: "Talabalar tomonidan jinoyat sodir etilishi",
    },
  ];

  const leftCards = [
    {
      percentage: "0%",
      color: "#FF5C5C",
      title:
        "Huquqbuzarlikni sodir etish sabablari hamda uni sodir etishgan talabalar",
      index: "1)",
    },
    {
      percentage: "0%",
      color: "#67F3C1",
      title: "Profilaktik hisobga olish",
      index: "2)",
    },
    {
      percentage: "0%",
      color: "#97FF67",
      title: "Rasmiylashtirilgan himoya orderi",
      index: "3)",
    },
    {
      percentage: "0%",
      color: "#FFC857",
      title: "Ko'rib chiqilgan murojaatlar",
      index: "4)",
    },
    {
      percentage: "0%",
      color: "#B48EFC",
      title:
        "Ijarada yashayotgan talabalar turmush tarzini o'rganish (dalolatnoma asosida)",
      index: "5)",
    },
    {
      percentage: "0%",
      color: "#FF6AB7",
      title: "O'tkazilgan profilaktik suhbatlar",
      index: "6)",
    },
  ];

  const rightCards = [
    {
      percentage: "0%",
      color: "#7CE0FF",
      title:
        "Talabalar orasidan diniy ekstremistik oqimlarga xayrixoh bo'lganlari aniqlanganda",
      index: "7)",
    },
    {
      percentage: "0%",
      color: "#52B2FF",
      title:
        "Tashabbusiga ko'ra tashkil etilgan huquqiy targ'ibot tadbirlari (davra suhbati, seminar)",
      index: "8)",
    },
    {
      percentage: "0%",
      color: "#6EF57F",
      title: "Tashkil etilgan sport tadbirlarida faol ishtirok etish",
      index: "9)",
    },
    {
      percentage: "0%",
      color: "#FCA858",
      title: "Tashabbusiga asoslanib tashkil etilgan madaniy tadbirlar",
      index: "10)",
    },
    {
      percentage: "0%",
      color: "#A0A0F2",
      title:
        "Ommaviy axborot vositalari va ijtimoiy tarmoqlarda ijobiy ishlarga oid chiqishlar",
      index: "11)",
    },
    {
      percentage: "100%",
      color: "#A4E36D",
      title: "Talabalar o'rtasidagi jinoyatchilik holati",
      index: "12)",
    },
  ];


export { data, statisticsData, negativeKPIData, leftCards, rightCards };