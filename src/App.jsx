import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Creativity from "./components/Creativity/Creativity";
import Step from "./components/Steps/Step";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Creativity />
      <Step />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
