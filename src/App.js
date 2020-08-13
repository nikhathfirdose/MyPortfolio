import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    document.title = "Nikhath Firdose";
  }, []);
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
