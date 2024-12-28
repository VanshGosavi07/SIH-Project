import React from "react";
import { useNavigate } from "react-router-dom";

export default function Managed_Contract_cards({ card }) {
  const navigate = useNavigate();

  // Function to handle "More Info" button click
  const handleMoreInfo = () => {
    navigate(`/managed_contract_page/${card.id}`);
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg"
      style={{ backgroundColor: "#88C273" }}
    >
      {/* User Info (Image, Name, Date) */}
      <div className="flex items-center mb-4 px-4">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={card.crop_image}
          alt="Crop Image"
        />
        <div>
          <h5 className="font-bold text-lg text-gray-900">
            {card.company_name}
          </h5>
          <p className="text-gray-800 text-sm">{card.start_date}</p>
        </div>
      </div>

      {/* Main Content Image */}
      <img
        className="w-full px-2"
        src={card.crop_image}
        alt={card.crops[0].name}
      />

      {/* Contract Title */}
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2 text-gray-900">
          {card.crops[0].name}
        </h5>
        <p className="text-gray-800 text-base">
          Contract Type: {card.contract_type}{" "}
        </p>
        <p className="text-gray-800 text-base">Payment: {card.payment_type} </p>
        {/* Contact Information */}
        <p className="text-gray-800 text-base">Email: {card.contact_email}</p>
        <p className="text-gray-800 text-base">Phone no: current user no</p>
      </div>

      {/* More Info Button */}
      <div className="flex justify-center px-6 py-4">
        <button
          className="bg-gradient-to-r from-green-800 to-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
          onClick={handleMoreInfo}
        >
          More Info
        </button>
      </div>
    </div>
  );
}
