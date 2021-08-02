import React, { useState } from "react";
import "../assets/css/App.css";
import Nav from "./Nav";
import Main from "./Main";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import ResumeDownload from "./ResumeDownload";
function App() {
  const [display, setDisplay] = useState({
    display: <Main />
  });
  const handleClick = (navTarget) => {
    switch (navTarget) {
      case "Projects":
        setDisplay({ display: <Projects /> });
        break;
      case "Home":
        setDisplay({ display: <Main /> });
        break;
      case "About":
        setDisplay({ display: <About handleClick={handleClick} /> });
        break;
      case "Resume":
        setDisplay({ display: <ResumeDownload /> });
        break;
      case "Contacts":
        setDisplay({ display: <Contact /> });
        break;
      default:
        return;
    }
  };
  return (
    <div className="h-screen flex flex-col flex-grow">
      <Nav handleClick={handleClick} />
      <div className="w-auto h-auto">{display.display}</div>
      <div className="flex h-screen flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
