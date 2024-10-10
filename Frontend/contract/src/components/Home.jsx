import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Welcome to AgriConnect
      </h1>

      {/* Subtitle */}
      <p className="text-lg mb-10 text-center">
        Connecting Farmers and Companies for a Brighter Future
      </p>

      {/* Links Section */}
      <div className="space-y-4">
        <a
          href="/login"
          className="block w-48 py-3 text-center bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Login
        </a>
        <a
          href="/register"
          className="block w-48 py-3 text-center bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Register
        </a>
        <a
          href="/create_contract"
          className="block w-48 py-3 text-center bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Create Contract
        </a>
        <a
          href="/farmer_profile"
          className="block w-48 py-3 text-center bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Farmer Profile
        </a>
        <a
          href="/company_profile"
          className="block w-48 py-3 text-center bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Company Profile
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-sm text-white">
        &copy; 2024 AgriConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
