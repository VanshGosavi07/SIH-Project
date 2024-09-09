import React, { useState } from "react";

function Company_Profile() {
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

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      companyInfo: {
        generativeId: event.target.generative_id.value,
        website: event.target.website.value,
        taxIdentificationNumber: event.target.tax_no.value,
        licenseNumber: event.target.license_no.value,
        numberOfContracts: event.target.contracts.value,
        companyType: event.target.company_type.value,
        companyProduct: event.target.product.value,
        establishDate: event.target.establish_date.value,
        profilePic: profilePic,
      },
      achievements: achievements,
      additionalInfo: additionalInfo,
      Previouscontracts: contracts,
      primaryContact: {
        name: event.target.contact_name.value,
        designation: event.target.contact_designation.value,
        email: event.target.contact_email.value,
        phone: event.target.contact_phone.value,
      },
    };

    console.log("Form Data:", formData);
    alert("Form Submitted. Check console for data.");
  };

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

  return (
    <div
      className="bg-gray-100 font-sans leading-normal tracking-normal"
      style={{ backgroundColor: "#F8FEF0" }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Navigation (Profile, Contract, Payment) */}
        <nav className="text-center mb-8">
          <a href="#" className="mx-4 text-green-900 font-bold text-5xl">
            Complete Profile
          </a>
        </nav>

        <form onSubmit={handleSubmit}>
          {/* Company Information Section */}
          <div>
            <div className="bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
              Company Information
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  {/* Input fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="generative_id"
                        className="block text-black-700 text-left"
                      >
                        Generative ID*
                      </label>
                      <input
                        type="text"
                        id="generative_id"
                        required
                        placeholder="   Enter Generative ID"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="website"
                        className="block text-black-700 text-left"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        placeholder="   Enter Website URL"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="tax_no"
                        className="block text-black-700 text-left"
                      >
                        Tax Identification Number*
                      </label>
                      <input
                        type="text"
                        id="tax_no"
                        required
                        placeholder="   Enter Tax Identification Number"
                        className="mt-1 block w-full h-10 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="license_no"
                        className="block text-black-700 text-left"
                      >
                        License Number*
                      </label>
                      <input
                        type="text"
                        id="license_no"
                        required
                        placeholder="   Enter License Number"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="contracts"
                        className="block text-black-700 text-left"
                      >
                        Number of Contracts Made
                      </label>
                      <input
                        type="number"
                        id="contracts"
                        placeholder="   Enter Number of Contracts made"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="company_type"
                        className="block text-black-700 text-left"
                      >
                        Company Type*
                      </label>
                      <input
                        type="text"
                        id="company_type"
                        required
                        placeholder="   Enter Company Type"
                        className="mt-1 block w-full h-10 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="product"
                        className="block text-left text-black-700"
                      >
                        Company Product
                      </label>
                      <input
                        type="text"
                        id="product"
                        placeholder="   Enter Company Product"
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="establish_date"
                        className="block text-black-700 text-left"
                      >
                        Establish Date*
                      </label>
                      <input
                        type="date"
                        id="establish_date"
                        required
                        className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                        placeholder="   Enter Title"
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
                    <button
                      type="button"
                      onClick={() => handleRemoveAchievement(index)}
                      className="text-red-600 w-full hover:underline focus:outline-none mt-2"
                    >
                      Remove
                    </button>
                  </div>
                  {/* Horizontal line for separation */}
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
                        placeholder="   Enter Title"
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
                        placeholder="   Enter additional info"
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
                    <button
                      type="button"
                      onClick={() => handleRemoveAdditionalInfo(index)}
                      className="text-red-600 w-full mt-2 hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                  {/* Horizontal line for separation */}
                  {index < additionalInfo.length - 1 && (
                    <hr className="border-t border-black my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Contract Section */}
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
                        placeholder="   Enter Title"
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
                    <button
                      type="button"
                      onClick={() => handleRemoveContract(index)}
                      className="text-red-600 w-full mt-2 hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                  {/* Horizontal line for separation */}
                  {index < contracts.length - 1 && (
                    <hr className="border-t border-black my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Primary Contact Person Section */}
          <div>
            <div className="bg-green-500 text-white text-left font-bold rounded-full px-4 py-3 mb-6">
              Primary Contact Person
            </div>

            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
              style={{ backgroundColor: "#fef8f0" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact_name"
                    className="block text-black-700 text-left"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    required
                    placeholder="   Enter Name"
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact_designation"
                    className="block text-black-700 text-left"
                  >
                    Designation*
                  </label>
                  <input
                    type="text"
                    id="contact_designation"
                    required
                    placeholder="   Enter Designation"
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="contact_email"
                    className="block text-black-700 text-left"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    required
                    placeholder="   Enter Email"
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact_phone"
                    className="block text-black-700 text-left"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="contact_phone"
                    required
                    placeholder="   Enter Phone Number"
                    className="mt-1 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Company_Profile;
