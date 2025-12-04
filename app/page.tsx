import Hero from "@/components/Hero";
import ConstituencyFinder from "@/components/ConstituencyFinder";
import NewsFeed from "@/components/NewsFeed"; // <-- Import

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ConstituencyFinder />
      <NewsFeed /> {/* <-- Add News Feed here */}
    </div>
  );
}