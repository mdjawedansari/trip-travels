// src/components/Login.js
"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import toast from "react-hot-toast";
// import { generateAccessToken } from "../helper/Auth";

const ValidityState = (email, password) => {
  const isValidEmail = email.includes("@"); // Simple example, you might want to use a regex
  const isValidPassword = password.length >= 6; // Example condition for password length

  if (!isValidEmail) {
    toast.error("Please enter a valid email address");
  }

  if (!isValidPassword) {
    toast.error("Password must be at least 6 characters long");
  }

  return isValidEmail && isValidPassword;
};

const Login = () => {
  // const jwt_secret = "c1621af8-c3bf-4a19-9484-7085e1768422";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add login logic here (e.g., API call)
  // On successful login, redirect to the home page

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ValidityState(email, password)) {
      //   const response = await fetch("http://localhost:3000/users", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ email, password }),
      //   });
      const response = localStorage.getItem("users");

      
      if (response) {
        
        // const accessToken = await generateAccessToken(data, jwt_secret)
        // console.log(accessToken);
        // localStorage.setItem("authToken", jwt_secret);
        navigate("/");
        toast.success("created");
      } else {
        setError(error);
        toast.error(" failed");
      }
    }
  };

  return (
    <div>
      <div className="relative bg-cover bg-center h-screen bg-[url('/assets/service.avif')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Login</h1>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md mt-10 mb-10"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
        <div className="block mb-2">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border-2"
            required
          />
        </div>
        <div className="block mb-4">
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded-md"
        >
          Login
        </button>
        <div className=" sm:ml-6 flex items-center justify-center">
          <p>Don't have an account ? &nbsp;</p>
          <Link
            to="/signup"
            className=" hover:underline hover:text-green-500  text-sm font-bold hover:font-bold"
          >
            Signup
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
