import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [input, setInput] = useState({
    "from_name": "",
    "from_email": "",
    "message": "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const form = useRef();
  const serviceId = "service_0h9zksq";
  const templateId = "template_6ahtpil";
  const publicKey = "IT_6Gd78lg1g9xJG0";

  const sendEmail = async (e) => {
    e.preventDefault();

    console.log(input);
    if (input.from_name == "") {
      console.log("Please enter your name.");
      setError("Please enter your name.");
    }
    if (input.from_email == "") {
      console.log("Please enter your email address.");
      setError("Please enter your email address.");
    }
    if (input.message == "") {
      console.log("Please enter a message.");
      setError("Please enter a message.");
    }
    if (err == null && input.from_name == "" && input.from_email == "" &&input.message == "") {
      console.log("It's good to go");
    }

    // emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
    //   (result) => {
    //     console.log(result.text); // respondes with "OK" if accpeted and sent
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  const acceptErrorMessage = () => {
    console.log("ok error");
    setError(null);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(input);

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
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
        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>

      {err && (
        <div className="error-message">
          <h4>Error</h4>
          <div className="error-message-container">
            <p>{err}</p>
          </div>
          <button
            className="btn btn-primary error-btn"
            type="button"
            onClick={acceptErrorMessage}
          >
            OK
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
