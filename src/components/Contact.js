import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactSvgIcon from "../assets/images/emailavatarsvgicon.svg";
const Contact = () => {
  const [sendNotification, changeNotification] = useState("Contact Form");
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_1v4wbo8",
        "contact_form",
        e.target,
        "user_RaVuwrNwH5bfd9UjZZzoh"
      )
      .then(
        (result) => {
          console.log(result.text);
          changeNotification("E-mail Successfully Sent, thank you!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen text-gray-400 bg-gray-900">
      <div>
        <img
          className="h-14 flex pt-5 justify-center w-full"
          src={contactSvgIcon}
          alt=""
        />
      </div>

      <div className="flex items-center flex-col">
        <h1 className="mt-10 text-xl">{sendNotification}</h1>
        <div className="flex w-full w-auto justify-center">
          <p className="pt-3 text-xl">
            You can use this form to contact me by e-mail directly. Once you
            fill out this form press Send and your message will be sent directly
            to my e-mail. Thank you for visiting!
          </p>
        </div>

        <form className="w-1/2 lg:w-1/4 contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label className="block w-1/2 text-xl">Name </label>
          <input
            type="text"
            name="user_name"
            required
            className="form-input mt-1 block w-auto lg:w-full"
            placeholder="John Doe"
          />
          <label className="text-xl">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="form-input mt-1 block w-auto lg:w-full"
            placeholder="john@example.com"
          />
          <label className="text-xl">Message</label>
          <textarea
            className="form-textarea mt-1 block w-auto lg:w-full"
            name="message"
            required
            placeholder="Enter your message here."
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
