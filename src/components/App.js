import React, { useState } from "react";
import "../assets/css/App.css";
import Nav from "./Nav";
import Main from "./Main";
import Projects from "./Projects";
import Footer from "./Footer";
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
      default:
        return;
    }
  };
  return (
    <div className="h-screen flex flex-col flex-grow">
      <Nav handleClick={handleClick} />
      <div className="w-auto">{display.display}</div>
      <div className="flex flex-col h-1/2 justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
