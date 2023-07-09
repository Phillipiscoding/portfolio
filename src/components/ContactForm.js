import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [input, setInput] = useState({});
  const [err, setErr] = useState([]);
  const [messageSent, setMessageSent] = useState(null);
  const form = useRef();
  const serviceId = "service_0h9zksq";
  const templateId = "template_6ahtpil";
  const publicKey = "IT_6Gd78lg1g9xJG0";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    const errors = [];

    if (!input.from_name) {
      errors.push("Please enter your name.");
    }

    if (!input.from_email) {
      errors.push("Please enter your email.");
    }

    if (!input.message) {
      errors.push("Please enter your message.");
    }

    if (errors.length > 0) {
      setErr(errors);
    } else {
      setMessageSent("Your message was sent, I look forward to connecting with you.");

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text); // respondes with "OK" if accpeted and sent
          form.current.reset(); // clears the input fields
        },
        (error) => {
          console.log(error.text);
        }
      );


    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const confirmError = () => {
    setErr([]);
  };

  const confirmSent = () => {
    setMessageSent(null);
  };

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          name="from_name"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          name="from_email"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message"
          name="message"
          rows="5"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary no-op" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {err.length > 0 && (
        <div className="confirmation-message error-message ">
          <div>
            <h4>Error</h4>
          </div>
          <div className="confirmation-message-containererror-message-container">
            {err.map((errorMessage, index) => (
              <p key={index}>{errorMessage}</p>
            ))}
          </div>
          <div>
            <button
              className="btn btn-primary error-btn"
              type="button"
              onClick={confirmError}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {messageSent && (
        <div className="confirmation-message sent-message">
          <h4>Message Sent</h4>
          <div className="confirmation-message-container sent-message-container">
            <p>{messageSent}</p>
          </div>
          <button
            className="btn btn-primary sent-btn"
            type="button"
            onClick={confirmSent}
          >
            OK
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
