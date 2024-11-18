// src/components/Default.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../Context/LanguageContext";
import Slider from "./Slider";
import AgriConnectLogo from "../../../../Media/Logo.jpg";
import image from "../../../../Media/s1.jpg";
import Footer from "./Footer";
import handshake from "../../../../Media/hand_shake.jpeg";
import Financial_Support from "../../../../Media/Financial_Support.jpeg";
import market from "../../../../Media/market.jpeg";
import Legal_Support from "../../../../Media/Legal_Support.jpeg";
import eco_farm from "../../../../Media/eco_farm.jpg";
import farmer1 from "../../../../Media/farmer1.jpeg";
import farmer2 from "../../../../Media/farmer2.jpeg";
import farmer3 from "../../../../Media/farmer3.jpeg";
import farmer4 from "../../../../Media/farmer4.jpeg";
import farmer5 from "../../../../Media/s1.jpg";
import farmer6 from "../../../../Media/s2.jpg";

function Default() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, changeLanguage } = useLanguage(); // Access the language context

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setIsLanguageOpen(false);
  };

  const images = [
    { src: farmer1, alt: "Farmer field 1" },
    { src: farmer2, alt: "Farmer field 2" },
    { src: farmer3, alt: "Farmers working with sacks" },
    { src: farmer4, alt: "Harvested produce in sacks" },
    { src: farmer5, alt: "Harvested produce in sacks" },
    { src: farmer6, alt: "Harvested produce in sacks" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-200 shadow-md p-4 md:flex md:items-center md:justify-between fixed top-0 left-0 w-full z-50 ">
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between">
          <div className="logo">
            <img
              src={AgriConnectLogo}
              alt="AgriConnect Logo"
              className="h-12 w-16 rounded-full object-cover"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-green-600">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="photo-gallery"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a href="/login" className="block py-2 px-4 hover:text-blue-600">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="block py-2 px-4 hover:text-blue-600">
                Register
              </a>
            </li>
          </ul>
        </nav>

        {/* Language Selector Dropdown */}
        <div className="relative hidden md:block ml-4">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="bg-white border border-gray-300 text-green-600 px-4 py-2 rounded shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {language} ▼
          </button>
          {isLanguageOpen && (
            <ul className="absolute right-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden z-10">
              <li
                onClick={() => handleLanguageSelect("English")}
                className="cursor-pointer px-4 py-2 hover:bg-blue-100"
              >
                English
              </li>
              <li
                onClick={() => handleLanguageSelect("Hindi")}
                className="cursor-pointer px-4 py-2 hover:bg-blue-100"
              >
                Hindi
              </li>
              <li
                onClick={() => handleLanguageSelect("Marathi")}
                className="cursor-pointer px-4 py-2 hover:bg-blue-100"
              >
                Marathi
              </li>
            </ul>
          )}
        </div>
      </header>

      {/* Slider */}
      <div id='home' className="pt-20 mb-10">
        <Slider className="border-9 border-black bg-white p-4 rounded-lg shadow-md" />
      </div>

      {/* About us */}
      <section
        id="about"
        className="py-16 shadow-md mb-20  bg-gray-50 mx-4 md:mx-14"
      >
        <div className="about-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="about-image md:w-1/2 w-full p-2">
            {" "}
            {/* Added padding here */}
            <img
              src={image}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="about-content md:w-1/2 w-full md:ml-8 mt-8 md:mt-0 text-gray-800">
            <h2 className="text-3xl text-green-600 font-bold mb-4">About Us</h2>
            <h3 className="text-xl font-semibold mb-4">
              Passion Meets Innovation in Food and Agriculture
            </h3>
            <p className="mb-4">
              We are AgriConnect, a platform for contract-based farming that
              directly connects farmers with contractors, eliminating
              intermediaries. Our platform not only facilitates connections but
              also manages contracts from start to finish, offering legal
              support for any contract breaches to ensure transparency and
              trust.
            </p>
            <p className="mb-4">
              We foster transparency to ensure mutual benefits: farmers gain
              stable market access, and companies enjoy a reliable supply chain.
              Together, we drive economic growth, sustainability, and future
              food security.
            </p>
            <div className="stats flex space-x-8 mt-6">
              <div className="stat-item text-center">
                <span className="block text-lg font-semibold">Farmers</span>
                <strong className="text-2xl">8000+</strong>
              </div>
              <div className="stat-item text-center">
                <span className="block text-lg font-semibold">States</span>
                <strong className="text-2xl">16</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16  bg-gray-50 mb-20 mx-4 md:mx-14">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl text-green-600 font-bold  mb-8">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We provide a range of services to support farmers and contractors,
            ensuring transparent, efficient, and sustainable farming practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Cards */}
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={handshake}
                alt="Contract Management"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Contract Management
              </h3>
              <p className="text-gray-600">
                We offer a streamlined process for creating and managing
                contracts between farmers and contractors, featuring
                customizable templates, secure digital signatures, and automated
                tracking to ensure all contract terms are met efficiently.
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={Financial_Support}
                alt="Financial Support and Insurance"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Financial Support and Insurance
              </h3>
              <p className="text-gray-600">
                We provide comprehensive financial solutions, including loan
                assistance, crop insurance options, and financial planning
                services to support farmers in managing their operations
                effectively and reducing risk.
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={market}
                alt="Market Access"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Market Access
              </h3>
              <p className="text-gray-600">
                We connect farmers directly with potential buyers and provide
                real-time market trends, pricing, and demand forecasts to help
                them make informed decisions and maximize profits.
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={Legal_Support}
                alt="Legal Support"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Legal Support
              </h3>
              <p className="text-gray-600">
                We provide expert legal assistance to ensure that farmers and
                contractors navigate the complexities of agricultural laws,
                dispute resolution, and regulatory compliance with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section py-16 mx-14 mb-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="quality-content md:w-1/2 w-full p-4">
            <h3 className="text-4xl font-semibold text-green-600 mb-2">
              Quality Product
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We appreciate Your Trust Greatly
            </h2>
            <p className="text-gray-700 mb-6">
              We prioritize quality in every partnership. Our commitment to
              connecting companies with dedicated farmers ensures that only the
              best produce reaches you. We deeply value your trust in our
              platform and strive to maintain it by upholding the highest
              standards of quality and transparency in all our operations.
            </p>

            {/* Progress Bars */}
            <div className="progress-bar-container space-y-4">
              <div className="progress-bar">
                <div className="progress-label flex justify-between text-gray-800 mb-1">
                  <span>Eco Farms</span>
                  <span>80%</span>
                </div>
                <div className="progress bg-gray-200 rounded-full h-4">
                  <div
                    className="progress-fill bg-green-600 h-4 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-label flex justify-between text-gray-800 mb-1">
                  <span>Special Equipment</span>
                  <span>90%</span>
                </div>
                <div className="progress bg-gray-200 rounded-full h-4">
                  <div
                    className="progress-fill bg-green-600 h-4 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Image Section */}
          <div className="quality-images md:w-1/2 w-full p-4 relative">
            <img
              src={eco_farm}
              alt="Eco Farm"
              className="image-top w-full h-auto rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="photo-gallery" className="py-16 bg-gray-50 mx-4 mb-20 md:mx-14">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          Photo Gallery
        </h1>
        <div className="photo-gallery overflow-x-auto flex space-x-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item flex-shrink-0 w-72 sm:w-80 lg:w-96 xl:w-96 snap-center" // Square size with different width for responsiveness
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg" // Make image square
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-gray-50 mx-4 mb-20 md:mx-14">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
            <img
              src={AgriConnectLogo}
              alt="Contact Us"
              className="w-full h-auto border-1 border-black  shadow-md object-cover"
              style={{ height: 464 }}
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 bg-white shadow-lg border-b border-black border-t  border-black border-r border-black p-8 flex justify-center items-center">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Have Questions? Get in Touch
              </h3>

              <form action="#" method="post" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First Name*"
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Last Name*"
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message*"
                    required
                    rows="4"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all"
                  >
                    Get In Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer" className="bottom-0">
        <Footer />
      </section>
    </>
  );
}

export default Default;
