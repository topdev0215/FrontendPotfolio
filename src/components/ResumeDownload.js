import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const ResumeDownload = () => {
  return (
    <div className="h-screen pt-5 flex items-center flex-col text-gray-400 bg-gray-900">
      <iframe
        title="Resume"
        className="h-full w-2/3"
        src="https://docs.google.com/document/d/e/2PACX-1vS8ejoqo5OJqkUf2p3U2u3jPoiwNJypI46e-NCr0SD8Hspb7C5_OWWDV-y_DCDvtk8No-LMYu2QbsUk/pub?embedded=true"
      ></iframe>
      <div className="flex justify-center">
        <br />
        <p
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/19HjOVGlLAh4OfPXCpzaBUYcC90a6IpfW/view?usp=sharing"
            )
          }
          className="cursor-pointer text-xl"
        >
          Click for Downloadable Version
        </p>
      </div>
    </div>
  );
};

export default ResumeDownload;
