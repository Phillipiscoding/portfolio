import React, { useState } from "react";

function ContactForm() {
  const [input, setInput] = useState({}); 

  // const serviceId = "service_0h9zksq";
  // const templateId = "template_6ahtpil";
  // const publicKey = "IT_6Gd78lg1g9xJG0";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    // emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
    //   (result) => {
    //     console.log(result.text); // respondes with "OK" if accpeted and sent
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(input);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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

      {/* {err && (
        <div className="error-message">
          <h4>Error</h4>
          <div className="error-message-container">
            <p>{err}</p>
          </div>
          <button className="btn btn-primary error-btn" type="button">
            OK
          </button>
        </div>
      )} */}
    </form>
  );
}

export default ContactForm;
