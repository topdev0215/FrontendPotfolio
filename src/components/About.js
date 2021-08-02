import React from "react";
import profilepic from "../assets/images/profilepic.jpg";
import codingSvg from "../assets/images/codingavatarsvg.svg";
const About = ({ handleClick }) => {
  return (
    <section
      id="about"
      className="lg:h-screen sm:h-auto text-gray-400 bg-gray-900"
    >
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <img className="w-20" src={codingSvg} alt="" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, My name is Aaron,
            <br className="hidden lg:inline-block" />I love Web Development!
          </h1>
          <div className="flex py-4 justify-center">
            <button
              onClick={() => handleClick("Contacts")}
              className="px-8 py-3 border border-transparent text-base font-medium inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </button>
            <button
              onClick={() => {
                handleClick("Projects");
              }}
              className="px-8 py-3 border border-transparent text-base font-medium ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </button>
          </div>
          <p className="mt-4 mb-8 text-md leading-relaxed">
            I am a Full Stack Web Developer leveraging a background in IT to
            build a more intuitive user experience on the web. Recently earned a
            certificate in Full Stack Development from the University of North
            Carolina, with newly developed skills in JavaScript, CSS, React.js,
            and responsive web design. Known as an innovative problem-solver
            passionate about developing apps, with a focus on mobile-first
            design and development. With each project, my aim is to best engage
            my audience for an impactful user-experience. I applied aspects of
            UX and agile development in a recent project where I worked in a
            team of four to develop a single-page MERN app leverages AJAX
            requests to dynamically generate Dinner recipes with suggested wine
            pairing and Movie suggestions based on user input. Excited to
            leverage skills in the future as part of a fast-paced,
            quality-driven team in order to build better experiences on the web.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="cursor-pointer rounded-full object-cover object-center rounded"
            alt="hero"
            onClick={() => {
              window.open("http://www.github.com/b00000001");
            }}
            src={profilepic}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
