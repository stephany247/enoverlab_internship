import React, { useState } from "react";

const navList = ["All", "Movies", "Audiobooks", "Podcasts", "Sports"];

export default function NavList() {
  const [active, setActive] = useState(navList[0]);

  return (
    <div className="overflow-x-auto no-scrollbar ">
      <nav className="flex items-center justify-between text-xs p-1 shadow bg-white mb-2 ">
        {navList.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item)}
            className={`p-2 rounded-md text-gray-text ${
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
