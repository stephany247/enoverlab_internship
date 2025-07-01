import React from "react";
import { BiSolidBot } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import SearchInput from "./SearchInput";
import { IoSearchSharp } from "react-icons/io5";

function NavSearch() {
  return (
    <div className="bg-white flex items-center justify-between h-fit min-w-xs rounded-lg p-2 text-blue shadow-md md:shadow-none">
      <div className="flex gap-x-2 items-center">
        <IoSearchSharp className="hidden md:block size-6" />
        <BiSolidBot className="md:hidden size-6" />
        <SearchInput />
      </div>
      <MdOutlineKeyboardVoice className="size-6 md:hidden" />
    </div>
  );
}

export default NavSearch;
