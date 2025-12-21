import Hero from "./components/Hero";
import Why from "./components/Why";
import Problems from "./components/Problems";
import Questions from "./components/Questions";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <Problems />
      <Questions />
      <Testimonials />
      <Work />
    </div>
  );
}
