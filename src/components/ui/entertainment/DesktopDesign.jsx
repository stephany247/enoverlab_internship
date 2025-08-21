import React, { useState } from "react";
import sheldonImg from "../../../assets/sheldonImg.png";
import adolescentImg from "../../../assets/adolescentImg.png";
import houseGuradImg from "../../../assets/houseGuardImg.png";
import kravenImg from "../../../assets/kravenImg.png";
import TaleImg from "../../../assets/TaleImg.png";
import adamImg from "../../../assets/adamImg.png";
import anasiImg from "../../../assets/anasiImg.png";
import africaImg from "../../../assets/africaImg.png";
import africaqueen from "../../../assets/africaqueen.png";
import africaqueen2 from "../../../assets/africaqueen2.png";
import africaqueen3 from "../../../assets/africaqueen3.png";

import loveImg from "../../../assets/loveImg.png";
import battleImg from "../../../assets/battleImg.png";
import ajosope from "../../../assets/ajosope.png";
import clear from "../../../assets/clear.png";

const navList = ["All", "Movies", "Music", "Audiobooks", "Podcast", "Sports"];

const sceneImages = [loveImg, battleImg, ajosope, clear];
const nextWatch = [TaleImg, adamImg, anasiImg, africaImg];
const topShows = [
  africaqueen,
  africaqueen2,
  africaqueen3,
  battleImg,
  ajosope,
  clear,
  anasiImg,
  africaImg,
];
const filterByLatest = ["Trending", "Comming Soon ", "Download"];
const filterByCategories = [
  "Action",
  "Horror",
  "Comedy",
  "Sci-fi",
  "Thriller",
  "Fantasy ",
];

const DesktopDesign = () => {
  const [active, setActive] = useState("All");
  const [activeLatest, setActiveLatest] = useState("Trending");
  const [activeCategories, setActiveCategories] = useState("Action");

  return (
    <main className="hidden md:grid  md:grid-cols-3 gap-x-4 py-8">
      {/* Main Content */}
      <div className="col-span-2 space-y-6">
        {/* Heading */}
        <section className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">
            Get <span className="text-blue">ready to level up </span>your fun!
          </h1>
        </section>

        {/* Nav Buttons */}
        <section className="bg-white p-1 overflow-x-auto rounded-xl lg:w-fit">
          <div className="flex lg:space-x-2">
            {navList.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`p-2 text-xs lg:text-sm rounded-md cursor-pointer transition-all ${
                  active === item
                    ? "bg-blue text-white"
                    : " text-gray-700 hover:bg-blue/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-2xl">
          {/* Scene Section */}
          <section className="bg-white py-4 px-5 rounded-2xl ">
            <h2 className="lg:text-2xl md:text-sm font-bold mb-5 md:mb-0 lg:mb-4">
              Continue Watching
            </h2>
            <div className="overflow-x-auto md:grid md:grid-cols-4 md:gap-10 lg:gap-4  no-scrollbar mt-4">
              {sceneImages.map((scene, idx) => (
                <div
                  key={idx}
                  className="md:w-20 lg:w-full h-40  lg:h-full  rounded-xl"
                >
                  <img
                    src={scene}
                    alt={`scene-${idx}`}
                    className="w-full h-full object-contain rounded-xl cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Devices */}
          <section className="bg-white py-4 px-5 rounded-2xl shadow-sm">
            <h2 className="lg:text-2xl md:text-sm font-bold mb-4">
              Your Next Watch
            </h2>
            <div className="overflow-x-auto md:grid md:grid-cols-4 md:gap-26 lg:gap-4 no-scrollbar mt-4">
              {nextWatch.map((scene, idx) => (
                <div
                  key={idx}
                  className="md:w-24 lg:w-full h-40  lg:h-full  rounded-xl "
                >
                  <img
                    src={scene}
                    alt={`scene-${idx}`}
                    className="w-full h-full object-contain rounded-xl cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Top Shows Section */}
          <section className="bg-white py-4 px-5 rounded-2xl ">
            <h2 className="lg:text-2xl md:text-sm font-bold mb-4">
              Top 10 TV Shows in Nigeria Today
            </h2>

            <div className="flex overflow-x-auto space-x-6 no-scrollbar md:ms-4 lg:ms-10">
              {topShows.map((scene, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-40 h-40 lg:w-60 lg:h-60 rounded-xl"
                >
                  <img
                    src={scene}
                    alt={`scene-${idx}`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Sidebar (Desktop Only) */}
      <section className=" h-fit hidden md:block space-y-10">
        <div className="flex bg-white p-6 rounded-2xl flex-col space-y-2">
          {filterByLatest.map((item, idk) => {
            return (
              <div key={idk}>
                <button
                  className={`${
                    activeLatest === item
                      ? "bg-blue text-white"
                      : " text-black hover:bg-blue/10"
                  } p-2 rounded-lg cursor-pointer text-sm`}
                  onClick={() => setActiveLatest(item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex bg-white p-6 rounded-2xl flex-col space-y-1">
          <div className="mb-4">
            <h2>Categories</h2>
          </div>

          {filterByCategories.map((item, idk) => {
            return (
              <div key={idk} className="">
                <button
                  className={` ${
                    activeCategories === item
                      ? "bg-blue text-white"
                      : " text-black hover:bg-blue/10"
                  } md:p-2 lg:p-2 rounded-lg cursor-pointer text-sm`}
                  onClick={() => setActiveCategories(item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default DesktopDesign;
