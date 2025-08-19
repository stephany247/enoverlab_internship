import React from "react";
import { IoMdCheckmark, IoMdJet } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { assets } from "../../../assets/assets";

// Pricing cards UI for mobile view
export default function MobileDesignSettings() {
  return (
    <div className="space-y-5">
      {/* Welcome section */}
      <section className="space-y-1">
        <h1 className="font-semibold text-xl">
          Welcome to <span className="text-blue">jermai</span>
        </h1>
        <p className="font-thin text-md">One app, All your life essentials</p>
      </section>

      {/* Pricing plans section */}
      <section className="bg-white rounded-2xl p-6 space-y-4">
        <h2>Choose a plan</h2>

        {/* Grid layout for plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* === Basic Plan === */}
          <div className="bg-blue-lavenda flex flex-col justify-between p-6 rounded-lg h-full">
            <div>
              <h3 className="font-semibold text-lg">Basic</h3>
              <p>
                <span className="font-bold text-xl">₦2000</span>
                <span className="text-gray-500 text-sm font-thin">/month</span>
              </p>
            </div>

            <ul className="space-y-2 flex-1 mt-4">
              {[
                "Medication tracking & reminders",
                "Appointment scheduling",
                "Emergency contacts list",
                "Basic entertainment access",
                "1 Smart Home device connection",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <IoMdCheckmark className="text-softLight-blue w-5 h-5" />
                  <p className="text-xs md:text-sm">{feature}</p>
                </li>
              ))}
            </ul>

            <button className="bg-blue mt-6 py-2 px-4 rounded-lg text-white text-sm w-full hover:bg-blue-500 transition">
              Start 7 Days Free Trial
            </button>
          </div>

          {/* === Pro Plan === */}
          <div className="bg-task-green flex flex-col justify-between p-6 rounded-lg h-full relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">Pro</h3>
                <p>
                  <span className="font-bold text-xl">₦5000</span>
                  <span className="text-gray-500 text-sm font-thin">
                    /month
                  </span>
                </p>
              </div>
              <span className="bg-white px-3 py-1 rounded-2xl text-xs font-medium text-bright-cyan shadow">
                Most Popular
              </span>
            </div>

            <ul className="space-y-2 flex-1 mt-4">
              {[
                "Everything in Basic Plan",
                "Unlimited medication & appointments",
                "Premium entertainment (movies, music, audiobooks)",
                "Up to 5 Smart Home device connections",
                "Emergency SOS auto-alert",
                "Personalized wellness reports",
                "Offline entertainment downloads",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <IoMdJet className="text-bright-cyan w-5 h-5" />
                  <p className="text-xs md:text-sm">{feature}</p>
                </li>
              ))}
            </ul>

            <button className="bg-vibrant-cyan-blue mt-6 py-2 px-4 rounded-lg text-white text-sm w-full hover:bg-bright-cyan transition">
              Start 14 Days Free Trial
            </button>
          </div>

          {/* === Elite Plan === */}
          <div className="bg-light-pink flex flex-col justify-between p-6 rounded-lg h-full">
            <div>
              <h3 className="font-semibold text-lg">Elite</h3>
              <p>
                <span className="font-bold text-xl">₦12000</span>
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
                <li key={i} className="flex items-center gap-2">
                  <IoStarSharp className="text-warmPitch-orange w-5 h-5" />
                  <p className="text-xs md:text-sm">{feature}</p>
                </li>
              ))}
            </ul>

            <button className="bg-burnt-orange mt-6 py-2 px-4 rounded-lg text-white text-sm w-full hover:bg-burnt-orange/90 transition">
              Start 31 Days Free Trial
            </button>
          </div>
        </div>

        {/* Special Offer */}
      </section>
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
