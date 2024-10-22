import React from "react";
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
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
    contentImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg"
  }
];


function Home() {
  return (
    <div style={{ backgroundColor: '#E9EDC9' }}>
      <Navbar />
      <ImageSlider />
      <div className="container mx-auto px-4">
        {/* Flexbox and grid to center the cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {cardData.map((card) => (
              <Contract_Cards key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
