import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

const ResumeDownload = () => {
  return (
    <div className="h-screen pt-5 flex items-center flex-col text-gray-400 bg-gray-900">
      <iframe  className="invisible lg:visible lg:w-1/2 lg:h-full sm:invisible" src="https://drive.google.com/file/d/1wzLlVJw_FhOVSxCEmFk3mMMVUfeO8jk6/preview"></iframe>
      <div className="flex justify-center">
        <br />
        <p
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1wzLlVJw_FhOVSxCEmFk3mMMVUfeO8jk6/view?usp=sharing'
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
