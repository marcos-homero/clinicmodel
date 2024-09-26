import HeroSection from "@/components/HeroSection";
import HomeSearch from "@/components/HomeSearch";
import Notices from "@/components/Notices";

export default function Home() {
  return (
    <div className="flex flex-col py-16 gap-16 w-full px-6 max-w-[1300px] ">
      <HeroSection />
      <Notices />
      <HomeSearch />
    </div>
  );
}
