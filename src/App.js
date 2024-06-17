import "./App.css";
import CTABanner from "./components/CTABanner";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroTabs from "./components/HeroTabs";
import Support from "./components/Support";

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
    </div>
  );
}

export default App;
