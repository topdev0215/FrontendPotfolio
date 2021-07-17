import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Form</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={() => {
          console.log("Submit form");
        }}
      >
        <label className="block w-1/2">
          <span class="text-gray-700">Your Name:</span>
          <input
            type="email"
            class="form-input mt-1 block w-full"
            placeholder="Your Name Here"
          />
          <span class="text-gray-700">E-mail</span>
          <input
            type="email"
            class="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
          <span className="text-gray-700 text-xl">Enter Message:</span>
          <textarea
            className="form-textarea mt-1 block w-full"
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
