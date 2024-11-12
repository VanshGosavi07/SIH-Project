import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function ContractPage() {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
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

  const handleMakeDeal = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const contractLink = `http://localhost:5173/contract_page/${id}`;
      const currentUserID = localStorage.getItem("Current_User_id");
      const message = `
       <div class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-4">

  <p class="text-lg font-semibold text-gray-800 mb-2">
    <strong>Title:</strong> <span class="font-normal">${contract.contract_title}</span>
  </p>

  <p class="text-gray-700 mb-2">
    <strong>Type:</strong> <span class="font-medium">${contract.contract_type}</span>
  </p>

  <p class="text-gray-700 mb-2">
    <strong>Land Required:</strong> <span class="font-medium">${contract.land_required}</span> Hectares
  </p>

  <p class="text-gray-700 mb-2">
    <strong>Conditions:</strong> <span class="font-medium">${contract.conditions}</span>
  </p>

  <p class="text-gray-700 mb-2">
    <strong>Duration:</strong> <span class="font-medium">${contract.duration_months}</span> Months
  </p>


  <p class="text-gray-700 mb-2">
    <strong>Description:</strong> <span class="font-medium">${contract.contract_description}</span>
  </p>

  <p class="text-gray-700 mb-4">
    <strong>Payment Type:</strong> <span class="font-medium">${contract.payment_type}</span>
  </p>

  <p class="text-blue-500 hover:underline">
    For more details, visit: <a href="${contractLink}" target="_blank">${contractLink}</a>
  </p>
    <p class="text-gray-700 mb-4">
    I am interested in your contract, so please proceed with further negotiation. and let me know if you are interested in my proposal. If you are interested in my proposal then i will click on the below button to Initialised the Contract.
  </p>
    <div class="text-center">
            <button onclick="handleDealClick('${id}', '${contract.user.id}', '${currentUserID}')" class="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none">
              Make a Deal
            </button>
    </div>
</div>

      `;
      await axios.post(
        `http://127.0.0.1:8000/api/messages/`,
        {
          receiver: contract.user.id,
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/chat/`);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!contract) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-gray-500 text-lg font-medium">Loading...</span>
      </div>
    );
  }

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

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white">
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

        {/* Make Contract Deal Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleMakeDeal}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none"
          >
            Make Contract Deal
          </button>
        </div>
      </div>
    </>
  );
}

window.handleDealClick = async (contractId, ownerId, currentUserId) => {
  console.log("Deal is done");
  console.log("Contract ID:", contractId);
  console.log("Contract Owner ID:", ownerId);
  console.log("Current User ID:", currentUserId);
  console.log("Status: Initiated");

  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      `http://127.0.0.1:8000/api/contract-management/`,
      {
        contract_post_person: ownerId,
        deal_person: currentUserId,
        contract: contractId,
        status: "Initiated",
        sub_status: "Initiated",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Contract management record created:", response.data);
    alert("Deal is done and contract management record created");
    const chatResponse = await axios.post(
      `http://127.0.0.1:8000/api/messages/`,
      {
        receiver: ownerId,
        message:
          "The contract has been initiated. Please accept this contract so we can customize it according to our requirements.",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Chat message sent:", chatResponse.data);
    
  } catch (error) {
    console.error("Error creating contract management record:", error);
    alert("Failed to create contract management record");
  }
};