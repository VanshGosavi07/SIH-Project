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
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-pink-200 border-4 border-gray-800"
      style={{ width: '450px', height: '550px' }}
    >
      {/* User Info (Image, Name, Date) */}
      <div className="flex items-center mb-4 px-4 mr-6">
        <img
          className="w-10 h-10 rounded-full mr-6"
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

      {/* Fixed Size Image Container with Padding */}
      <div className="w-full h-48 overflow-hidden px-4">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={card.crop_image}
          alt={card.crops[0].name}
        />
      </div>

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
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-4 px-8 text-xl border-2 border-black rounded shadow-lg hover:from-blue-500 hover:to-blue-400 transition duration-300"
          onClick={handleMoreInfo}
        >
          More Info
        </button>
      </div>
    </div>
  );
}