import React, { useState } from "react";
import AgriConnectLogo from "../../../../Media/Logo.jpg";
import { validateLoginForm } from "./validation/V_Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

        const { access, refresh, profile_image_url, user_type } = response.data; // Destructure access and refresh tokens
        console.log("Access Token from response:", access); // Print the access token in the console
        console.log("Refresh Token from response:", refresh); // Print the refresh token in the console

        // Save the tokens to local storage
        localStorage.setItem("authToken", access);
        localStorage.setItem("refreshToken", refresh);
        localStorage.setItem("profileImageUrl", profile_image_url);
        localStorage.setItem("user_type", user_type);

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
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 relative">
        <div className="flex justify-center items-center mb-6">
          <img
            src={AgriConnectLogo}
            alt="AgriConnect"
            className="h-20 w-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>

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
          <div>
            <label className="block text-gray-700 mb-1">User Type</label>
            <select
              name="user_type" // Ensure the form field name matches the state property name
              value={formData.user_type}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>
    </div>
  );
}

export default Login;
