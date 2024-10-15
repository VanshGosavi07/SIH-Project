import React, { useState } from "react";
import AgriConnectLogo from "../../../../Media/Logo.jpg";
import { validateLoginForm } from "./validation/V_Login";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for this field when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with login
      console.log("Form is valid:", formData);
      // Add your login logic here
    } else {
      console.log("Form has errors:", validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 relative">
        {/* Top Section: Logo */}
        <div className="flex justify-center items-center mb-6">
          <img
            src={AgriConnectLogo}
            alt="AgriConnect"
            className="h-20 w-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Form Inputs */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-8 gap-y-4"
        >
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-b ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border-b ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-yellow-500 text-white rounded-full focus:outline-none hover:bg-yellow-600 z-10"
            >
              Login
            </button>
          </div>
        </form>

        {/* Bottom Link */}
        <div className="mt-4 text-center relative z-10">
          <span className="text-gray-600">Don't have an account?</span>
          <a href="/register" className="text-green-500 ml-1">
            Register
          </a>
        </div>

        {/* Decorative Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4CAF50"
              fillOpacity="0.2"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Login;
