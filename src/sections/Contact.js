import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="">
        <h2>Contact Me</h2>
        <hr className="rounded" />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
