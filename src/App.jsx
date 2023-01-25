import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Demographics from "./components/demographics/Demographics";
import Provide from "./components/provide/Provide";
import Features from "./components/features/Features";
import Reach from "./components/reach/Reach";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Speedy-App">
      <Navbar />
      <Hero />
      <Demographics />
      <Provide />
      <Features />
      <Reach />
      <Footer />
    </div>
  );
}

export default App;
