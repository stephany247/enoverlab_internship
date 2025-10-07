import { CiGrid42 } from "react-icons/ci";
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 md:hidden">
      <nav className="flex justify-between w-8/10 font-medium">
        <Link to="/" className="text-blue flex flex-col items-center">
          <FaHeartPulse className="size-12" /> Home
        </Link>

        <div className="bg-[#AFC8FF] text-blue p-3 rounded-full shadow-xl">
          <MdOutlineKeyboardVoice className="size-12" />
        </div>
        <Link to="/explore" className="flex flex-col items-center">
          <CiGrid42 className="size-12 text-light-blue" strokeWidth={1.2} />
          Explore
        </Link>
      </nav>
    </div>
  );
}

export default BottomNav;
