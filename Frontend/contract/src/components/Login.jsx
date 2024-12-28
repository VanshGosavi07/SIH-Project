import React, { useState } from "react";
import AgriConnectLogo from "../../../../Media/Logo.jpg";
import { validateLoginForm } from "./validation/V_Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backimg from "../assets/bg.jpg"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    user_type: "", // Ensure the state property name matches the form field name
  });
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/login/${formData.user_type}/`,
          formData
        );

        const { access, refresh, profile_image_url, user_type, user_id } =
          response.data; // Destructure access and refresh tokens
        console.log("Access Token from response:", access); // Print the access token in the console
        console.log("Refresh Token from response:", refresh); // Print the refresh token in the console

        // Save the tokens to local storage
        localStorage.setItem("authToken", access);
        localStorage.setItem("refreshToken", refresh);
        localStorage.setItem("profileImageUrl", profile_image_url);
        localStorage.setItem("user_type", user_type);
        localStorage.setItem("Current_User_id", user_id);

        // Retrieve the tokens from local storage to confirm they were set
        const storedAccessToken = localStorage.getItem("authToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");
        const storedProfileImageUrl = localStorage.getItem("profileImageUrl");

        console.log("Access Token from local storage:", storedAccessToken); // Print the access token from local storage
        console.log("Refresh Token from local storage:", storedRefreshToken); // Print the refresh token from local storage
        console.log(
          "Profile Image URL from local storage:",
          storedProfileImageUrl
        );
        console.log("User id from local storage:", user_id);
        setLoginStatus(response.data.message);
        alert("Login Successfully");
        navigate("/home");
      } catch (error) {
        if (error.response) {
          alert("Wrong Credentials");
          setLoginStatus(error.response.data.error);
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center" 
      style={{ backgroundImage: `url(${backimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white bg-opacity-5 backdrop-blur-2xl border border-black rounded-2xl w-full max-w-2xl p-8 relative"
      style={{ backdropFilter: 'blur(10px)', borderRadius: '2rem' }} 
      >
        <div className="flex justify-center items-center mb-6">
          <img
            src={AgriConnectLogo}
            alt="AgriConnect"
            className="h-20 w-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-2xl"
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
              } focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4`}
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
              } focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">User Type</label>
            <select
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
            >
              <option value="">Select user type</option>
              <option value="farmer">Farmer</option>
              <option value="company">Company</option>
            </select>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-yellow-500 text-white rounded-full focus:outline-none hover:bg-yellow-600 z-20"
            >
              Login
            </button>
          </div>

          {loginStatus && <p className="text-center mt-4">{loginStatus}</p>}
        </form>

                {/* Bottom Link */}
                <div className="mt-4 text-center relative z-20">
          <span className="text-gray-600">Create a account?</span>
          <a href="/register" className="text-green-500 ml-1">
            Register
          </a>
        </div>

        {/* Decorative Waves */}
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

export default Login;