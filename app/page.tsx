import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Land from "./components/Land";
import First from "./components/First";
import Marquee from "./components/Marquee";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Marquee />

      <Hero />
      <Features />
      <Land />
      {/* <Why /> */}
      <Problems />
      <Contact />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}
