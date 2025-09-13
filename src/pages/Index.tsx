import WellnessHero from "@/components/WellnessHero";
import MoodCheckIn from "@/components/MoodCheckIn";
import WellnessDashboard from "@/components/WellnessDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WellnessHero />
      <MoodCheckIn />
      <WellnessDashboard />
    </div>
  );
};

export default Index;
