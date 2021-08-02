import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const ResumeDownload = () => {
  const element = <FontAwesomeIcon icon={faFile} size="6x" color="white" />;
  return (
    <div className="h-screen pt-5 flex flex-col text-gray-400 bg-gray-900">
      <a
        href="../assets/docs/resume.pdf"
        className="flex justify-center"
        download
      >
        {element}
      </a>
      <div className="flex justify-center">
        <br />
        <p className="text-xl"> Click to Download</p>
      </div>
    </div>
  );
};

export default ResumeDownload;
