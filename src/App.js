import "./App.css";
import Banner from "./components/Banner";
import CTABanner from "./components/CTABanner";
import Features from "./components/Features";
import FundHouses from "./components/FundHouses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroTabs from "./components/HeroTabs";
import Support from "./components/Support";
import WeCare from "./components/WeCare";
import WhyKuvera from "./components/WhyKuvera";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <Hero />
        <HeroTabs />
      </div>
      <CTABanner />
      <Features />
      <Support />
      <WeCare />
      <WhyKuvera />
      <Banner />
      <FundHouses />
    </div>
  );
}

export default App;
