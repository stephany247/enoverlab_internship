import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { IoMdMic } from "react-icons/io";
import blackAdam from "../../../assets/blackAdam.png";
import theWaiter from "../../../assets/theWaiter.png";
import oneNight from "../../../assets/oneNight.png";
import NavList from "./NavList";

const categoriesList = ["Latest", "coming Soon", "Download"];
const movieCategories = [
  "All",
  "Action",
  "horror",
  "comedy",
  "Thriller",
  "Musical",
];

const recentlyWacthed = [
  { id: 1, img: blackAdam, text: "Black Adam" },
  { id: 2, img: theWaiter, text: "The Waiter" },
  { id: 3, img: oneNight, text: "One Night" },
  { id: 4, img: blackAdam, text: "Black Adam" },
  { id: 5, img: theWaiter, text: "The Waiter" },
];

const bars = [1, 2, 3];

export default function MobileDesign() {
  return (
    <header className="space-y-4 md:hidden -mx-4 w-screen">
      {/* Top Header Row */}
      <div className="flex justify-between items-center px-4">
        <h1 className="font-bold text-lg w-[70%]">
          Get <span className="text-blue">ready to level up </span>your fun!
        </h1>
        <img
          src={assets.profilePic}
          alt="Profile"
          className="rounded-md w-10 h-10 object-cover shadow-md"
        />
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center shadow-lg p-3 rounded-lg bg-white mx-4">
        <div className="flex items-center gap-2 flex-1">
          <img src={assets.ai_bot} alt="AI Bot" className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search, See trending stories"
            className="placeholder-black placeholder:text-sm text-black bg-transparent outline-none w-full"
          />
        </div>
        <IoMdMic className="text-blue text-xl ml-3" />
      </div>

      {/* Navigation Tabs */}
      <NavList />

      <MainMobile />
    </header>
  );
}

function MainMobile() {
  const [activeCategory, setActiveCategory] = useState(categoriesList[0]);
  const [activeMovieCategories, setActiveMovieCategories] = useState(
    movieCategories[0]
  );

  const [activeBar, setActiveBar] = useState(0);

  function handleBtnBar(index) {
    console.log(index);
    setActiveBar(index);
  }

  return (
    <div>
      <div className="flex justify-between p-2 gap-2 bg-white shadow-lg text-xs rounded-lg mb-5 ">
        {categoriesList.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(item)}
            className={`flex-1 text-center cursor-pointer p-2 rounded-md ${
              activeCategory === item ? "bg-blue text-white" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-3">
        <img src={assets.mobileCatImg} alt="cinema image" />
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {bars.map((_, index) => (
          <span
            key={index}
            onClick={() => handleBtnBar(index)}
            className={`${
              activeBar === index
                ? "bg-blue h-0.5 w-8 block"
                : " bg-black h-0.5 w-4 block"
            }   `}
          ></span>
        ))}
      </div>

      <div className="flex justify-between overflow-x-auto whitespace-nowrap gap-2 bg-white shadow-lg text-xs rounded-lg mb-5  no-scrollbar">
        {movieCategories.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveMovieCategories(item)}
            className={`min-w-max  px-4 py-2 text-center cursor-pointer rounded-md transition-all duration-200 ${
              activeMovieCategories === item
                ? "bg-blue text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="overflow-x-auto no-scrollbar mb-5 space-y-4">
        <h2 className="font-semibold text-sm">Recently Watched</h2>
        <div className="flex whitespace-nowrap gap-3 px-2">
          {recentlyWacthed.map((item, index) => (
            <div key={item.id} className="min-w-[120px] space-y-3">
              <img
                src={item.img}
                alt={`item-${index}`}
                className="h-36 w-full object-cover rounded-2xl"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
