import React from 'react';

export default function Contract_Cards({ card }) {
  // Function to handle "More Info" button click
  const handleMoreInfo = () => {
    console.log(`Card ID: ${card.id}, Name: ${card.name}`);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg" style={{ backgroundColor: '#88C273' }}>
      {/* User Info (Image, Name, Date) */}
      <div className="flex items-center mb-4 px-4">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={card.imageUrl}
          alt="User Avatar"
        />
        <div>
          <h5 className="font-bold text-lg text-gray-900">{card.name}</h5>
          <p className="text-gray-800 text-sm">{card.date}</p>
        </div>
      </div>
      
      {/* Main Content Image */}
      <img
        className="w-full px-2"
        src={card.contentImage}
        alt={card.title}
      />

      {/* Contract Title */}
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2 text-gray-900">{card.title}</h5>
        
        {/* Crop Name */}
        <p className="text-gray-800 text-base">Crop: {card.cropName}</p>
        
        {/* Phone and Email */}
        <p className="text-gray-800 text-base">Phone: {card.phoneNumber}</p>
        <p className="text-gray-800 text-base">Email: {card.email}</p>
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
