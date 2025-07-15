import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarSchedule = () => {
  // const [date, setDate] = useState(new Date(2025, 3, 13)); // April 13, 2025
  // const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // April 2025

  const today = new Date();
  const [date, setDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const scheduleItems = [
    { time: "09:00", task: null },
    { time: "10:00", task: null },
    { time: "11:00", task: null },
    { time: "12:00", task: "Water", bgColor: "bg-lighter-gray" },
    { time: "13:00", task: null },
    { time: "14:00", task: "Vitamins", bgColor: "bg-lighter-gray" },
    { time: "15:00", task: null },
    { time: "16:00", task: "Anti-Biotics", bgColor: "bg-lighter-green" },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    return (
      day === date.getDate() &&
      currentMonth.getMonth() === date.getMonth() &&
      currentMonth.getFullYear() === date.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    if (!day || isPast(day)) return; // ⛔ Don't allow selecting past dates
    if (day) {
      setDate(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      );
    }
  };

  const isPast = (day) => {
    if (!day) return false;
    const today = new Date();
    const dateToCheck = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    // Remove time for accurate comparison
    today.setHours(0, 0, 0, 0);
    dateToCheck.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(newMonth.getMonth() - 1);
   // Prevent going to past months
    // if (
    //   newMonth.getFullYear() < today.getFullYear() ||
    //   (newMonth.getFullYear() === today.getFullYear() &&
    //     newMonth.getMonth() < today.getMonth())
    // ) {
    //   return;
    // }
  } else {
    newMonth.setMonth(newMonth.getMonth() + 1);
  }

    setCurrentMonth(newMonth);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="hidden md:block bg-white rounded-xl p-6 shadow-sm max-w-sm max-h-max mx-auto">
      {/* Calendar Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => navigateMonth("prev")}
            >
              <BiChevronLeft size={16} />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => navigateMonth("next")}
            >
              <BiChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Custom Calendar */}
        <div className="w-full">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-dark-gray text-sm font-normal py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDayClick(day)}
                disabled={!day}
                className={`
                  h-8 w-8 text-sm rounded-md flex items-center justify-center
                  ${!day ? "invisible" : ""}
                  ${
                    isSelected(day)
                      ? "bg-blue text-white hover:bg-blue-600"
                      : ""
                  }
                  ${
                    isToday(day) && !isSelected(day)
                      ? "bg-gray-100 text-darker-gray"
                      : ""
                  }
                  ${
                    day && !isSelected(day) && !isToday(day)
                      ? "hover:bg-gray-100"
                      : ""
                  }
                  ${
                    isPast(day)
                      ? "text-light-gray cursor-not-allowed pointer-events-none"
                      : ""
                  }
                  ${!day ? "" : "cursor-pointer"}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time Schedule Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Time</h3>
        <div className="space-y-2">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-sm text-dark-gray w-fit flex-shrink-0">
                {item.time}
              </span>
              <div className="flex-1">
                {item.task ? (
                  <div
                    className={`${item.bgColor} rounded-lg px-2 py-2 text-sm`}
                  >
                    {item.task}
                  </div>
                ) : (
                  <div className="h-8" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarSchedule;
