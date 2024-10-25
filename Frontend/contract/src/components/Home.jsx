import React, { useState } from "react";
import Navbar from "./Navbar";
import ImageSlider from "./Slider";
import Contract_Cards from "./Contracts/Contract_Cards";

// Expanded sample data for 12 cards with new fields
const cardData = [
  {
    id: 1,
    name: "Vansh Gosavi",
    date: "October 22, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Shrimp and Chorizo Paella",
    cropName: "Tomato",
    phoneNumber: "123-456-7890",
    email: "vansh@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    date: "October 20, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Classic Margherita Pizza",
    cropName: "Basil",
    phoneNumber: "987-654-3210",
    email: "john@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    date: "October 19, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Spaghetti Carbonara",
    cropName: "Pasta Wheat",
    phoneNumber: "456-789-0123",
    email: "jane@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 4,
    name: "Michael Johnson",
    date: "October 18, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Beef Tacos",
    cropName: "Corn",
    phoneNumber: "321-654-9870",
    email: "michael@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    date: "October 17, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Chicken Curry",
    cropName: "Chicken",
    phoneNumber: "213-546-7890",
    email: "emily@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 6,
    name: "Daniel Brown",
    date: "October 16, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Vegetable Stir Fry",
    cropName: "Broccoli",
    phoneNumber: "654-321-0987",
    email: "daniel@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 7,
    name: "Sophia Wilson",
    date: "October 15, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Seafood Paella",
    cropName: "Shrimp",
    phoneNumber: "789-012-3456",
    email: "sophia@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 8,
    name: "James Taylor",
    date: "October 14, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Lamb Chops",
    cropName: "Lamb",
    phoneNumber: "567-890-1234",
    email: "james@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 9,
    name: "Olivia Martinez",
    date: "October 13, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Pasta Primavera",
    cropName: "Vegetables",
    phoneNumber: "234-567-8901",
    email: "olivia@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 10,
    name: "William Anderson",
    date: "October 12, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Chocolate Cake",
    cropName: "Cocoa",
    phoneNumber: "345-678-9012",
    email: "william@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 11,
    name: "Ava Thomas",
    date: "October 11, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Fruit Salad",
    cropName: "Fruits",
    phoneNumber: "456-789-0123",
    email: "ava@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
  {
    id: 12,
    name: "Liam Jackson",
    date: "October 10, 2024",
    imageUrl: "https://via.placeholder.com/150",
    title: "Greek Salad",
    cropName: "Olives",
    phoneNumber: "567-890-1234",
    email: "liam@example.com",
    contentImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg",
  },
];

function Home() {
  const [visibleCards, setVisibleCards] = useState(6); // Initially show 6 cards (2 rows)

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Load 3 more rows (6 cards)
  };

  return (
    <div
      style={{
        backgroundColor: "#E9EDC9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <ImageSlider />

      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        <rect
          width="100%"
          height="100%"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      <div
        className="container mx-auto px-4 mx-135 "
        style={{ backgroundColor: "gray" }}
      >
        <div className="flex justify-center my-8">
          <h1
            className="text-4xl font-semibold text-center pt-12"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Live Contracts
          </h1>
        </div>
        {/* Flexbox and grid to center the cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {cardData.slice(0, visibleCards).map((card) => (
              <Contract_Cards key={card.id} card={card} />
            ))}
          </div>
        </div>
        {visibleCards < cardData.length && (
          <div className="flex justify-center mt-4 pt-8 pb-8">
            <button
              onClick={loadMoreCards}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <div
        className="pt-10"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px 20px 20px 0",
          marginTop:"80px"
        }} // Added right padding
      >
        <div
          className="container mx-auto text-center"
          style={{ paddingRight: "20px" }}
        >
          {" "}
          {/* Added padding right here */}
          <p>© 2024 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
