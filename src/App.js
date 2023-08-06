import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platforms />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
