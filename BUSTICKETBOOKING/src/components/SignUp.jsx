import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user)); // Store user data
    alert("Sign-up successful!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="date" name="dob" onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
