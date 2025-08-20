import { useState } from "react";
import { CiGrid42 } from "react-icons/ci";
import { FaHeartPulse } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";

function BottomNav() {
  const [showPromo, setShowPromo] = useState(true); // state to control visibility
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 md:hidden">
      {/* Promo Banner */}
      {showPromo && (
        <div className="bg-blue text-white grid grid-cols-5 gap-4 items-center justify-center w-fit py-2 px-3 text-center rounded-full relative">
          <IoMdClose
            className="size-8 cursor-pointer"
            onClick={() => setShowPromo(false)} // hides banner
          />
          <a
            href="/settings"
            className="col-span-3 text-sm hover:opacity-80 transition"
          >
            <p className="capitalize">Enjoy all features</p>

            <p>Subscribe to Vip</p>
          </a>
        </div>
      )}
      <nav className="flex justify-between w-8/10 font-medium">
        <div className="text-blue flex flex-col items-center">
          <FaHeartPulse className="size-12" /> Home
        </div>

        <div className="bg-[#AFC8FF] text-blue p-3 rounded-full shadow-xl">
          <MdOutlineKeyboardVoice className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <CiGrid42 className="size-12 text-light-blue" strokeWidth={1.2} />
          Explore
        </div>
      </nav>
    </div>
  );
}

export default BottomNav;
