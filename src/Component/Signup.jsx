import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Login/loginimg.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name) return setError("Name is required");
    if (!formData.email) return setError("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return setError("Enter a valid email");
    if (!formData.password) return setError("Password is required");
    if (formData.password.length < 6)
      return setError("Password must be at least 6 characters");
    if (formData.password !== formData.confirmPassword)
      return setError("Passwords do not match");

    // Save to localStorage (demo only)
    localStorage.setItem(
      "organyfyUser",
      JSON.stringify({ name: formData.name, email: formData.email })
    );
    alert("Signup successful 🎉");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-50">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-green-100 p-8 order-1 md:order-none">
        <div className="text-center">
          <img src={img} alt="Organic Food" className="w-56 md:w-64 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Join Organyfy Food
          </h2>
          <p className="mt-2 text-green-700 text-sm md:text-base">
            Sign up today and enjoy fresh, healthy, and 100% organic food at
            your doorstep.
          </p>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 order-2">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-xl md:text-2xl font-bold text-green-700 text-center mb-6">
            Create an Account
          </h2>

          {error && (
            <p className="mb-4 text-red-600 text-sm text-center">{error}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-green-700 mt-5">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-green-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
