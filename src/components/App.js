import React, { useState } from "react";
import "../assets/css/App.css";
import Nav from "./Nav";
import Main from "./Main";
import Projects from "./Projects";
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
      default:
        return;
    }
  };
  return (
    <div>
      <Nav handleClick={handleClick} />
      {display.display}
    </div>
  );
}

export default App;
