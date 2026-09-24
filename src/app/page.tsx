import { ClosingActs } from "@/components/story/ClosingActs";
import { DestinationsAct } from "@/components/story/DestinationsAct";
import { HeroAct } from "@/components/story/HeroAct";
import { HowItWorksAct } from "@/components/story/HowItWorksAct";
import { JourneyAct } from "@/components/story/JourneyAct";
import { ServicesAct } from "@/components/story/ServicesAct";

/** The homepage story: one continuous journey (see specs/3d-architecture.md §2). */
export default function Home() {
  return (
    <>
      <HeroAct />
      <ServicesAct />
      <DestinationsAct />
      <JourneyAct />
      <HowItWorksAct />
      <ClosingActs />
    </>
  );
}
