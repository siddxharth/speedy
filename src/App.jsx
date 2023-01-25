import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Demographics from "./components/demographics/Demographics";
import Provide from "./components/provide/Provide";

function App() {
  return (
    <div className="Speedy-App">
      <Navbar />
      <Hero />
      <Demographics />
      <Provide />
    </div>
  );
}

export default App;
