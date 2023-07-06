import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here, e.g., sending data to a server

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        ></textarea>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
