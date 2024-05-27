// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import toast from "react-hot-toast";

const initialState = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword : ""
};

const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  //error
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const {value, name} = e.target
    setFormData({...formData, [name] : value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }



    setError("");
    // Add signup logic here (e.g., API call)
    // On successful signup, redirect to the login page
    // const response = await fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("users", formDataString);
    const response = localStorage.getItem("users")
    if (response) {
      navigate("/login");
      toast.success("created" );
    } else {
      setError(error)
      toast.error(" failed");
    }
  };

  return (
    <div>
      <div className="relative bg-cover bg-center h-screen bg-[url('/assets/service.avif')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Signup</h1>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md mt-10 mb-10"
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>


        <div className="block mb-2">
          <div className="text-gray-700">FullName</div>
          <input
            type="text"
            name = "fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 block w-full border-2"
            required
          />
        </div>

        <div className="block mb-2">
          <div className="text-gray-700">Email</div>
          <input
            type="email"
            name = "email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-2"
            required
          />
        </div>

        <div className="block mb-4">
          <div className="text-gray-700">Password</div>
          <input
             type="password"
             name = "password"
             value={formData.password}
             onChange={handleChange}
             className="mt-1 block w-full border-2"
             required
          />
        </div>
        <div className="block mb-4">
          <div className="text-gray-700">Confirm Password</div>
          <input
             type="confirmPassword"
             name = "confirmPassword"
             value={formData.confirmPassword}
             onChange={handleChange}
             className="mt-1 block w-full border-2"
             required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded-md"
        >
          Signup
        </button>
        <div className=" sm:ml-6 flex items-center justify-center">
          <p>Already have an saccount ? &nbsp;</p>
          <Link
            to="/login"
            className=" hover:underline hover:text-green-500 text-sm font-bold hover:font-bold"
          >
            Login
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;
