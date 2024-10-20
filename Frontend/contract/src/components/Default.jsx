import React from "react";

function Default() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-purple-600 text-white p-8">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-center shadow-lg">
        Welcome to AgriConnect
      </h1>

      {/* Subtitle */}
      <p className="text-xl mb-8 text-center max-w-md">
        Connecting Farmers and Companies for a Brighter Future
      </p>

      {/* Links Section */}
      <div className="space-y-4">
        {[
          { href: "/login", label: "Login" },
          { href: "/register", label: "Register" },
          { href: "/home", label: "Home Page" },
          { href: "/create_contract", label: "Create Contract" },
          { href: "/Farmer_profile", label: "Farmer Profile Page" },
          { href: "/Company_profile", label: "Company Profile Page" },
          { href: "/farmer_profile_form", label: "Complete Farmer Profile Form" },
          { href: "/company_profile_form", label: "Complete Company Profile Form" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block w-64 py-3 text-center bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-sm text-white">
        &copy; 2024 AgriConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default Default;
