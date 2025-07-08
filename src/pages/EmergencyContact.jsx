import { useState } from "react";
import { contacts } from "../utils/contacts";
import { FaEllipsisV } from "react-icons/fa";
import HospitalMap from "../components/ui/HospitalMap";

export default function EmergencyContact() {
  const [activeTab, setActiveTab] = useState("contacts");
  const tabs = [
    { key: "contacts", label: "Contacts" },
    { key: "calls", label: "Call logs" },
    { key: "messages", label: "Message" },
  ];

  const nearestHospital = {
    name: "St Nicolas Hospital",
    lat: 6.5244, // Example: Lagos lat
    lng: 3.3792, // Example: Lagos lng
  };

  return (
    <div className="p-4 md:p-0">
      {/* Header */}
      <h2 className="text-lg font-semibold text-blue mb-4">
        Stay connected <span className="text-black">and get</span> help fast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 border-b border-gray-200">
        {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
        <div className="col-span-2">
          <div className="flex space-x-2 bg-white rounded-lg border-b border-light-gray">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-blue text-white hover:bg-blue/80"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 py-4">
            {activeTab === "contacts" && (
              <div className="space-y-3">
                {contacts.map((contact, index) => {
                  // Cycle border colors
                  const borderColors = [
                    "border-contact-blue",
                    "border-contact-green",
                    "border-contact-orange",
                  ];
                  const borderColor = borderColors[index % borderColors.length];
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 bg-white hover:bg-gray-50 rounded-lg transition-colors border-l-8 ${borderColor}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={contact.image}
                            className="w-14 h-14 rounded-full "
                          />
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                        </div>
                        <span className="font-medium text-lg">
                          {contact.name}
                        </span>
                      </div>
                      <button className="text-dark-gray hover:text-gray-600">
                        <FaEllipsisV />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "calls" && (
              <div className="text-gray-600 text-sm">
                <p>No recent call logs available.</p>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="text-gray-600 text-sm">
                <p>No messages to display.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-gray-200 bg-white rounded-2xl h-fit">
          <HospitalMap hospital={nearestHospital} />

          <div className="flex flex-col space-y-4 p-4">
            <button className="flex-1 bg-blue text-white py-4 md:py-2 px-4 rounded-full text-sm font-medium hover:bg-blue/80 transition-colors">
              Find Nearby Hospital
            </button>
            <button className="py-4 md:py-2 px-4 border border-blue rounded-full text-sm font-medium hover:bg-light-gray/20 transition-colors">
              Call 112
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
