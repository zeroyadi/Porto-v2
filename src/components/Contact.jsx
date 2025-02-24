import { CONTACT } from "../constants";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      
      {/* Formulir Pengiriman Pesan */}
      <div className="mt-10 max-w-lg mx-auto p-5 border border-purple-900 rounded-lg">
        <h2 className="text-xl text-center mb-5">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-left">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-700 text-neutral-900 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-left">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-700 text-neutral-900 rounded"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-left">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-700 text-neutral-900 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-left">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-700 text-neutral-900 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-neutral-900 text-purple-900 rounded hover:bg-cyan-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
