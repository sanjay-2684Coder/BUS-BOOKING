import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.mobile === mobile) {
      alert("Login successful!");
      navigate("/"); // Redirect to home after login
    } else {
      alert("Invalid email or mobile number");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
