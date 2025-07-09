
import NavSearch from "./NavSearch";
import { assets } from "../../../assets/assets";
import { CiBellOn } from "react-icons/ci";

const userName = "Martha";
// const userImage = profileImage;

function DeskopHeader() {
  return (
    <header className="space-y-4 col-span-3 hidden md:flex justify-between flex-row-reverse">
      <div className="flex flex-row-reverse justify-end items-center gap-x-2">
        <h1 className="md:text-lg font-semibold">Hello, <br className="hidden md:block"/>{userName}!</h1>
        <img src={assets.profilePic} alt="Profile Picture" className="rounded-full" />
        <CiBellOn className="hidden md:block w-8 h-8 mr-4" />
      </div>
      {/* Searg Input */}
      <NavSearch />
    </header>
  );
}

export default DeskopHeader;


