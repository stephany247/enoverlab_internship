import { IoRocketSharp, IoStarSharp } from "react-icons/io5";
import { assets } from "../../../assets/assets";
import { FaCheck } from "react-icons/fa";

// Pricing cards UI for mobile view
export default function MobileDesignSettings() {
  return (
    <div className="space-y-5 ">
      {/* Welcome section */}
      <section className=" space-y-1">
        <h1 className="text-xl font-semibold">
          Welcome to <span className="text-blue">Jermai</span>
        </h1>
        <p className="text-lg">One app, All your life essentials</p>
      </section>

      {/* Pricing plans section */}
      <section className="bg-white md:p-8 rounded-xl space-y-4 md:space-y-8">
        <h2 className="text-xl font-semibold">Choose a plan</h2>

        {/* Grid layout for plans */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
          {/* === Basic Plan === */}
          <div className="w-full p-4 bg-blue-lavenda border border-gray-200 rounded-2xl shadow-md sm:p-6 flex flex-col justify-between">
            {/* Header + Features */}
            {/* <div> */}
              <h3 className="font-semibold text-xl md:text-2xl">Basic</h3>
              <p className="mt-1">
                <span className="font-bold text-xl md:text-2xl">
                  ₦2000
                </span>
                <span className="text-medium-dark-gray text-sm md:text-base font-light">
                  /month
                </span>
              </p>

              {/* Features */}
              <ul className="space-y-2 flex-1 mt-4">
                {[
                  "Medication tracking & reminders",
                  "Appointment scheduling",
                  "Emergency contacts list",
                  "Basic entertainment access",
                  "1 Smart Home device connection",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {/* <IoMdCheckmark className="text-softLight-blue w-5 h-5" /> */}
                    <span className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FaCheck className="text-softLight-blue w-5 h-5" />
                    </span>

                    <p className="text-sm md:text-base">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <button className="bg-blue w-full text-white text-sm text-nowrap p-2 md:py-3 md:px-4 rounded-2xl hover:bg-blue/90 transition cursor-pointer">
                  Start 7 Days Free Trial
                </button>
              </div>
            {/* </div> */}
          </div>

          {/* === Pro Plan === */}
          <div className="bg-task-green w-full p-4 border-gray-200 rounded-2xl shadow-md sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between">
                <h3 className="font-semibold text-xl md:text-2xl">Pro</h3>
                <span className="bg-white px-3 py-1 rounded-2xl text-xs font-medium text-[#19ABCB] shadow flex items-center">
                  Most Popular
                </span>
              </div>
              <p className="mt-1">
                <span className="font-bold text-xl md:text-2xl">
                  ₦5000
                </span>
                <span className="text-medium-dark-gray text-sm md:text-base font-light">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-4 mb-6 space-y-3 ">
              {[
                "Everything in Basic Plan",
                "Unlimited medication & appointments",
                "Premium entertainment (movies, music, audiobooks)",
                "Up to 5 Smart Home device connections",
                "Emergency SOS auto-alert",
                "Personalized wellness reports",
                "Offline entertainment downloads",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 flex items-center justify-center shrink-0">
                    <IoRocketSharp className="text-bright-cyan w-5 h-5" />
                  </span>
                  <p className="text-sm md:text-base">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button className="bg-vibrant-cyan-blue p-2 md:py-3 md:px-4 hover:bg-vibrant-cyan-blue/90 transition w-full text-white text-sm text-nowrap rounded-2xl cursor-pointer">
                Start 14 Days Free Trial
              </button>
            </div>
          </div>

          {/* === Elite Plan === */}
          <div className="bg-light-pink w-full p-4 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl md:text-2xl">Elite</h3>
              <p>
                <span className="font-bold text-xl md:text-2xl">₦12000</span>
                <span className="text-gray-500 text-sm font-thin">/month</span>
              </p>
            </div>

            <ul className="space-y-2 flex-1 mt-4">
              {[
                "Everything in Pro Plan",
                "Unlimited Smart Home connections",
                "Smart health AI insights",
                "1-on-1 Smart Home setup support",
                "Priority customer care",
                "VIP early access to features & exclusive workshops",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 flex items-center justify-center shrink-0">
                    <IoStarSharp className="text-warmPitch-orange w-5 h-5" />
                  </span>
                  <p className="text-sm md:text-base">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button className="bg-burnt-orange mt-6 p-2 md:py-3 md:px-4 rounded-2xl text-white text-sm text-nowrap w-full hover:bg-burnt-orange/90 transition cursor-pointer">
                Start 31 Days Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Special Offer */}
      <section className="space-y-3  rounded-2xl p-6 ">
        <div className="flex items-center gap-4">
          <img
            src={assets.giftImg}
            alt="Gift"
            className="w-10 h-10 object-contain"
          />
          <h2 className="font-extrabold text-base md:text-lg lg:text-xl">
            Special Offer
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <p className="font-bold text-xs md:text-sm lg:text-base">
            Annual Subscription:
          </p>
          <p className="text-xs md:text-sm lg:text-base">
            Pay for 10 months, get 2 months FREE.
          </p>
        </div>
      </section>
    </div>
  );
}
