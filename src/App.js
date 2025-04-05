import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <div className="two-column">
          <Resume />
          <OpenSource />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
