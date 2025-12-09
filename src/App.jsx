import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import USPSection from "./components/USPSection";
import FlavorShowcase from "./components/FlavorShowcase";
import Gallery from "./components/Gallery";
import StorySection from "./components/StorySection";
import CTASection from "./components/CTASection";
import PartnerStrip from "./components/PartnerStrip";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";
import QualitySection from "./components/QualitySection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <USPSection />
      <Ticker />
      <FlavorShowcase />
      <QualitySection />
      <Gallery />
      <StorySection />
      <PartnerStrip />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
