import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div id="/" className="max-w-[1209px] m-auto px-5">
      <Nav />
      <HeroSection />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
