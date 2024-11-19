import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Create_Contract() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [address, setAddress] = useState("");

  const [contractTitle, setContractTitle] = useState("");
  const [contractDescription, setContractDescription] = useState("");
  const [contractType, setContractType] = useState("");
  const [customContractType, setCustomContractType] = useState("");
  const [durationMonths, setDurationMonths] = useState("");
  const [conditions, setConditions] = useState("");
  const [startDate, setStartDate] = useState("");
  const [landRequired, setLandRequired] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const [crops, setCrops] = useState([{ name: "", requirements: [] }]);
  const [rules, setRules] = useState([{ title: "", description: "" }]);
  const [legalClauses, setLegalClauses] = useState([
    { title: "", description: "" },
  ]);
  const [newRequirement, setNewRequirement] = useState("");
  const [cropImage, setCropImage] = useState(null);
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
        console.log(response.data); // Log the profile data to the console\
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("error");
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("contract_title", contractTitle);
    formData.append("contract_description", contractDescription);
    formData.append(
      "contract_type",
      contractType === "Others" ? customContractType : contractType
    );
    formData.append("duration_months", durationMonths);
    formData.append("conditions", conditions);
    formData.append("start_date", startDate);
    formData.append("land_required", landRequired);
    formData.append("payment_type", paymentType);
    formData.append("crops", JSON.stringify(crops));
    formData.append("rules", JSON.stringify(rules));
    formData.append("legal_clauses", JSON.stringify(legalClauses));

    if (cropImage) {
      formData.append("crop_image", cropImage); // Append the crop image if it exists
    }
    const logData = {
      contract_title: contractTitle,
      contract_description: contractDescription,
      contract_type:
        contractType === "Others" ? customContractType : contractType,
      duration_months: durationMonths,
      conditions: conditions,
      start_date: startDate,
      land_required: landRequired,
      payment_type: paymentType,
      crops: crops,
      rules: rules,
      legal_clauses: legalClauses,
    };

    console.log(logData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contracts/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Contract created successfully:", response.data);
      alert("Contract created successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error creating contract:", error.response.data);
      alert("Failed to create contract.");
    }
  };

  const handleCropChange = (index, field, value) => {
    const updatedCrops = [...crops];
    updatedCrops[index][field] = value;
    setCrops(updatedCrops);
  };

  const handleAddRequirement = (index) => {
    const updatedCrops = [...crops];
    if (newRequirement.trim() !== "") {
      updatedCrops[index].requirements.push(newRequirement);
      setCrops(updatedCrops);
      setNewRequirement(""); // Clear the input after adding
    }
  };

  const handleRemoveRequirement = (cropIndex, reqIndex) => {
    const updatedCrops = [...crops];
    updatedCrops[cropIndex].requirements.splice(reqIndex, 1);
    setCrops(updatedCrops);
  };

  const handleRemoveCrop = (index) => {
    const updatedCrops = [...crops];
    updatedCrops.splice(index, 1);
    setCrops(updatedCrops);
  };

  const handleAddRule = () => {
    setRules([...rules, { title: "", description: "" }]);
  };

  const handleRemoveRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleRuleChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index][field] = value;
    setRules(updatedRules);
  };

  const handleAddLegalClause = () => {
    setLegalClauses([...legalClauses, { title: "", description: "" }]);
  };

  const handleRemoveLegalClause = (index) => {
    const updatedLegalClauses = [...legalClauses];
    updatedLegalClauses.splice(index, 1);
    setLegalClauses(updatedLegalClauses);
  };

  const handleLegalClauseChange = (index, field, value) => {
    const updatedLegalClauses = [...legalClauses];
    updatedLegalClauses[index][field] = value;
    setLegalClauses(updatedLegalClauses);
  };

  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
    if (e.target.value !== "Others") {
      setCustomContractType("");
    }
  };

  const handleCropImageChange = (e) => {
    setCropImage(e.target.files[0]); // Update the state with the selected crop image
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-sans leading-normal tracking-normal">
        <div className="container mx-auto px-4 py-8">
          <nav className="text-center mb-8">
            <h1 className="mx-4 text-green-900 font-bold text-5xl">
              Create Contract
            </h1>
          </nav>
          <form onSubmit={handleSubmit}>
            {/* User Information Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
                User Information
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="m-2">
                    <label
                      htmlFor="company_name"
                      className="block text-black-700 text-left"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      required
                      placeholder="Enter Company Name"
                      className="mt-1 bg-gray-100 text-left pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={profileData.name}
                      readOnly
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="m-2">
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
                      placeholder="Enter Contact Email"
                      className="mt-1 pl-3 bg-gray-100 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={profileData.email}
                      readOnly
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Information Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
                Contract Information
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="m-2">
                    <label
                      htmlFor="contract_title"
                      className="block text-black-700 text-left"
                    >
                      Title*
                    </label>
                    <input
                      type="text"
                      id="contract_title"
                      required
                      placeholder="Enter Contract Title"
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={contractTitle}
                      onChange={(e) => setContractTitle(e.target.value)}
                    />
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="contract_type"
                      className="block text-black-700 text-left"
                    >
                      Type*
                    </label>
                    <select
                      id="contract_type"
                      required
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={contractType}
                      onChange={handleContractTypeChange}
                    >
                      <option value="">Select Contract Type</option>
                      <option value="Vegetables">Vegetables</option>
                      <option value="Fruits">Fruits</option>
                      <option value="Grains">Grains</option>
                      <option value="Flower">Flower</option>
                      <option value="Herbs">Herbs</option>
                      <option value="Nuts">Nuts</option>
                      <option value="Pulses">Pulses</option>
                      <option value="Roots and Tubers">Roots and Tubers</option>
                      <option value="Spices">Spices</option>
                      <option value="Trees">Trees</option>
                      <option value="Ayurvedic">Ayurvedic</option>
                      <option value="Equipments">Equipments</option>
                      <option value="Animals">Animals</option>
                      <option value="Others">Others</option>
                    </select>
                    {contractType === "Others" && (
                      <input
                        type="text"
                        id="custom_contract_type"
                        required
                        placeholder="Enter Custom Contract Type"
                        className="mt-2 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={customContractType}
                        onChange={(e) => setCustomContractType(e.target.value)}
                      />
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="m-2">
                    <label
                      htmlFor="land_required"
                      className="block text-black-700 text-left"
                    >
                      Least Land Required (in Hectares)*
                    </label>
                    <input
                      type="number"
                      id="land_required"
                      required
                      placeholder="Enter Land Required"
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={landRequired}
                      onChange={(e) => setLandRequired(e.target.value)}
                    />
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="conditions"
                      className="block text-black-700 text-left"
                    >
                      Conditions
                    </label>
                    <input
                      type="text"
                      id="conditions"
                      placeholder="Enter Additional Conditions"
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={conditions}
                      onChange={(e) => setConditions(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="m-2">
                    <label
                      htmlFor="duration_months"
                      className="block text-black-700 text-left"
                    >
                      Duration in Months*
                    </label>
                    <input
                      type="number"
                      id="duration_months"
                      required
                      placeholder="Enter Duration in Months"
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={durationMonths}
                      onChange={(e) => setDurationMonths(e.target.value)}
                    />
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="start_date"
                      className="block text-black-700 text-left"
                    >
                      Expected Start Date
                    </label>
                    <input
                      type="date"
                      id="start_date"
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="m-2">
                    <label
                      htmlFor="contract_description"
                      className="block text-black-700 text-left"
                    >
                      Description
                    </label>
                    <textarea
                      id="contract_description"
                      placeholder="Enter Contract Description"
                      className="mt-1 pl-3 block w-full h-24 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={contractDescription}
                      onChange={(e) => setContractDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="payment_type"
                      className="block text-black-700 text-left"
                    >
                      Preferred Payment Type*
                    </label>
                    <select
                      id="payment_type"
                      required
                      className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Payment Type
                      </option>
                      <option value="Cash">Cash</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Cheque">Cheque Payment</option>
                      <option value="Advance">Advance Payment</option>
                      <option value="Installment">Installment Payment</option>
                      <option value="Deferred">Deferred Payment</option>
                      <option value="Mobile Payments">
                        Mobile Payments (UPI/Wallets)
                      </option>
                      <option value="Profit Sharing">
                        Profit Sharing/Crop Sharing
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Crop Information Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6">
                Crop Information
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                {crops.map((crop, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="m-2">
                        <label
                          htmlFor={`crop_name_${index}`}
                          className="block text-black-700 text-left"
                        >
                          Crop Name*
                        </label>
                        <input
                          type="text"
                          id={`crop_name_${index}`}
                          required
                          placeholder="Enter Crop Name"
                          className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                          value={crop.name}
                          onChange={(e) =>
                            handleCropChange(index, "name", e.target.value)
                          }
                        />
                      </div>
                      <div className="m-2">
                        <label className="block text-black-700 text-left">
                          Requirements
                        </label>
                        <div className="flex items-center mt-1">
                          <input
                            type="text"
                            value={newRequirement}
                            onChange={(e) => setNewRequirement(e.target.value)}
                            placeholder="Enter Crop Requirement"
                            className="flex-grow h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 mr-2"
                          />
                          <button
                            type="button"
                            onClick={() => handleAddRequirement(index)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                          >
                            Add Requirement
                          </button>
                        </div>
                        <div className="mt-2">
                          {crop.requirements.map((req, reqIndex) => (
                            <span
                              key={reqIndex}
                              className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2 mb-2"
                            >
                              {req}
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveRequirement(index, reqIndex)
                                }
                                className="ml-2 text-red-600 focus:outline-none"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {index < crops.length - 1 && (
                      <hr className="border-t border-black my-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Crop Image Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6 flex justify-between items-center">
                <div>Crop Image</div>
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                <div className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="m-2">
                      <label
                        htmlFor="crop_image"
                        className="block text-black-700 text-left"
                      >
                        Crop Image
                      </label>
                      <input
                        type="file"
                        id="crop_image"
                        onChange={handleCropImageChange}
                        className="w-full pl-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Rules and Regulations Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6 flex justify-between items-center">
                <div>Additional Rules and Regulations</div>
                <button
                  type="button"
                  onClick={handleAddRule}
                  className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
                >
                  +
                </button>
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                {rules.map((rule, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="m-2">
                        <label
                          htmlFor={`rule_title_${index}`}
                          className="block text-black-700 text-left"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id={`rule_title_${index}`}
                          placeholder="Enter Rule Title"
                          className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                          value={rule.title}
                          onChange={(e) =>
                            handleRuleChange(index, "title", e.target.value)
                          }
                        />
                      </div>
                      <div className="m-2">
                        <label
                          htmlFor={`rule_description_${index}`}
                          className="block text-black-700 text-left"
                        >
                          Description
                        </label>
                        <textarea
                          id={`rule_description_${index}`}
                          placeholder="Enter Rule Description"
                          className="mt-1 pl-3 block w-full h-24 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                          value={rule.description}
                          onChange={(e) =>
                            handleRuleChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveRule(index)}
                      className="text-red-600 mt-2 hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                    {index < rules.length - 1 && (
                      <hr className="border-t border-black my-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Clauses Section */}
            <div>
              <div className="text-left bg-green-500 text-white font-bold rounded-full px-4 py-3 mb-6 flex justify-between items-center">
                <div>Legal Clauses</div>
                <button
                  type="button"
                  onClick={handleAddLegalClause}
                  className="w-10 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-30 border border-black shadow-lg backdrop-blur-lg hover:bg-white hover:bg-opacity-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
                >
                  +
                </button>
              </div>
              <div
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
                style={{ backgroundColor: "#fef8f0" }}
              >
                {legalClauses.map((clause, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="m-2">
                        <label
                          htmlFor={`clause_title_${index}`}
                          className="block text-black-700 text-left"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id={`clause_title_${index}`}
                          placeholder="Enter Legal Clause Title"
                          className="mt-1 pl-3 block w-full h-10 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                          value={clause.title}
                          onChange={(e) =>
                            handleLegalClauseChange(
                              index,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="m-2">
                        <label
                          htmlFor={`clause_description_${index}`}
                          className="block text-black-700 text-left"
                        >
                          Description
                        </label>
                        <textarea
                          id={`clause_description_${index}`}
                          placeholder="Enter Legal Clause Description"
                          className="mt-1 pl-3 block w-full h-24 border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 m-2"
                          value={clause.description}
                          onChange={(e) =>
                            handleLegalClauseChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveLegalClause(index)}
                      className="text-red-600 mt-2 hover:underline focus:outline-none"
                    >
                      Remove
                    </button>
                    {index < legalClauses.length - 1 && (
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
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg"
              >
                Publish Contract
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create_Contract;
