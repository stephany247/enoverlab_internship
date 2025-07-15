import NavSearch from "./NavSearch";
import { assets } from "../../../assets/assets";

const userName = "Martha";
// const userImage = profileImage;

export default function MobileHeader() {
  return (
    <header className="space-y-4 col-span-3 justify-between flex-row-reverse md:hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Hello, <br className="hidden" />
          {userName}!
        </h1>
        <img
          src={assets.profilePic}
          alt="Profile Picture"
          className="rounded-full"
        />
      </div>
      {/* Searg Input */}
      <NavSearch />
    </header>
  );
}
