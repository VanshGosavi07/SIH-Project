import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import ProgressBar from "./ProgressBar";

const stages = [
  "Initiated",
  "In Progress",
  "Production Stage",
  "Harvest and Collection Stage",
  "Payment",
  "Completed",
];

const getNextStages = (currentStatus) => {
  const currentIndex = stages.indexOf(currentStatus);
  return stages.slice(currentIndex + 1);
};

export default function Manged_contract_page() {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState("");
  const [subStatus, setSubStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [statustoUpdate, setStatusToUpdate] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/contracts/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContract(response.data);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    };

    fetchContract();
  }, [id]);

  useEffect(() => {
    const fetchContractStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/contract-status/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStatus(response.data.status);
        setSubStatus(response.data.sub_status);
        setStatusToUpdate(response.data);
      } catch (error) {
        console.error("Error fetching contract status:", error);
      }
    };
    fetchContractStatus();
  }, [id]);

  if (!contract) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-gray-500 text-lg font-medium">Loading...</span>
      </div>
    );
  }
  const handleUpdateContract = () => {
    const currentUserID = localStorage.getItem("Current_User_id");

    if (contract) {
      navigate(`/update_contract/${id}`);
    }
  };

  const handleUpdateStatus = async () => {
    let status, subStatus;
  
    if (selectedStatus !== "Initiated" && selectedStatus !== "Completed") {
      status = "In Progress";
      subStatus = selectedStatus;
    } else {
      status = selectedStatus;
      subStatus = selectedStatus;
    }
  
    const id = statustoUpdate.id;
    const data = {
      status: status,
      sub_status: subStatus,
      contract_post_person: statustoUpdate.contract_post_person_id,
      deal_person: statustoUpdate.deal_person_id,
      contract: statustoUpdate.contract_id,
    };
  
    console.log(data);
  
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `http://127.0.0.1:8000/api/contract-management/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Status updated successfully:", response.data);
      alert("Status updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };

  const renderSection = (title, children) => (
    <div className="bg-gray-100 rounded-lg p-6 mb-5 shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold text-green-600 border-b-2 border-green-500 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );

  const renderField = (label, value) => (
    <p className="mb-2">
      <strong className="font-medium text-gray-800">{label}:</strong>{" "}
      <span className="text-gray-600">{value}</span>
    </p>
  );

  const currentStatus = status;
  const currentSubStatus = subStatus;
  const currentUserID = Number(localStorage.getItem("Current_User_id"));
  const ownerUserID = contract.user.id;
  const nextStages = getNextStages(currentSubStatus);

  return (
    <>
      <Navbar />
      {currentStatus === "Completed" && (
        <div className="text-center text-3xl font-bold text-green-800 my-10">
          Contract is Completed
        </div>
      )}

      <div className="max-w-4xl mx-auto my-10 p-6 bg-white">
        {/* Managed Contract Section */}
        <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-green-600 mb-6 text-center">
            Managed Contract
          </h1>
          {/* Progress Bar */}
          <ProgressBar
            currentStatus={currentStatus}
            currentSubStatus={currentSubStatus}
          />
          {/* Buttons */}
          {currentStatus !== "Completed" && (
            <div className="flex justify-center space-x-4 mt-6 mb-10">
              {currentUserID === ownerUserID && (
                <button
                  onClick={handleUpdateContract}
                  className="px-4 py-2 bg-green-200 text-black font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
                >
                  Update Contract
                </button>
              )}

              {currentUserID !== ownerUserID &&
                currentStatus !== "Completed" && (
                  <div className="flex justify-center space-x-4 mt-6 mb-10">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-4 py-2 bg-green-200 text-black font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
                    >
                      <option value="" disabled>
                        Select Next Stage
                      </option>
                      {nextStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleUpdateStatus}
                      className="px-4 py-2 bg-green-200 text-black font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
                      disabled={!selectedStatus}
                    >
                      Update Status by Client
                    </button>
                  </div>
                )}
            </div>
          )}
        </div>

        {/* Company Information Section */}
        {renderSection(
          "Company Information",
          <>
            {contract.company_name &&
              renderField("Company Name", contract.company_name)}
            {contract.user.email &&
              renderField("User Email/Username", contract.user.email)}
            {contract.website_link &&
              renderField(
                "Link",
                <a
                  href={contract.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {contract.website_link}
                </a>
              )}
            {contract.address && renderField("Address", contract.address)}
          </>
        )}

        {/* Contract Information Section with Image */}
        {renderSection(
          "Contract Information",
          <div className="flex flex-col md:flex-row gap-5">
            {contract.crop_image && (
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={contract.crop_image}
                  alt="Contract Image"
                  className="w-full md:w-64 h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            )}
            <div>
              {contract.contract_title &&
                renderField("Title", contract.contract_title)}
              {contract.contract_type &&
                renderField("Type", contract.contract_type)}
              {contract.land_required &&
                renderField(
                  "Land Required (in Hectares)",
                  contract.land_required
                )}
              {contract.conditions &&
                renderField("Conditions", contract.conditions)}
              {contract.duration_months &&
                renderField("Duration (Months)", contract.duration_months)}
              {contract.start_date &&
                renderField("Expected Start Date", contract.start_date)}
              {contract.contract_description &&
                renderField("Description", contract.contract_description)}
              {contract.payment_type &&
                renderField("Preferred Payment Type", contract.payment_type)}
            </div>
          </div>
        )}

        {/* Crop Information Section */}
        {renderSection(
          "Crop Information",
          <>
            {contract.crops?.[0].name &&
              renderField("Crop Name", contract.crops[0].name)}
            {contract.crops?.[0].requirements?.length > 0 &&
              renderField(
                "Requirements",
                contract.crops[0].requirements.join(", ")
              )}
          </>
        )}

        {/* Additional Rules Section */}
        {renderSection(
          "Additional Rules and Regulations",
          contract.rules?.map((rule, index) => (
            <div key={index} className="mb-2">
              {renderField("Title", rule.title)}
              {renderField("Description", rule.description)}
            </div>
          ))
        )}

        {/* Legal Clauses Section */}
        {renderSection(
          "Legal Clauses",
          contract.legal_clauses?.map((clause, index) => (
            <div key={index} className="mb-2">
              {renderField("Title", clause.title)}
              {renderField("Description", clause.description)}
            </div>
          ))
        )}
      </div>
    </>
  );
}
