import { GoPlusCircle } from "react-icons/go";
import { assets } from "../../../assets/assets";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const contacts = [
  { name: "Amanda Ryan", image: assets.amanda },
  { name: "Pelumi Royan", image: assets.pelumi },
  { name: "Joseph Kluvert", image: assets.joseph },
  { name: "Tosin Abdul", image: assets.tosin },
  { name: "Anna Smith", image: assets.anna },
];

function ContactBanner() {
  return (
    <section className="bg-white md:p-6 md:rounded-3xl md:shadow-sm space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-darker-gray">
          Emergency Contact
        </h1>
      </div>

      {/* Contacts */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {/* New contact button */}
        <button className="flex flex-col items-center justify-center gap-2 text-dark-gray-text font-medium text-sm border border-light-gray p-4 rounded-2xl hover:underline w-36 lg:min-w-48 flex-shrink-0">
          <GoPlusCircle className="w-12 h-12 lg:w-16 lg:h-16 text-blue" />
          Set a new emergency contact
        </button>

        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ContactBanner;

function ContactCard({ contact, index }) {
  // Cycle colors: 0=blue, 1=green, 2=red
  const colors = ["bg-blue-100", "bg-green-100", "bg-red-100"];
  const bgColor = colors[index % colors.length];

  return (
    <div
      className={`flex flex-col items-center gap-2 ${bgColor} p-4 rounded-xl text-dark-gray min-w-36 lg:min-w-48 flex-shrink-0`}
    >
      <img
        src={contact.image}
        alt={`${contact.name} profile`}
        className="w-12 h-12 rounded-full object-cover"
      />

      <h3 className="text-darker-gray text-center font-medium text-sm">
        {contact.name}
      </h3>

      <div className="flex justify-center gap-3 text-sm">
        <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:bg-light-blue/80">
          <FaPhone className="w-4 h-4" />
        </div>
        <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:bg-light-blue/80">
          <MdMail className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
