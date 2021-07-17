import React, { useState } from "react";

const Contact = () => {
  const [userName, setUserName] = useState({
    value: ""
  });
  const handleChange = (e) => {
    setUserName({ value: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(userName);
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form
        action="mailto:deas.aaron@gmail.com"
        method="POST"
        encType="multipart/form-data"
        name="EmailForm"
        className="flex flex-col items-center"
        onSubmit={handleForm}
      >
        <label className="block w-1/2">
          <span className="text-gray-700" id="contactName">
            Your Name:
          </span>
          <input
            type="text"
            id="contactName"
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Your Name Here"
          />
          <span className="text-gray-700">E-mail</span>
          <input
            type="email"
            id="contactEmail"
            className="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
          <span className="text-gray-700 text-xl">Enter Message:</span>
          <textarea
            className="form-textarea mt-1 block w-full"
            id="contactMessage"
            placeholder="Enter your message here."
          />
        </label>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
