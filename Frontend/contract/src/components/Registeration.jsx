import React, { useState } from "react";
import AgriConnectLogo from "../../../../Media/Logo.jpg";
import { validateRegistrationForm } from "./validation/V_Register";
import { useNavigate } from "react-router-dom";
import backimg from "../assets/bg.jpg";

function Registeration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    userType: "",
    apmcId: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegistrationForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid:", formData);
      alert("Proceed to Complete Profile");
      if (formData.userType === "farmer") {
        navigate("/farmer_profile_form", { state: formData });
      } else if (formData.userType === "company") {
        navigate("/company_profile_form", { state: formData });
      }
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white bg-opacity-5 backdrop-blur-2xl border border-black rounded-xl w-full max-w-md p-6 relative"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* Logo */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={AgriConnectLogo}
            alt="AgriConnect"
            className="h-14 w-14 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full h-9 border-b ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none text-sm`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">APMC ID</label>
            <input
              type="text"
              name="apmcId"
              value={formData.apmcId}
              onChange={handleChange}
              className={`w-full h-9 border-b ${
                errors.apmcId ? "border-red-500" : "border-gray-300"
              } focus:outline-none text-sm`}
              placeholder="Enter APMC Registration Number"
            />
            {errors.apmcId && (
              <p className="text-red-500 text-xs mt-1">{errors.apmcId}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className={`w-full h-9 border-b ${
                errors.emailId ? "border-red-500" : "border-gray-300"
              } focus:outline-none text-sm`}
              placeholder="Enter your email"
            />
            {errors.emailId && (
              <p className="text-red-500 text-xs mt-1">{errors.emailId}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className={`w-full h-9 border-b ${
                errors.userType ? "border-red-500" : "border-gray-300"
              } focus:outline-none bg-white text-sm`}
            >
              <option value="" disabled>Select user type</option>
              <option value="farmer">Farmer</option>
              <option value="company">Company</option>
            </select>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full h-9 border-b ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none text-sm`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Register Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="px-6 py-1.5 bg-yellow-500 text-white text-sm rounded-full focus:outline-none hover:bg-yellow-600 z-20"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-3 text-center relative z-20 text-sm">
          <span className="text-gray-600 text-sm">Already have an account?</span>
          <a href="/login" className="text-green-500 ml-1 text-sm">
            Login
          </a>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
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

export default Registeration;