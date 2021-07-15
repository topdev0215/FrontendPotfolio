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
    <div className="h-screen flex flex-col">
      <Nav handleClick={handleClick} />
      {display.display}
      <div className="flex flex-col border h-1/4 justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
