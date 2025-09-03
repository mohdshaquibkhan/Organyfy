import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Login/loginimg.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("organyfyEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) return setError("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email");
    if (!password) return setError("Password is required");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    if (remember) {
      localStorage.setItem("organyfyEmail", email);
    } else {
      localStorage.removeItem("organyfyEmail");
    }

    localStorage.setItem("organyfyUser", JSON.stringify({ email }));
    alert("Login successful 🎉");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-green-50">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-green-100 p-8 order-1 md:order-none">
        <div className="text-center">
          <img src={img} alt="Organic Food" className="w-56 md:w-64 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Welcome to Organyfy Food
          </h2>
          <p className="mt-2 text-green-700 text-sm md:text-base">
            Fresh, Healthy, and 100% Organic Food delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 order-2">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-xl md:text-2xl font-bold text-green-700 text-center mb-6">
            Login to Organyfy
          </h2>

          {error && (
            <p className="mb-4 text-red-600 text-sm text-center">{error}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-green-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="rounded text-green-600"
                />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-green-700 mt-5">
            Don not have an account?{" "}
            <a href="/signup" className="font-semibold text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
