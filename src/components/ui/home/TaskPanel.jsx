import React, { useState, useEffect, useRef } from "react";
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setCurrentIndex(0);
      if (scrollRef.current)
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerSlide = isDesktop ? 2 : 1;
  const slides = [];
  for (let i = 0; i < tasks.length; i += cardsPerSlide) {
    slides.push(tasks.slice(i, i + cardsPerSlide));
  }

  // When user scrolls, figure out which "page" we're on
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const slideWidth = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(index);
  };

  // Scroll to slide when marker is clicked
  const scrollToSlide = (idx) => {
    if (!scrollRef.current) return;
    const slideWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: idx * slideWidth,
      behavior: "smooth",
    });
    setCurrentIndex(idx);
  };

  return (
    <section className="bg-white md:p-4 md:rounded-3xl md:shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="md:text-2xl font-semibold text-darker-gray">
          Daily Task and Medication
        </h1>
        <a
          href="/schedule"
          className="flex items-center text-dark-gray-text hover:underline text-sm"
        >
          View All <FiChevronRight />
        </a>
      </div>

      <div className="relative w-full flex md:flex-col items-center gap-4 pb-2 md:pb-16">
        {/* Desktop "Add reminder" button */}
        <button className="hidden md:flex flex-col items-center justify-center gap-2 text-dark-gray-text font-medium text-sm hover:underline min-w-20 cursor-pointer">
          <GoPlusCircle className="w-12 lg:w-20 h-12 lg:h-20 text-blue" />
          Set a new reminder
        </button>

        {/* Mobile "Add reminder" button – outside the scroll area */}
        <button className="flex md:hidden flex-col items-center justify-center gap-2 text-dark-gray-text font-medium text-sm hover:underline min-w-20 w-4/10 cursor-pointer">
          <GoPlusCircle className="w-12 h-12 text-blue" />
          Set a new reminder
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full no-scrollbar gap-x-4"
        >
          {slides.map((group, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex gap-4 justify-center snap-start"
            >
              {group.map((task, tIdx) => (
                <TaskCard key={tIdx} task={task} />
              ))}
            </div>
          ))}
        </div>

        {/* Carousel markers */}
        <div className="absolute -bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => scrollToSlide(idx)}
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
