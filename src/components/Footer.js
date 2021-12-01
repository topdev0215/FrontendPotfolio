import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const element = (
    <FontAwesomeIcon className="ml-4" icon={faLinkedin} color="white" />
  );
  return (
    <div>
      <div className="text-xs flex justify-center items-center h-16 bg-black text-white">
        <p className="mr-1 text-xs">Created By</p>
        <a href="http://www.github.com/b00000001" className="mr-1">
          <strong>Aaron Deas</strong>
        </a>
        <p className="text-xs">Using ReactJS and TailwindCSS</p>
        <span
          className="ml-1 cursor-pointer"
          onClick={() =>
            window.open('https://www.linkedin.com/in/aaron-deas-ba9908166/')
          }
        >
          {element}
        </span>
      </div>
    </div>
  );
};

export default Footer;
