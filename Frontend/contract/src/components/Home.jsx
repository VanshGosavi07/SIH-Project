import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ImageSlider from "./Slider";
import Contract_Cards from "./Contracts/Contract_Cards";
import Footer from "./Footer";
import axios from "axios";

function Home() {
  const [contractData, setContractData] = useState([]); // Initialize empty array for fetched data

  useEffect(() => {
    // Fetch contracts from the API
    const fetchContracts = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/contracts/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContractData(response.data);
        console.log(response.data); // Store fetched contracts in state
      } catch (error) {
        console.error("There was an error fetching the contracts!", error);
      }
    };

    fetchContracts();
  }, []);

  const [visibleCards, setVisibleCards] = useState(6); // Show initial cards
  const loadMoreCards = () => setVisibleCards((prev) => prev + 3); // Load more cards function

  return (
    <div
      style={{
        backgroundColor: "white",
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

      <div className="container mx-auto px-4 mx-135 ">
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
            {contractData.slice(0, visibleCards).map((card) => (
              <Contract_Cards key={card.id} card={card} />
            ))}
          </div>
        </div>

        {visibleCards < contractData.length && (
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

      <Footer />
    </div>
  );
}

export default Home;
