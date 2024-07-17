import React from "react";
import "./Contact.css";
import swal from "sweetalert";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "781e8044-0e5e-4830-848e-407942f8083f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      swal({
        title: "🎉message sent successfully!🎉",
        text: "Thanks for contacting me! I appreciate your message and will be in touch soon.",
        icon: "success",
        button: "OK",
        className: "alertbox",
      });
    }
  };
  return (
    <div className="contact">
      <h1 className="title">Drop A Message</h1>
      <div className="divbox">
        <form className="formbox" onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Enter the text"
            required
          />
          <div className="btndiv">
            <button type="submit" className="formbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
