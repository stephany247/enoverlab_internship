import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";

const tasks = [
  {
    activity: "Blood test",
    day: "Today",
    location: "St Nicolas Hospital",
    time: "12pm",
  },
  {
    activity: "Dentist appointment",
    day: "Today",
    location: "St Nicolas Hospital",
    time: "3pm",
  },
  {
    activity: "Eye checkup",
    day: "Tomorrow",
    location: "Health Center",
    time: "10am",
  },
  {
    activity: "Therapy session",
    day: "Tomorrow",
    location: "Wellness Center",
    time: "2pm",
  },
];

export default function TaskPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setCurrentIndex(0); // Reset index on resize for clean behavior
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerSlide = isDesktop ? 2 : 1;
  const slides = [];
  for (let i = 0; i < tasks.length; i += cardsPerSlide) {
    slides.push(tasks.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="bg-white md:p-4 md:rounded-3xl md:shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="md:text-2xl font-semibold text-darker-gray">
          Daily Task and Medication
        </h1>
        <a
          href="#"
          className="flex items-center text-dark-gray-text hover:underline text-sm"
        >
          View All <FiChevronRight />
        </a>
      </div>

      <div className="relative w-full flex flex-col items-center gap-4 pb-2 md:pb-16">
        <button className="hidden md:flex flex-col items-center justify-center gap-2 text-dark-gray-text font-medium text-sm hover:underline min-w-20">
          <GoPlusCircle className="w-12 lg:w-20 h-12 lg:h-20 text-blue" />
          Set a new reminder
        </button>

        <div className="flex gap-4 transition-all duration-500 ease-in-out w-full justify-center">
          <button className="flex md:hidden flex-col items-center justify-center gap-2 text-dark-gray-text font-medium text-sm hover:underline min-w-20 w-4/10">
            <GoPlusCircle className="w-12 lg:w-20 h-12 lg:h-20 text-blue" />
            Set a new reminder
          </button>
          {slides[currentIndex].map((task, idx) => (
            <TaskCard key={idx} task={task} />
          ))}
        </div>

        <div className="absolute -bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer h-1 rounded-sm ${
                currentIndex === idx ? "w-8 bg-blue" : "w-4 bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TaskCard({ task }) {
  return (
    <div className="w-full bg-task-card py-3 px-6 rounded-xl text-dark-gray">
      <div className="flex items-center justify-between w-full capitalize mb-2">
        <h3 className="text-darker-gray text-lg font-medium">
          {task.activity}
        </h3>
        <h4 className="text-sm">{task.day}</h4>
      </div>
      <div className="flex justify-between w-full text-sm">
        <h4>{task.location}</h4>
        <p className="text-sm">{task.time}</p>
      </div>
    </div>
  );
}
