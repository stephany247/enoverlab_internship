import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Promo() {
  const [showPromo, setShowPromo] = useState(true); // state to control visibility

  return (
    <div className="flex items-center justify-center md:hidden">
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
    </div>
  );
}

export default Promo;
