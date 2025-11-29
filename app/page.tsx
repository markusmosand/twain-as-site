import { Hero } from "@/components/hero";
import { FleetGrid } from "@/components/fleet-grid";
import { HowItWorks } from "@/components/how-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <FleetGrid />
      <HowItWorks />
    </>
  );
}
