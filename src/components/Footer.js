import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-xs flex justify-center items-center h-16 bg-black text-white">
        <p className="mr-1 text-xs">Created By</p>
        <a href="http://www.github.com/b00000001" className="mr-1">
          <strong>Aaron Deas</strong>
        </a>
        <p className="text-xs">Using ReactJS and TailwindCSS</p>
      </div>
    </div>
  );
};

export default Footer;
