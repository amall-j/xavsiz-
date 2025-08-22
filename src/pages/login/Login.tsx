import { LoginBg, FingerIcon } from "../../assets";
import FaceIcon from "../../assets/FaceIcon";
import PalesIocn from "../../assets/PalesIcon";

export default function Login() {
  return (
    <div
      className="
  grid grid-cols-2 transition-all
      "
    >
      <div className="w-ful">
        <img src={LoginBg} alt="" className="w-full object-cover h-screen" />
      </div>
      <div className="w-full flex flex-col items-center justify-center   bg-white">
        <div className="w-[410px] flex flex-col gap-20 items-center justify-center">
          <div className="flex items-center justify-between  ">
            <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-lg border border-[#C6CAD8] text-[20px] text-[#C6CAD8] hover:bg-[#315EFB] hover:text-white">
              1
            </div>
            {/* <span className="border-b "></span> */}
            <hr className="w-[280px] border-1.5 text-[#C6CAD8]" />
            <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-lg border border-[#C6CAD8] text-[20px] text-[#C6CAD8] hover:bg-[#315EFB] hover:text-white">
              2
            </div>
          </div>
          <div>
            <h1 className="text-[32px] font-medium text-[#343B4C]">
              Identifikatsiya turini tanlang
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center gap-4 group">
              <span className="border border-[#C6CAD8] group-hover:border-[#315EFB] p-2 rounded-lg">
                <FaceIcon className="text-[#C6CAD8] group-hover:text-[#315EFB] transition-colors duration-300" />
              </span>
              <p className="group-hover:text-[#315EFB]">Face ID</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 group">
              <span className="border border-[#C6CAD8] group-hover:border-[#315EFB] p-2 rounded-lg">
                <PalesIocn className="text-[#C6CAD8] group-hover:text-[#315EFB] transition-colors duration-300" />
              </span>
              <p className="group-hover:text-[#315EFB]">Fingerprint scan </p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center bg-[#315EFB] hover:bg-blue-400 transition-all text-white py-2 rounded-lg">
            Keyingisi
          </button>
        </div>
      </div>
    </div>
  );
}
