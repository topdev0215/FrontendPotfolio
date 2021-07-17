import React, { useState } from "react";
import "../assets/css/App.css";
import Nav from "./Nav";
import Main from "./Main";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
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
      case "Resume":
        window.open(
          "https://b00000001.github.io/personal-portfolio/cvpage.html"
        );
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
      <div className="w-auto h-screen">{display.display}</div>
      <div className="flex flex-col h-1/2 justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
