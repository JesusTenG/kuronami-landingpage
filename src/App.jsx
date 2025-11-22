import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import FlavorShowcase from "./components/FlavorShowcase";
import Gallery from "./components/Gallery";
import StorySection from "./components/StorySection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <USPSection />
      <FlavorShowcase />
      <Gallery />
      <StorySection />
      <CTASection />
    </>
  );
}

export default App;
