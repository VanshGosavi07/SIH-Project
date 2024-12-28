import React, { useState } from "react";
import { validateFarmerProfile } from "./Validation";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Farmer_Profile() {
  const location = useLocation();
  const { name, emailId, userId, userType, password } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: name,
    email: emailId,
    userId: userId,
    userType: userType,
    password: password,
    mobileNumber: "",
    address: "",
    gender: "",
    age: "",
    experience: "",
    contractsMade: "",
    profilePic: null,
    farmAddress: "",
    landArea: "",
    soilType: "",
    customSoilType: "",
    farmType: "",
    landPictures: [],
    well: "",
    preferredCrops: [],
    achievements: [{ title: "", date: "" }],
    additionalInfo: [{ title: "", info: "" }],
    contracts: [{ title: "", date: "" }],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profilePic: file });
  };

  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = [...formData.achievements];
    updatedAchievements[index][field] = value;
    setFormData({ ...formData, achievements: updatedAchievements });
    setErrors({ ...errors, [`achievements[${index}].${field}`]: "" });
  };

  const handleAdditionalInfoChange = (index, field, value) => {
    const updatedAdditionalInfo = [...formData.additionalInfo];
    updatedAdditionalInfo[index][field] = value;
    setFormData({ ...formData, additionalInfo: updatedAdditionalInfo });
    setErrors({ ...errors, [`additionalInfo[${index}].${field}`]: "" });
  };

  const handleContractChange = (index, field, value) => {
    const updatedContracts = [...formData.contracts];
    updatedContracts[index][field] = value;
    setFormData({ ...formData, contracts: updatedContracts });
    setErrors({ ...errors, [`contracts[${index}].${field}`]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("user_id", formData.userId);
    formDataToSend.append("user_type", formData.userType);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("mobile_number", formData.mobileNumber);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("contracts_made", formData.contractsMade);
    formDataToSend.append("farm_address", formData.farmAddress);
    formDataToSend.append("land_area", formData.landArea);
    formDataToSend.append("soil_type", formData.soilType);
    formDataToSend.append("custom_soil_type", formData.customSoilType);
    formDataToSend.append("farm_type", formData.farmType);
    formDataToSend.append("well", formData.well ? "True" : "False");
    formDataToSend.append(
      "preferred_crops",
      JSON.stringify(formData.preferredCrops)
    );
    formDataToSend.append(
      "achievements",
      JSON.stringify(formData.achievements)
    );
    formDataToSend.append(
      "additional_info",
      JSON.stringify(formData.additionalInfo)
    );
    formDataToSend.append("contracts", JSON.stringify(formData.contracts));
    if (formData.profilePic) {
      formDataToSend.append("profile_pic", formData.profilePic);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/farmer/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Profile updated successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <div
      className="bg-gray-100 font-sans leading-normal tracking-normal"
      style={{ backgroundColor: "white" }}
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="text-center mb-8">
          <h1 className="mx-4 text-green-900 font-bold text-5xl">
            Complete Profile
          </h1>
        </nav>

        <form onSubmit={handleSubmit}>
          {/* Farmer Information Section */}
          <div>
            <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
              Farmer Information
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="name"
                        className="block text-black-700 text-left"
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 bg-gray-50 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        readOnly
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block text-black-700 text-left"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className={`mt-1 pl-3 block w-full h-10 bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        readOnly
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="mobileNumber"
                        className="block text-black-700 text-left"
                      >
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter Mobile Number"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.mobileNumber ? "border-red-500" : ""
                        }`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="address"
                        className="block text-black-700 text-left"
                      >
                        Address*
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Address"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.address ? "border-red-500" : ""
                        }`}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="gender"
                        className="block text-black-700 text-left"
                      >
                        Gender*
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`mt-1 pl-3 pr-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.gender ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.gender && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.gender}
                        </p>
                      )}
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="age"
                        className="block text-black-700 text-left"
                      >
                        Age*
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter Age"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.age ? "border-red-500" : ""
                        }`}
                      />
                      {errors.age && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.age}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="experience"
                        className="block text-black-700 text-left"
                      >
                        Experience (in years)*
                      </label>
                      <input
                        type="number"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Enter Experience"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.experience ? "border-red-500" : ""
                        }`}
                      />
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.experience}
                        </p>
                      )}
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="contractsMade"
                        className="block text-black-700 text-left"
                      >
                        Contracts Made*
                      </label>
                      <input
                        type="number"
                        id="contractsMade"
                        name="contractsMade"
                        value={formData.contractsMade}
                        onChange={handleChange}
                        placeholder="Enter Contracts Made"
                        className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                          errors.contractsMade ? "border-red-500" : ""
                        }`}
                      />
                      {errors.contractsMade && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.contractsMade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                  <div className="m-4 text-center">
                    <label
                      htmlFor="profilePic"
                      className="block text-gray-700 text-lg font-semibold mb-2"
                    >
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      id="profilePic"
                      name="profilePic"
                      onChange={handleProfilePicChange}
                      className="mt-1 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 ease-in-out hover:border-green-400"
                      accept="image/*"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                      Upload a clear picture (JPG, PNG, GIF).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Information Section */}
          <div>
            <div className=" text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
              Farm Information
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-2">
                  <label
                    htmlFor="farmAddress"
                    className="block text-black-700 text-left"
                  >
                    Farm Address*
                  </label>
                  <textarea
                    id="farmAddress"
                    name="farmAddress"
                    value={formData.farmAddress}
                    onChange={handleChange}
                    placeholder="Enter Farm Address"
                    className={`mt-1 pl-3 pt-5 block w-full h-20 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                      errors.farmAddress ? "border-red-500" : ""
                    }`}
                  />
                  {errors.farmAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.farmAddress}
                    </p>
                  )}
                </div>
                <div className="m-2">
                  <label
                    htmlFor="landArea"
                    className="block text-black-700 text-left"
                  >
                    Land Area*
                  </label>
                  <input
                    type="number"
                    id="landArea"
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleChange}
                    placeholder="Enter Land Area"
                    className={`mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                      errors.landArea ? "border-red-500" : ""
                    }`}
                  />
                  {errors.landArea && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.landArea}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-2">
                  <label
                    htmlFor="soilType"
                    className="block text-black-700 text-left"
                  >
                    Soil Type*
                  </label>
                  <select
                    id="soilType"
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleChange}
                    className={`mt-1 pl-3 pr-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                      errors.soilType ? "border-red-500" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select Soil Type
                    </option>
                    <option value="Alluvial Soil">Alluvial Soil</option>
                    <option value="Black Soil">Black Soil</option>
                    <option value="Red Soil">Red Soil</option>
                    <option value="Laterite Soil">Laterite Soil</option>
                    <option value="Arid Soil">Arid Soil</option>
                    <option value="Saline Soil">Saline Soil</option>
                    <option value="Peaty Soil">Peaty Soil</option>
                    <option value="Forest Soil">Forest Soil</option>
                    <option value="Mountain Soil">Mountain Soil</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.soilType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.soilType}
                    </p>
                  )}
                  {formData.soilType === "Others" && (
                    <input
                      type="text"
                      id="custom_soil_type"
                      name="customSoilType"
                      value={formData.customSoilType}
                      onChange={handleChange}
                      placeholder="Enter Custom Soil Type"
                      className={`mt-2 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                        errors.customSoilType ? "border-red-500" : ""
                      }`}
                    />
                  )}
                  {errors.customSoilType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.customSoilType}
                    </p>
                  )}
                </div>

                <div className="m-2">
                  <label
                    htmlFor="farmType"
                    className="block text-black-700 text-left"
                  >
                    Farm Type*
                  </label>
                  <select
                    id="farmType"
                    name="farmType"
                    value={formData.farmType}
                    onChange={handleChange}
                    className={`mt-1 pl-3 pr-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 ${
                      errors.farmType ? "border-red-500" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select Farm Type
                    </option>
                    <option value="Bagayti (Horticulture Farming)">
                      Bagayti (Horticulture Farming)
                    </option>
                    <option value="Jirayat (Rainfed Farming)">
                      Jirayat (Rainfed Farming)
                    </option>
                    <option value="Irrigated Farming">Irrigated Farming</option>
                    <option value="Dryland Farming">Dryland Farming</option>
                    <option value="Shifting Cultivation (Jhum Farming)">
                      Shifting Cultivation (Jhum Farming)
                    </option>
                    <option value="Plantation Farming">
                      Plantation Farming
                    </option>
                    <option value="Mixed Farming">Mixed Farming</option>
                    <option value="Organic Farming">Organic Farming</option>
                    <option value="Subsistence Farming">
                      Subsistence Farming
                    </option>
                    <option value="Commercial Farming">
                      Commercial Farming
                    </option>
                  </select>
                  {errors.farmType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.farmType}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-2 p-2 bg-white rounded-md shadow-md w-full">
                  <label className="block text-black-700 text-left mb-2">
                    Well*
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="well"
                        value="YES"
                        checked={formData.well === "YES"}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 pl-3 text-blue-600"
                      />
                      <span className="ml-2">YES</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="well"
                        value="NO"
                        checked={formData.well === "NO"}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2">NO</span>
                    </label>
                  </div>
                  {errors.well && (
                    <p className="text-red-500 text-sm mt-1">{errors.well}</p>
                  )}
                </div>
              </div>

              <div className="m-2">
                <label className="block text-black-700 text-left">
                  Preferred Crops
                </label>
                <div className="flex items-center mt-1">
                  <input
                    type="text"
                    value={formData.newCrop}
                    onChange={(e) =>
                      setFormData({ ...formData, newCrop: e.target.value })
                    }
                    placeholder="Enter a crop"
                    className="flex-grow h-10 pl-3 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 mr-2"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.newCrop.trim() !== "") {
                        setFormData({
                          ...formData,
                          preferredCrops: [
                            ...formData.preferredCrops,
                            formData.newCrop.trim(),
                          ],
                          newCrop: "",
                        });
                      }
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Add Crop
                  </button>
                </div>
                <div className="mt-2">
                  {formData.preferredCrops.map((crop, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {crop}
                      <button
                        type="button"
                        onClick={() => {
                          const updatedPreferredCrops = [
                            ...formData.preferredCrops,
                          ];
                          updatedPreferredCrops.splice(index, 1);
                          setFormData({
                            ...formData,
                            preferredCrops: updatedPreferredCrops,
                          });
                        }}
                        className="ml-2 text-red-600 focus:outline-none"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {errors.preferredCrops && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredCrops}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="bg-green-500 text-white rounded-full px-4 py-3 mb-6 flex justify-between items-center">
              <div className="font-bold">Achievements</div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    achievements: [
                      ...formData.achievements,
                      { title: "", date: "" },
                    ],
                  });
                }}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {formData.achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="m-2">
                      <label
                        htmlFor={`achievement-title-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id={`achievement-title-${index}`}
                        placeholder="Enter Title"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={achievement.title}
                        onChange={(e) =>
                          handleAchievementChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor={`achievement-date-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id={`achievement-date-${index}`}
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={achievement.date}
                        onChange={(e) =>
                          handleAchievementChange(index, "date", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const updatedAchievements = [...formData.achievements];
                      updatedAchievements.splice(index, 1);
                      setFormData({
                        ...formData,
                        achievements: updatedAchievements,
                      });
                    }}
                    className="text-red-600 mt-2 hover:underline focus:outline-none"
                  >
                    Remove
                  </button>
                  {index < formData.achievements.length - 1 && (
                    <hr className="border-t border-black my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information Section */}
          <div>
            <div className="bg-green-500 text-white rounded-full px-4 py-3 mb-6 flex justify-between items-center">
              <div className="text-left font-bold">Additional Information</div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    additionalInfo: [
                      ...formData.additionalInfo,
                      { title: "", info: "" },
                    ],
                  });
                }}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg text-left shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {formData.additionalInfo.map((info, index) => (
                <div key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="m-2">
                      <label
                        htmlFor={`additional-title-${index}`}
                        className="block text-black-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id={`additional-title-${index}`}
                        placeholder="Enter Title"
                        className="mt-1 pl-3 block w-full h-10 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={info.title}
                        onChange={(e) =>
                          handleAdditionalInfoChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor={`info-${index}`}
                        className="block text-black-700"
                      >
                        Additional Info
                      </label>
                      <textarea
                        id={`info-${index}`}
                        placeholder="Enter additional info"
                        className="mt-1 pl-3 pt-5 block w-full h-24 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={info.info}
                        onChange={(e) =>
                          handleAdditionalInfoChange(
                            index,
                            "info",
                            e.target.value
                          )
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedAdditionalInfo = [
                          ...formData.additionalInfo,
                        ];
                        updatedAdditionalInfo.splice(index, 1);
                        setFormData({
                          ...formData,
                          additionalInfo: updatedAdditionalInfo,
                        });
                      }}
                      className="text-red-600 mt-2  hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                  {index < formData.additionalInfo.length - 1 && (
                    <hr className="border-t border-black my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Contracts Section */}
          <div>
            <div className="bg-green-500 text-white rounded-full px-4 py-3 mb-6 flex justify-between items-center">
              <div className="text-left font-bold">Previous Contracts</div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    contracts: [
                      ...formData.contracts,
                      { title: "", date: "", certificate: null },
                    ],
                  });
                }}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {formData.contracts.map((contract, index) => (
                <div key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="m-2">
                      <label
                        htmlFor={`contract-title-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id={`contract-title-${index}`}
                        placeholder="Enter Title"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={contract.title}
                        onChange={(e) =>
                          handleContractChange(index, "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor={`contract-date-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id={`contract-date-${index}`}
                        className="mt-1 pl-3 pr-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={contract.date}
                        onChange={(e) =>
                          handleContractChange(index, "date", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const updatedContracts = [...formData.contracts];
                      updatedContracts.splice(index, 1);
                      setFormData({ ...formData, contracts: updatedContracts });
                    }}
                    className="text-red-600 mt-2 hover:underline focus:outline-none"
                  >
                    Remove
                  </button>
                  {index < formData.contracts.length - 1 && (
                    <hr className="border-t border-black my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Farmer_Profile;
