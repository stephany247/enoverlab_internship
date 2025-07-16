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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">

          {/* === Basic Plan === */}
          <div className="bg-blue-lavenda flex flex-col gap-5 p-4 lg:p-8 rounded-lg h-full">
            {/* Header */}
            <div>
              <h3>Basic</h3>
              <p>
                <span className="font-bold">#2000</span>
                <span className="text-medium-dark-gray text-sm font-thin">/month</span>
              </p>
            </div>

            {/* Features + CTA */}
            <div className="flex flex-col justify-between flex-grow gap-4">
              <ul className="space-y-2">
                {[
                  "Medication tracking & reminders",
                  "Appointment scheduling",
                  "Emergency contacts list",
                  "Basic entertainment access",
                  "1 Smart Home device connection",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <IoMdCheckmark className="text-softLight-blue w-5 h-5" />
                    <p className="text-xs lg:text-lg">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex items-center justify-center">
                <button className="bg-blue text-white py-2 px-6 lg:py-3 lg:px-8 rounded-lg text-xs lg:text-sm cursor-pointer transition-all duration-300 hover:bg-blue/80">
                  Start 7 Days Free Trial
                </button>
              </div>
            </div>
          </div>

          {/* === Pro Plan === */}
          <div className="bg-task-green flex flex-col gap-5 p-4 lg:p-8 rounded-lg h-full">
            {/* Header + Most Popular Badge */}
            <div className="flex justify-between items-center">
              <div>
                <h3>Pro</h3>
                <p>
                  <span className="font-bold">#5000</span>
                  <span className="text-medium-dark-gray text-sm font-thin">/month</span>
                </p>
              </div>
              <button className="bg-white p-1 lg:p-2 w-full md:w-[45%] text-xs rounded-2xl text-bright-cyan hover:bg-bright-cyan hover:text-white transition duration-300 shadow">
                Most Popular
              </button>
            </div>

            {/* Features + CTA */}
            <div className="flex flex-col justify-between flex-grow gap-4">
              <ul className="space-y-2">
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
                    <p className="text-xs lg:text-lg">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex justify-center items-center">
                <button className="bg-vibrant-cyan-blue p-2 lg:p-4 max-w-full w-[80%] text-xs lg:text-sm rounded-lg text-white hover:bg-bright-cyan hover:text-white transition duration-300 shadow cursor-pointer">
                  Start 14 Days Free Trial
                </button>
              </div>
            </div>
          </div>

          {/* === Elite Plan === */}
          <div className="bg-light-pink flex flex-col gap-5 p-4 lg:p-8 rounded-lg h-full">
            {/* Header */}
            <div>
              <h3>Elite</h3>
              <p>
                <span className="font-bold">#12000</span>
                <span className="text-medium-dark-gray text-sm font-thin">/month</span>
              </p>
            </div>

            {/* Features + CTA */}
            <div className="flex flex-col justify-between flex-grow gap-4">
              <ul className="space-y-2">
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
                    <p className="text-xs lg:text-lg">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex justify-center items-center">
                <button className="bg-burnt-orange p-2 lg:p-4 max-w-full w-[80%] text-xs lg:text-sm rounded-lg text-white hover:bg-burnt-orange/90 hover:text-white transition duration-300 shadow cursor-pointer">
                  Start 31 Days Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="grid grid-cols-1 space-y-2">
        {/* Gift icon + Title */}
        <div className="flex items-center gap-5">
          <img src={assets.giftImg} alt="Gift" />
          <h2 className="font-extrabold text-sm lg:text-xl">Special Offer</h2>
        </div>

        {/* Offer details */}
        <div className="flex items-center gap-2">
          <p className="font-bold text-xs lg:text-lg">Annual Subscription:</p>
          <p className="text-xs lg:text-sm">
            Pay for 10 months, get 2 months FREE.
          </p>
        </div>
      </section>
    </div>
  );
}
