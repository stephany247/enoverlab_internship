import { GoPlusCircle } from "react-icons/go";
import { assets } from "../assets/assets";
import ScheduleSection from "../components/ui/schedule/ScheduleSection";
import { todaySchedule, tomorrowSchedule } from "../utils/schedule";
import CalendarSchedule from "../components/ui/schedule/CalendarSchedule";

export default function Schedule() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8 py-8 md:py-0">
      <div className="col-span-2 space-y-4">
        {/* Header */}
        <h2 className="text-2xl text-balance font-semibold w-8/10">
          Stay <span className="text-blue"> healthy & stay on</span> schedule
        </h2>
        <div className="space-y-4">
          {/* blue banner   */}
          <div className="flex gap-x-4 items-center justify-center bg-blue p-6 rounded-4xl">
              <button className="flex flex-col items-center justify-center gap-2 md:gap-4 text-white font-medium text-sm rounded-2xl hover:underline w-36 lg:min-w-48 flex-shrink-0 ">
                <GoPlusCircle className="w-20 h-20 lg:w-32 lg:h-32 bg-white p-1 lg:p-3 text-blue rounded-md lg:rounded-3xl" />
                Set a new reminder for medication and task
              </button>
            <img src={assets.schedule} className="w-50 sm:w-64 h-auto" />
          </div>
          {/* Schedule Sections */}
          <section className="space-y-4 bg-white rounded-3xl md:p-4 lg:p-6">
            <ScheduleSection title="Today" items={todaySchedule} />
            <ScheduleSection title="Tomorrow" items={tomorrowSchedule} />
          </section>
        </div>
      </div>
      <CalendarSchedule />
    </main>
  );
}
