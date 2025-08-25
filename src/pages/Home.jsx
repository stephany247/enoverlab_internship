import MobileHeader from "../components/ui/header/MobileHeader";
import Banner from "../components/ui/home/Banner";
import BottomNav from "../components/ui/home/BottomNav";
import ContactBanner from "../components/ui/home/ContactBanner";
import Promo from "../components/ui/home/Promo";
import SchedulePanel from "../components/ui/home/SchedulePanel";
import TaskPanel from "../components/ui/home/TaskPanel";

export default function Home() {
  return (
    <div className="space-y-8 md:mt-8">
      <MobileHeader />
      <Banner />
      <TaskPanel />
      <SchedulePanel />
      <ContactBanner />
      <Promo />
    </div>
  );
}
