import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const serviceId = "service_0h9zksq";
  const templateId = "template_6ahtpil";
  const publicKey = "IT_6Gd78lg1g9xJG0";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          name="from_name"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          name="from_email"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message"
          name="message"
          rows="5"
          required
        ></textarea>
      </div>
      <div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default ContactForm;
