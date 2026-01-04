import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Land from "./components/Land";
import First from "./components/First";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import { InsulationComparison } from "./components/InsulationComparison";
import PpuTypes from "./components/PpuTypes";
import HowToChoosePpu from "./components/HowToChoosePpu";
import HowWeWork from "./components/HowWeWork";
import OurApproach from "./components/OurApproach";

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
      <OurApproach />
      <Land />
      {/* <Why /> */}
      <Problems />
      <Contact />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}
