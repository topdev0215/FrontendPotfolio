import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl">Contact Form</h1>
      <form className="w-1/2 contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label className="block w-1/2 text-xl">Name </label>
        <input
          type="text"
          name="user_name"
          className="form-input mt-1 block w-full"
          placeholder="John Doe"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="form-input mt-1 block w-full"
          placeholder="john@example.com"
        />
        <label>Message</label>
        <textarea
          className="form-textarea mt-1 block w-full"
          name="message"
          placeholder="Enter your message here."
        />
        <input className="bg-blue" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
