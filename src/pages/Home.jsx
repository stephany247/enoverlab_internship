import MobileHeader from "../components/ui/header/MobileHeader";
import Banner from "../components/ui/home/Banner";
import BottomNav from "../components/ui/home/BottomNav";
import ContactBanner from "../components/ui/home/ContactBanner";
import SchedulePanel from "../components/ui/home/SchedulePanel";
import TaskPanel from "../components/ui/home/TaskPanel";

export default function Home() {
  return (
    <div className="space-y-8 mt-8">
      <MobileHeader />
      <Banner />
      <TaskPanel />
      <SchedulePanel />
      <ContactBanner />
      <BottomNav />
    </div>
  );
}
