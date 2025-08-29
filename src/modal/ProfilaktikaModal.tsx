import { ArrowLeft, X } from "lucide-react";
import { StudentImg } from "../assets";
import { useState } from "react";
import CustomSelect from "../components/CustumSelect";
import { FaImage } from "react-icons/fa";
import axios from "axios";

interface ProfilaktikaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

export default function ProfilaktikaModal({
  isOpen,
  onClose,
  data,
}: ProfilaktikaModalProps) {
  if (!isOpen) return null;
  console.log(data);

  const [date, setDate] = useState("");
  const [university, setUniversity] = useState("");
  const [hodisaTuri, setHodisaTuri] = useState("");
  const [participants, setParticipants] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [izoh, setIzoh] = useState(""); // tashqaridagi izoh uchun

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("date", date);
      formData.append("university", university);
      formData.append("hodisaTuri", hodisaTuri);
      formData.append("participants", participants);
      formData.append("izoh", izoh);

      if (image) {
        formData.append("image", image);
      }

      // 👉 API ga yuborish
      const res = await axios.post(
        "http://localhost:5000/api/profilaktika",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Yuborildi:", res.data);

      // Modalni yopish
      onClose();
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 ">
      <div className="bg-[#192129] rounded-2xl text-white flex flex-col gap-5 max-w-[1200px] w-full p-6 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <ArrowLeft size={30} />
            <h1 className="text-2xl font-medium">
              Hodisaga profilaktika tuzish
            </h1>
          </div>
          <X size={30} onClick={onClose} className="cursor-pointer" />
        </div>

        <hr className="border-2 border-white w-full " />

        <div className="flex items-start gap-4 overflow-y-hidden">
          {/* Chap blok (hodisa preview) */}
          <div className="bg-[#2E3741] p-10 min-w-[450px] rounded-2xl overflow-hidden">
            <h1 className="text-[20px] font-bold">Tanlangan hodisa</h1>
            <div className="grid grid-cols-2 mt-5 ">
              <div className="flex items-center justify-center flex-col gap-6 ">
                <div className="flex items-center justify-center gap-3">
                  <span className="w-[70px] h-[70px] flex items-center justify-center rounded-full overflow-hidden ">
                    <img
                      src={StudentImg}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <h1 className="max-w-[150px]">
                    Kasimov Shohrux Azizbekovich
                  </h1>
                </div>
                <div className="mt-2 flex items-center justify-center -translate-x-5">
                  <span>
                    <p className="text-[#8EA1B6] text-[16px] ">Kamera nomi</p>
                    <h2 className="text-[#C9C9C9] text-[20px] ">
                      Kamera nomi yoziladi
                    </h2>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end flex-col gap-6">
                <div>
                  <h2 className="text-[#C9C9C9] text-[20px] ">
                    16:14:54 19.05.2025
                  </h2>
                  <div className="mt-3 py-3 px-4 flex items-center justify-center gap-2 bg-[#37414C]  rounded-[8px] w-max">
                    <p className="text-white text-[18px] flex items-center gap-2 ">
                      Urush va janjallar
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#8EA1B6] text-[16px] ">
                    Kamera joylashuvi
                  </p>
                  <h2 className="text-[#C9C9C9] text-[20px] ">Oshxona</h2>
                </div>
              </div>

              <div className="col-span-2 mt-3 w-full h-full object-contain">
                <video
                  src="https://www.w3schools.com/html/movie.mp4"
                  controls
                  autoPlay
                  className="w-full rounded-md"
                ></video>
              </div>
            </div>
          </div>

          {/* O‘ng blok (forma) */}
          <div className="bg-[#2E3741] p-10 min-w-[450px] h-[640px] ">
            <h1 className="text-[20px] font-bold mb-5">Profilaktika tuzish</h1>

            {/* Form ichida input/select/file */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Sana */}
              <div>
                <p className="text-[#8EA1B6] text-[16px]">Yaratilgan sana</p>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-[#37414C] rounded p-2 w-full border-none outline-none"
                />
              </div>

              {/* Universitet + Hodisa turi */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-[#8EA1B6] text-[16px]">Universitet</p>
                  <CustomSelect
                    value={university}
                    onChange={setUniversity}
                    options={["TATU", "SamDU", "O‘zMU", "Buxoro ITTU", "NamDU"]}
                    placeholder="Tanlang"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-[#8EA1B6] text-[16px]">Hodisa turi</p>
                  <CustomSelect
                    value={hodisaTuri}
                    onChange={setHodisaTuri}
                    options={["Janjal", "Gavjumlik", "Kech qolish", "Boshqa"]}
                    placeholder="Tanlang"
                  />
                </div>
              </div>

              {/* Qatnashuvchilar */}
              <div>
                <p className="text-[#8EA1B6] text-[16px]">Qatnashuvchilar</p>
                <CustomSelect
                  value={participants}
                  onChange={setParticipants}
                  options={["Aziz", "Akmal", "Jonibek", "Vadim"]}
                  placeholder="Tanlang"
                  className="w-full text-[#8EA1B6]"
                />
              </div>

              {/* Rasm */}
              <div>
                <p className="text-[#8EA1B6] text-[16px] mb-2">Rasm yuklash</p>
                <input
                  type="file"
                  accept="image/*"
                  id="upload-image"
                  onChange={(e) =>
                    e.target.files && setImage(e.target.files[0])
                  }
                  className="hidden"
                />
                <label
                  htmlFor="upload-image"
                  className="flex flex-col items-center justify-center w-full  border-2 border-dashed border-[#0095FF] rounded-lg cursor-pointer py-15 hover:bg-[#0095FF]/10 transition"
                >
                  <FaImage className="text-[#0095FF]" size={22} />
                  <span className="text-[#0095FF] underline">
                    Rasm yuklash uchun bosing
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Izoh va Submit form tashqarida */}
        <div>
          <p className="text-[#8EA1B6] text-[16px] mb-2">Izoh</p>
          <div className="bg-[#2E3741] rounded-[12px]">
            <textarea
              value={izoh}
              onChange={(e) => setIzoh(e.target.value)}
              className="bg-[#37414C] w-full p-3 rounded-md outline-none resize-none"
              rows={3}
              placeholder="Izoh kiriting..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-[#0095FF] hover:bg-[#0077CC] px-6 py-2 rounded-lg font-semibold"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
