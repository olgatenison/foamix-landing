import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Land from "./components/Land";

export default function Home() {
  return (
    <div>
      <Land />
      <Hero />
      {/* <Why /> */}
      <Problems />
      <Contact />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}
