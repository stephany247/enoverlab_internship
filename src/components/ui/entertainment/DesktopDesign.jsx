import React, { useState } from "react";
import sheldonImg from "../../../assets/sheldonImg.png";
import adolescentImg from "../../../assets/adolescentImg.png";
import houseGuradImg from "../../../assets/houseGuardImg.png";
import kravenImg from "../../../assets/kravenImg.png";
import TaleImg from "../../../assets/TaleImg.png";
import adamImg from "../../../assets/adamImg.png";
import anasiImg from "../../../assets/anasiImg.png";
import africaImg from "../../../assets/africaImg.png";

import loveImg from "../../../assets/loveImg.png";
import battleImg from "../../../assets/battleImg.png";
import ajosope from "../../../assets/ajosope.png";
import clear from "../../../assets/clear.png";
import ghost from "../../../assets/ghost.png";

const navList = ["All", "Movies", "Music", "Audiobooks", "Podcast", "Sports"];

const sceneImages = [loveImg, battleImg, ajosope, clear];
const nextWatch = [TaleImg, adamImg, anasiImg, africaImg];
const topShows = [TaleImg, adamImg, anasiImg];
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
        <section className="bg-white p-4 rounded-xl shadow-sm w-fit">
          <div className="flex flex-wrap gap-3">
            {navList.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`p-2 text-sm rounded-md cursor-pointer transition-all ${
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
          <section className="bg-white py-4 px-5 rounded-2xl shadow-sm">
            <h2 className="lg:text-xl md:text-sm font-extrabold mb-5 md:mb-0 lg:mb-4">
              Continue Watching
            </h2>
            <div className="overflow-x-auto md:grid md:grid-cols-4 md:gap-10 lg:gap-4 no-scrollbar mt-4">
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
            <h2 className="lg:text-xl md:text-sm font-extrabold mb-4">
              Your Next Watch
            </h2>
            <div className="overflow-x-auto md:grid md:grid-cols-4 md:gap-20 lg:gap-4 no-scrollbar mt-4">
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
          <section className="bg-white py-4 px-5 rounded-2xl shadow-sm">
            <h2 className="lg:text-xl md:text-sm font-extrabold mb-4">
              Top 10 TV Shows in Nigeria Today
            </h2>
            <div className=" flex justify-center md:space-x-4 xl:space-x-10 overflow-y-auto no-scrollbar xl:h-34 md:h-14">
              {topShows.map((scene, idx) => (
                <div key={idx} className="">
                  <img src={scene} alt={`scene-${idx}`} className="" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Sidebar (Desktop Only) */}
      <section className=" h-fit hidden md:block space-y-10">
        <div className="flex bg-white rounded-2xl flex-col gap-4 p-6">
          {filterByLatest.map((item, idk) => {
            return (
              <div key={idk}>
                <button
                  className={`${
                    activeLatest === item
                      ? "bg-blue text-white"
                      : " text-black hover:bg-blue/10"
                  } p-2 rounded-lg cursor-pointer text-xs`}
                  onClick={() => setActiveLatest(item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex bg-white p-6 rounded-2xl flex-col gap-4">
          <h2>Categories</h2>
          {filterByCategories.map((item, idk) => {
            return (
              <div key={idk}>
                <button
                  className={`${
                    activeCategories === item
                      ? "bg-blue text-white"
                      : " text-black hover:bg-blue/10"
                  } p-2 rounded-lg cursor-pointer text-xs`}
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
