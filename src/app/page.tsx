import HeroSection from "@/components/HeroSection";
import HomeSearch from "@/components/HomeSearch";
import Notices from "@/components/Notices";

export default function Home() {
  return (
    <div className="flex w-full max-w-[1300px] flex-col gap-16 px-6 py-16">
      <HeroSection />
      <Notices />
      <HomeSearch />
    </div>
  );
}
