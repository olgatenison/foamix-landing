import Hero from "./components/Hero";

import Contact from "./components/Contact";

import Marquee from "./components/Marquee";
import Features from "./components/Features";
import InsulationComparison from "./components/InsulationComparison";
import PpuTypes from "./components/PpuTypes";
import HowToChoosePpu from "./components/HowToChoosePpu";
import HowWeWork from "./components/HowWeWork";

import Solving from "./components/Solving";
import Approach from "./components/Approach";
import StatsSection from "./components/Stats";

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
      <Contact />
    </div>
  );
}
