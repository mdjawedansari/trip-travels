import React, { useState } from "react";
import Footer from "./Footer";
import toast from "react-hot-toast";


const initialState = { fullname: "", email: "", subject: "", message: "" }
const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const errors = {};
    if (!formData.fullname) errors.fullname = "FullName is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      toast.success("Message sent successfully!", {
        position: "top-center",
      });
      // Handle form submission logic here
    }
    setFormData(initialState);
  };

  return (
    <div className="relative bg-cover bg-center h-screen bg-[url('/assets/contact.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
        </div>
      </div>
      <div className="max-w-2xl flex shadow-2xl p-8 justify-center m-auto mt-6 ">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Send a message to us!
          </h1>
          <form onSubmit={handleSubmit} className="w-full mt-8">
            <div>
              <input
                className="w-full border-2 p-4 rounded-lg border-gray-400 mb-2"
                placeholder="FullName"
                id="fullname"
                name="fullname"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
                
              />
              {formErrors.fullname && <span className="text-sm text-red-500  mb-2">{formErrors.fullname}</span>}
            </div>
            <div>
              <input
                className="w-full border-2 p-4 rounded-lg border-gray-400 mb-2"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                
              />
              {formErrors.email && <span className="text-sm text-red-500  mb-2">{formErrors.email}</span>}
            </div>
            <div>
              <input
                className="w-full border-2 p-4 border-gray-400 rounded-lg mb-2"
                placeholder="Subject"
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                
              />
              {formErrors.subject && <span className="text-sm text-red-500  mb-2">{formErrors.subject}</span>}

            </div>
            <div>
              <textarea
                className="w-full border-2 p-4 border-gray-400 rounded-lg mb-2"
                placeholder="Message"
                rows="4"
                id="message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                
              />
              {formErrors.message && <span className="text-sm text-red-500  mb-2">{formErrors.message}</span>}

            </div>
            <button
              type="submit"
              className="w-full bg-gray-400 rounded-lg font-semibold p-4 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
