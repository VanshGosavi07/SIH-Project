import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function company_profile_form() {
  const location = useLocation();
  const { name, emailId, userId, userType, password } = location.state || {};

  const [achievements, setAchievements] = useState([{ title: "", date: "" }]);
  const [additionalInfo, setAdditionalInfo] = useState([
    { title: "", info: "" },
  ]);
  const [contracts, setContracts] = useState([{ title: "", date: "" }]);
  const [companyType, setCompanyType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCompanyName(name || "");
    setCompanyEmail(emailId || "");
  }, [name, emailId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", companyName);
    formData.append("email", companyEmail);
    formData.append("user_id", userId);
    formData.append("user_type", userType);
    formData.append("password", password);
    formData.append("generative_id", event.target.generative_id.value);
    formData.append("website", event.target.website.value);
    formData.append("tax_identification_number", event.target.tax_no.value);
    formData.append("license_number", event.target.license_no.value);
    formData.append("number_of_contracts", event.target.contracts.value);
    formData.append("company_type", companyType);
    formData.append("company_product", event.target.product.value);
    formData.append("establish_date", event.target.establish_date.value);
    formData.append("profile_pic", profilePic);
    formData.append("achievements", JSON.stringify(achievements));
    formData.append("additional_info", JSON.stringify(additionalInfo));
    formData.append("previous_contracts", JSON.stringify(contracts));
    formData.append("contact_name", event.target.contact_name.value);
    formData.append(
      "contact_designation",
      event.target.contact_designation.value
    );
    formData.append("contact_email", event.target.contact_email.value);
    formData.append("contact_phone", event.target.contact_phone.value);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/company-profiles/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Form Data:", await response.json());
        alert("Form Submitted. Check console for data.");
        navigate("/home");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Error submitting form: " + response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form: " + error.message);
    }
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, { title: "", date: "" }]);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file); // Update profile picture state
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
    setContracts([...contracts, { title: "", date: "" }]);
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
      style={{ backgroundColor: "white" }}
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
            <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
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
                        htmlFor="name"
                        className="block text-black-700 text-left"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter Name"
                        className="mt-1 block w-full bg-gray-100 h-10 pl-3 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        readOnly
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block text-black-700 text-left"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email Id"
                        className="mt-1 block w-full bg-gray-100 h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2 pl-3"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                        readOnly
                      />
                    </div>
                  </div>
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
                        placeholder="Enter Generative ID"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                        placeholder="Enter Website URL"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                        placeholder="Enter Tax Identification Number"
                        className="mt-1 pl-3 block w-full h-10 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                        placeholder="Enter License Number"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                      <select
                        id="company_type"
                        required
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                        value={companyType}
                        onChange={(e) => setCompanyType(e.target.value)}
                      >
                        <option value="">Select Company Type</option>
                        <option value="Private Limited Company">
                          Private Limited Company
                        </option>
                        <option value="Public Limited Company">
                          Public Limited Company
                        </option>
                        <option value="Partnership Firm">
                          Partnership Firm
                        </option>
                        <option value="Sole Proprietorship">
                          Sole Proprietorship
                        </option>
                        <option value="Cooperative Society">
                          Cooperative Society
                        </option>
                        <option value="Government Organization">
                          Government Organization
                        </option>
                        <option value="Non-Governmental Organization (NGO)">
                          Non-Governmental Organization (NGO)
                        </option>
                        <option value="Trust or Foundation">
                          Trust or Foundation
                        </option>
                      </select>
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
                        placeholder="Enter Company Product"
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
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
                        className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      />
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
                  <p className="mt-2 text-sm text-black-600">
                    Upload Profile Picture
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
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
                          className="mt-1 pl-3 pr-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                          value={achievement.date}
                          onChange={(e) =>
                            handleAchievementChange(
                              index,
                              "date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveAchievement(index)}
                        className="text-red-600 hover:underline focus:outline-none mt-2"
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
                        className="mt-1 pl-3 block w-full h-24 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleRemoveContract(index)}
                      className="text-red-600 mt-2 hover:underline focus:outline-none"
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
                    placeholder="Enter Name"
                    className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                    placeholder="Enter Designation"
                    className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                    placeholder="Enter Email"
                    className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                    placeholder="Enter Phone Number"
                    className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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

export default company_profile_form;
