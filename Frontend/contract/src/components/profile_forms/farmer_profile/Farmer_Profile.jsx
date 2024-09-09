import React, { useState } from "react";

function Farmer_Profile() {
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );
  const [achievements, setAchievements] = useState([
    { title: "", date: "", certificate: null },
  ]);
  const [additionalInfo, setAdditionalInfo] = useState([
    { title: "", info: "" },
  ]);
  const [contracts, setContracts] = useState([
    { title: "", date: "", certificate: null },
  ]);
  const [landPictures, setLandPictures] = useState([]);
  const [preferredCrops, setPreferredCrops] = useState([]);
  const [newCrop, setNewCrop] = useState("");

  // Handle profile picture change
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      farmerInfo: {
        name: event.target.name.value,
        email: event.target.email.value,
        mobileNumber: event.target.mobileNumber.value,
        address: event.target.address.value,
        gender: event.target.gender.value,
        age: event.target.age.value,
        experience: event.target.experience.value,
        contractsMade: event.target.contractsMade.value,
        profilePic: profilePic,
      },
      farmInfo: {
        farmAddress: event.target.farmAddress.value,
        landArea: event.target.landArea.value,
        soilType: event.target.soilType.value,
        farmType: event.target.farmType.value,
        landPictures: landPictures,
        well: event.target.well.value,
        preferredCrops: preferredCrops,
      },
      achievements: achievements,
      additionalInfo: additionalInfo,
      previousContracts: contracts,
    };

    console.log("Form Data:", formData);
    alert("Form submitted successfully! Check console for data.");
  };

  // Achievements handlers
  const handleAddAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", date: "", certificate: null },
    ]);
  };

  const handleRemoveAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index][field] = value;
    setAchievements(updatedAchievements);
  };

  // Additional Information handlers
  const handleAddAdditionalInfo = () => {
    setAdditionalInfo([...additionalInfo, { title: "", info: "" }]);
  };

  const handleRemoveAdditionalInfo = (index) => {
    const updatedAdditionalInfo = [...additionalInfo];
    updatedAdditionalInfo.splice(index, 1);
    setAdditionalInfo(updatedAdditionalInfo);
  };

  const handleAdditionalInfoChange = (index, field, value) => {
    const updatedAdditionalInfo = [...additionalInfo];
    updatedAdditionalInfo[index][field] = value;
    setAdditionalInfo(updatedAdditionalInfo);
  };

  // Previous Contracts handlers
  const handleAddContract = () => {
    setContracts([...contracts, { title: "", date: "", certificate: null }]);
  };

  const handleRemoveContract = (index) => {
    const updatedContracts = [...contracts];
    updatedContracts.splice(index, 1);
    setContracts(updatedContracts);
  };

  const handleContractChange = (index, field, value) => {
    const updatedContracts = [...contracts];
    updatedContracts[index][field] = value;
    setContracts(updatedContracts);
  };

  // Handle land pictures change
  const handleLandPicturesChange = (event) => {
    setLandPictures([...event.target.files]);
  };

  // Preferred crops handlers
  const handleAddCrop = () => {
    if (newCrop.trim() !== "") {
      setPreferredCrops([...preferredCrops, newCrop.trim()]);
      setNewCrop("");
    }
  };

  const handleRemoveCrop = (cropToRemove) => {
    setPreferredCrops(preferredCrops.filter((crop) => crop !== cropToRemove));
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
            <div className="bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
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
                        required
                        placeholder="Enter name"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        placeholder="Enter email"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        placeholder="Enter Mobile Number"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        placeholder="Enter Address"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
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
                        required
                        placeholder="Enter Age"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        placeholder="Enter Experience"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
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
                        required
                        placeholder="Enter Contracts Made"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                  <div className="relative">
                    <img
                      className="rounded-full w-48 h-48 object-cover"
                      src={profilePic}
                      alt="Profile Picture"
                      id="profile-pic"
                    />
                    <label
                      htmlFor="upload-pic"
                      className="absolute text-left right-0 bottom-0 rounded-full bg-gray-800 p-2 cursor-pointer"
                    >
                      <i className="text-white text-xl">📷</i>
                      <input
                        type="file"
                        id="upload-pic"
                        className="hidden"
                        onChange={handleProfilePicChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                  <p className="mt-2 text-sm text-black-600">
                    Upload Profile Picture
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Information Section */}
          <div>
            <div className="bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
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
                    required
                    placeholder="Enter Farm Address"
                    className="mt-1 block w-full h-20 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
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
                    required
                    placeholder="Enter Land Area"
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
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
                    required
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select Soil Type</option>
                    <option value="Black Soil">Black Soil</option>
                    <option value="Red">Red</option>
                    <option value="Mountain">Mountain</option>
                  </select>
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
                    required
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select Farm Type</option>
                    <option value="GREENISH">GREENISH</option>
                    <option value="OTHER">OTHER</option>
                    </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-2">
                  <label
                    htmlFor="landPictures"
                    className="block text-black-700 text-left"
                  >
                    Land Pictures*
                  </label>
                  <input
                    type="file"
                    id="landPictures"
                    name="landPictures"
                    required
                    multiple
                    accept="image/*"
                    onChange={handleLandPicturesChange}
                    className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="m-2">
                  <label className="block text-black-700 text-left">
                    Well*
                  </label>
                  <div className="mt-1">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="well"
                        value="YES"
                        required
                        className="form-radio h-5 w-5 text-green-600"
                      />
                      <span className="ml-2">YES</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="well"
                        value="NO"
                        required
                        className="form-radio h-5 w-5 text-green-600"
                      />
                      <span className="ml-2">NO</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="m-2">
                <label className="block text-black-700 text-left">
                  Preferred Crops
                </label>
                <div className="flex items-center mt-1">
                  <input
                    type="text"
                    value={newCrop}
                    onChange={(e) => setNewCrop(e.target.value)}
                    placeholder="Enter a crop"
                    className="flex-grow h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 mr-2"
                  />
                  <button
                    type="button"
                    onClick={handleAddCrop}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Add Crop
                  </button>
                </div>
                <div className="mt-2">
                  {preferredCrops.map((crop, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {crop}
                      <button
                        type="button"
                        onClick={() => handleRemoveCrop(crop)}
                        className="ml-2 text-red-600 focus:outline-none"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="bg-green-500 text-white rounded-full px-4 py-3 mb-6 flex justify-between items-center">
              <div className="text-left font-bold">Achievements</div>
              <button
                type="button"
                onClick={handleAddAchievement}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {achievements.map((achievement, index) => (
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
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={achievement.date}
                        onChange={(e) =>
                          handleAchievementChange(index, "date", e.target.value)
                        }
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor={`achievement-certificate-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Certificate
                      </label>
                      <input
                        type="file"
                        id={`achievement-certificate-${index}`}
                        className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                        onChange={(e) =>
                          handleAchievementChange(
                            index,
                            "certificate",
                            e.target.files[0]
                          )
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAchievement(index)}
                    className="text-red-600 mt-2 hover:underline focus:outline-none"
                  >
                    Remove
                  </button>
                  {index < achievements.length - 1 && (
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
                onClick={handleAddAdditionalInfo}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg text-left shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {additionalInfo.map((info, index) => (
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
                        className="mt-1 block w-full h-10 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                        className="mt-1 block w-full h-24 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                      onClick={() => handleRemoveAdditionalInfo(index)}
                      className="text-red-600 mt-2 hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                  {index < additionalInfo.length - 1 && (
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
                onClick={handleAddContract}
                className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                +
              </button>
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              {contracts.map((contract, index) => (
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
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={contract.date}
                        onChange={(e) =>
                          handleContractChange(index, "date", e.target.value)
                        }
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor={`contract-certificate-${index}`}
                        className="block text-black-700 text-left"
                      >
                        Certificate
                      </label>
                      <input
                        type="file"
                        id={`contract-certificate-${index}`}
                        className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                        onChange={(e) =>
                          handleContractChange(
                            index,
                            "certificate",
                            e.target.files[0]
                          )
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveContract(index)}
                    className="text-red-600 mt-2 hover:underline focus:outline-none"
                  >
                    Remove
                  </button>
                  {index < contracts.length - 1 && (
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