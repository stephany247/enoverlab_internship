import Banner from "../components/ui/home/Banner";
import ContactBanner from "../components/ui/home/ContactBanner";
import SchedulePanel from "../components/ui/home/SchedulePanel";
import TaskPanel from "../components/ui/home/TaskPanel";

export default function Home() {
  return (
    <div className="space-y-4">
      <Banner />
      <TaskPanel />
      <SchedulePanel />
      <ContactBanner />
    </div>
  );
}
