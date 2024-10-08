import React, { useState } from "react";
import AgriConnectLogo from "D:/Project/SIH Project/Media/Logo.jpg";

function Registeration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Print form data to console
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
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Enter your user ID"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              required
              placeholder="Confirm your password"
            />
          </div>
          
          {/* Register Button */}
          <div className="col-span-2 mt-6 flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-yellow-500 text-white rounded-full focus:outline-none hover:bg-yellow-600 z-10"
            >
              Register
            </button>
          </div>
        </form>

        {/* Bottom Link */}
        <div className="mt-4 text-center relative z-10">
          <span className="text-gray-600">Already have an account?</span>
          <a href="/login" className="text-green-500 ml-1">
            Login
          </a>
        </div>

        {/* Decorative Waves */}
        <div className="absolute bottom-0 left-0 right-0 z-0"> {/* Added z-0 */}
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