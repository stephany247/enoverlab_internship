import React, { useState } from "react";

const navList = ["All", "Movies", "Audiobooks", "Podcast", "Sports"];

export default function NavList() {
  const [active, setActive] = useState(navList[0]);

  return (
    <div className="overflow-x-auto no-scrollbar -mx-2 mb-5">
      <nav className="flex justify-between whitespace-nowrap md:space-x-10 md:p-2 gap-2 px-2 bg-white  shadow-lg text-xs md:text-lg rounded-lg md:rounded-2xl">
        {navList.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item)}
            className={`min-w-max text-center cursor-pointer p-2 rounded-md transition-all duration-200 ${
              active === item ? "bg-blue text-white" : null
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
}
