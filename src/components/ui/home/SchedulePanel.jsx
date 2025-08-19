import { FiChevronRight } from "react-icons/fi";
import { assets } from "../../../assets/assets";
import { FaRegClock } from "react-icons/fa";

// Mock tasks (can move to a separate file later)
const schedule = [
  {
    activity: "Take a walk",
    duration: "30 mins",
    image: assets.walk,
    time: "10:00 am",
  },
  {
    activity: "Yoga",
    duration: "45 mins",
    image: assets.yoga,
    time: "12:00 am",
  },
];

function SchedulePanel() {
  return (
    <section className="bg-white md:p-6 md:rounded-3xl md:shadow-sm space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-darker-gray">
          Upcoming Schedule
        </h1>
        <a
          href="/schedule"
          className="flex items-center text-dark-gray-text hover:underline text-sm"
        >
          View All <FiChevronRight />
        </a>
      </div>

      {/* Schedule */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {schedule.map((schedule, index) => (
          <ScheduleCard key={index} schedule={schedule} index={index} />
        ))}
      </div>
    </section>
  );
}

export default SchedulePanel;

function ScheduleCard({ schedule, index }) {
  const baseClass =
    "flex items-center justify-between w-full border p-3 rounded-xl text-dark-gray";
  const isSecond = index === 1;

  const bgClass = isSecond
    ? "hidden md:flex bg-light-pink border-light-pink-border"
    : "bg-light-blue-card border-light-blue-border";

  return (
    <div className={`${baseClass} ${bgClass}`}>
      <div className="flex items-center gap-4">
        <img src={schedule.image} alt="Schedule image" className="w-20 h-20" />
        <div className="flex flex-col w-full capitalize">
          <h3 className="text-darker-gray text-lg font-medium">
            {schedule.activity}
          </h3>
          <h4 className="text-sm">{schedule.duration}</h4>
        </div>
      </div>
      <p className="text-sm flex items-center gap-1 text-dark-gray-text">
        <FaRegClock className="text-light-gray" /> {schedule.time}
      </p>
    </div>
  );
}
