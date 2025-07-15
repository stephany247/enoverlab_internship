// import { Wifi, Lightbulb, Tv, Sun, Music, Play, ArrowRight, Home, Moon, Plane } from "lucide-react";
import {
  FaWifi,
  FaLightbulb,
  FaTv,
  FaSun,
  FaMusic,
  FaPlay,
  FaArrowRight,
  FaHome,
  FaMoon,
  FaPlane,
  FaWalking,
  FaBed,
  FaBolt,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { MdOutlineCloud } from "react-icons/md";
import { BiSolidDevices } from "react-icons/bi";
import { RiBookFill, RiLightbulbFlashLine, RiSofaFill } from "react-icons/ri";
import { PiSunFill, PiTelevision } from "react-icons/pi";
import { FaHouse, FaYoutube } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { GiFlexibleLamp } from "react-icons/gi";

const SmartHome = () => {
  const stats = [
    {
      value: "27°C",
      label: "Abuja",
      icon: <MdOutlineCloud />,
      bgColor: "bg-[#DCE6F0]",
      iconBg: "text-[#2CA1E6]",
    },
    {
      value: "13 Active",
      label: "Devices",
      icon: <BiSolidDevices />,
      bgColor: "bg-[#ECE2E5]",
      iconBg: "text-[#DD624F]",
    },
    {
      value: "On",
      label: "Wifi",
      icon: <FaWifi />,
      bgColor: "bg-[#DDD6F3]",
      iconBg: "text-[#612BDB]",
    },
    {
      value: "312 kwh",
      label: "Usage",
      icon: <RiLightbulbFlashLine />,
      bgColor: "bg-[#D7EBE7]",
      iconBg: "text-[#2DD762]",
    },
  ];

  const scenes = [
    {
      label: "Day",
      icon: <PiSunFill />,
      bgColor: "bg-[#F5DCC2]",
      iconColor: "text-[#DC8D4C]",
    },
    {
      label: "Music",
      icon: <FaMusic />,
      bgColor: "bg-[#FCD3C6]",
      iconColor: "text-[#B64546]",
    },
    {
      label: "Movie",
      icon: <FaYoutube />,
      bgColor: "bg-[#C5EAD5]",
      iconColor: "text-[#06C05B]",
    },
    {
      label: "Going Out",
      icon: <FaWalking />,
      bgColor: "bg-[#D3DBFF]",
      iconColor: "text-[#5C69EF]",
    },
    {
      label: "Home",
      icon: <FaHouse />,
      bgColor: "bg-[#E1EBFF]",
      iconColor: "text-[#525DD0]",
    },
    {
      label: "Night",
      icon: <FaMoon size={20} />,
      bgColor: "bg-[#EADBFF]",
      iconColor: "text-[#6237D1]",
    },
    {
      label: "Vacation",
      icon: <TbBeach />,
      bgColor: "bg-yellow-100",
      iconColor: "text-[#DC8D4C]",
    },
  ];

  const devices = [
    {
      name: "Lamps",
      count: "8 Devices",
      status: "Not Consuming",
      icon: <GiFlexibleLamp />, // for Lamps
      bgColor: "bg-[#EAEEFF]",
      iconColor: "text-[#639980]",
      isOn: false,
    },
    {
      name: "Televisions",
      count: "2 Devices",
      status: "Consuming 8Kwh",
      icon: <PiTelevision />,
      bgColor: "bg-[#E3FAFF]",
      iconColor: "text-[#55D5E2]",
      isOn: true,
    },
    {
      name: "Lamps",
      count: "2 Devices",
      status: "Not Consuming",
      icon: <GiFlexibleLamp />,
      bgColor: "bg-[#FFF5EC]",
      iconColor: "text-[#EFC788]",
      isOn: false,
    },
  ];

  const rooms = [
    {
      name: "Living Room",
      devices: "8 Devices",
      onCount: "4 On",
      icon: <RiSofaFill />,
      bgColor: "bg-blue",
      textColor: "text-white",
    },
    {
      name: "Study",
      devices: "5 Devices",
      onCount: "1 On",
      icon: <RiBookFill />,
      bgColor: "bg-gray-100 md:bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "Bed room",
      devices: "10 Devices",
      onCount: "6 On",
      icon: <FaBed />,
      bgColor: "bg-gray-100 md:bg-white",
      textColor: "text-gray-800",
    },
  ];

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-x-4 py-8">
      <div className="col-span-2 space-y-4">
        <section className="flex justify-between items-center gap-x-6">
          <h1 className="text-2xl font-medium text-gray-900">
            Welcome to{" "}
            <span className="text-blue font-semibold">Smart home</span>{" "}
            integration
          </h1>
          <img src={assets.profilePic} className="md:hidden"></img>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-4 gap-2 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl md:p-4 flex flex-col items-center text-center gap-y-1`}
            >
              <div
                className={`bg-lighter-gray ${stat.iconBg} text-3xl w-12 h-12 rounded-full flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-nowrap">
                  {stat.value}
                </h4>
                <p className="text-sm text-darker-gray">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Scene Section */}
        <section className="md:bg-white md:py-3 md:px-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Scene</h2>
          <div className="grid grid-cols-7 gap-3">
            {scenes.map((scene, index) => (
              <div
                key={index}
                className={` flex flex-col items-center gap-y-2 rounded-2xl text-center cursor-pointer hover:opacity-80 transition-opacity`}
              >
                <div
                  className={`text-xl w-10 h-10 rounded-full flex items-center justify-center ${scene.bgColor} ${scene.iconColor}`}
                >
                  {scene.icon}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {scene.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rooms */}
        <section className="block md:hidden">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Rooms</h2>
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${room.bgColor} ${room.textColor} flex flex-col items-center min-w-46 lg:min-w-48 flex-shrink-0 gap-2 rounded-3xl p-4 cursor-pointer hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center justify-between text-2xl">
                  {room.icon}
                </div>
                <h3 className={`text-lg font-semibold ${room.textColor}`}>
                  {room.name}
                </h3>
                <div
                  className={`flex justify-between text-sm opacity-80 w-full mt-4`}
                >
                  <p>{room.devices}</p>
                  <p>{room.onCount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Devices Section */}
        <section className="md:bg-white md:py-3 md:px-5 rounded-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Devices</h2>
          {/* space-y-4 flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 */}
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-x-visible">
            {devices.map((device, index) => (
              <div
                key={index}
                className={`${device.bgColor} rounded-2xl p-6 min-w-46 lg:min-w-auto flex-shrink-0`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${device.iconColor} bg-white w-10 h-10 rounded-full text-xl flex items-center justify-center`}
                  >
                    {device.icon}
                  </div>
                  <div className="relative">
                    <div
                      className={`w-12 h-6 rounded-full transition-colors ${
                        device.isOn ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          device.isOn ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {device.name}
                </div>
                <div className="text-sm text-gray-600 mb-2">{device.count}</div>
                <div
                  className={`text-xs flex gap-1 items-center ${
                    device.isOn ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  <FaBolt className="text-yellow-700" /> {device.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Rooms Sidebar */}
      <section className="bg-white p-4 rounded-2xl h-fit hidden md:block">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Rooms</h2>
        <div className="flex items-center gap-4 md:flex-col md:gap-4">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`${room.bgColor} ${room.textColor} flex flex-col items-center w-full flex-shrink-0 gap-2 rounded-3xl p-4 md:shadow-md cursor-pointer hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center justify-between text-2xl">
                {room.icon}
              </div>
              <h3 className={`text-lg font-semibold ${room.textColor}`}>
                {room.name}
              </h3>
              <div
                className={`flex justify-between text-sm opacity-80 w-full mt-6`}
              >
                <p>{room.devices}</p>
                <p>{room.onCount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SmartHome;
