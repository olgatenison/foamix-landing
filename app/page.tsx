import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import PpuTypes from "./components/PpuTypes";
import HowToChoosePpu from "./components/HowToChoosePpu";
import InsulationComparison from "./components/InsulationComparison";
import HowWeWork from "./components/HowWeWork";
import StatsSection from "./components/Stats";
import Solving from "./components/Solving";
import Approach from "./components/Approach";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Hero />
      <Features />
      <PpuTypes />
      <HowToChoosePpu />
      <InsulationComparison />
      <HowWeWork />
      <StatsSection />
      <Solving />
      <Approach />
      <FAQ />
      <Contact />
    </div>
  );
}
