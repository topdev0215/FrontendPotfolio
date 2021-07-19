import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // const element = <FontAwesomeIcon icon={faLinkedIn} color="white" />;
  return (
    <div>
      <div className="text-xs flex justify-center items-center h-16 bg-black text-white">
        <p className="mr-1 text-xs">Created By</p>
        <a href="http://www.github.com/b00000001" className="mr-1">
          <strong>Aaron Deas</strong>
        </a>
        <p className="text-xs">Using ReactJS and TailwindCSS</p>
        {/* {element} */}
      </div>
    </div>
  );
};

export default Footer;
