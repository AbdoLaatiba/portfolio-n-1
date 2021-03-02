import "./App.css";
import About from "./pages/about/About";
import HeroSection from "./pages/hero-section/HeroSection";
import Typist from "react-typist";
import Services from "./pages/services/services";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Typist>
        <h1 className="font-bold text-5xl mt-8" id="about">
          About Me
        </h1>
      </Typist>
      <About />
      <Typist>
        <h1 className="font-bold text-5xl mt-8" id="about">
          Services
        </h1>
      </Typist>
      <Services />
      <Typist>
        <h1 className="font-bold text-5xl mt-8" id="about">
          Projects
        </h1>
      </Typist>
      <Projects />
      <Typist>
        <h1 className="font-bold text-5xl mt-8" id="about">
          Feel free to contact me
        </h1>
      </Typist>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
