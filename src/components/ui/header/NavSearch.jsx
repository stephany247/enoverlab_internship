import React from "react";
import { BiSolidBot } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import SearchInput from "./SearchInput";
import { IoSearchSharp } from "react-icons/io5";

function NavSearch() {
  return (
    <div className="bg-white flex items-center justify-between h-fit lg:min-w-xs rounded-xl p-2 text-blue shadow-md md:shadow-none">
      <div className="flex gap-x-2 items-center w-full">
        <IoSearchSharp className="hidden md:block size-7" />
        <BiSolidBot className="md:hidden size-6" />
        <SearchInput />
      </div>
      <MdOutlineKeyboardVoice className="size-8 md:hidden" />
    </div>
  );
}

export default NavSearch;
