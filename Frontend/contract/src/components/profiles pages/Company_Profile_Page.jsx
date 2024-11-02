import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Slider from "react-slick";
import card1 from "../../../../../Media/card1.jpg";
import card2 from "../../../../../Media/card2.jpg";
import card3 from "../../../../../Media/card3.jpg";
import potato from "../../../../../Media/b1.jpg";
import fruit from "../../../../../Media/b2.jpg";
import farm1 from "../../../../../Media/s1.jpg";
import farm2 from "../../../../../Media/s2.jpg";
import farm3 from "../../../../../Media/s3.jpg";
import profile from "../../../../../Media/company-logo.jpg";
import Footer from "../Footer";

export default function Company_Profile_Page() {
  const [profileData, setProfileData] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
        console.log(response.data); // Log the profile data to the console\
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("error");
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }
  const achievements = profileData.achievements
    ? JSON.parse(profileData.achievements)
    : [];
  const additionalInfo = profileData.additional_info
    ? JSON.parse(profileData.additional_info)
    : [];
  const previousContracts = profileData.previous_contracts
    ? JSON.parse(profileData.previous_contracts)
    : [];

  return (
    <>
      <Navbar />
      <div>
        {/* Profile Section */}
        <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-20 max-w-1xl bg-green-200 shadow-lg rounded-lg">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="w-full md:w-1/3 p-4">
              <img
                src={profile}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md mx-auto border-4 border-green-500"
                alt="Profile Picture"
              />
              <div className="text-center">
                <h1 className="text-xl md:text-3xl font-semibold mt-3 text-gray-700">
                  {profileData.name || "N/A"}
                </h1>
                <p>
                  <a
                    href={"mailto:" + profileData.email}
                    className="text-blue-600 hover:text-blue-400"
                  >
                    {profileData.email || "N/A"}
                  </a>
                </p>
              </div>
              <div className="flex justify-center md:justify-start space-x-3 mt-3 text-xl text-gray-600">
                {profileData.contact_phone && (
                  <i className="fa-solid fa-phone text-green-500"></i>
                )}
                <i className="fa-solid fa-envelope text-black"></i>
              </div>

              {/* Updated Section for Generative ID, Tax ID, and License */}
              <div className="mt-4 text-center md:text-left flex flex-col items-center space-y-3 w-full">
                {profileData.generative_id && (
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <strong className="text-gray-700">Generative ID:</strong>
                    <span className="text-gray-600">
                      {profileData.generative_id}
                    </span>
                  </div>
                )}
                {profileData.tax_identification_number && (
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <strong className="text-gray-700">Tax ID:</strong>
                    <span className="text-gray-600">
                      {profileData.tax_identification_number}
                    </span>
                  </div>
                )}
                {profileData.license_number && (
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <strong className="text-gray-700">License:</strong>
                    <span className="text-gray-600">
                      {profileData.license_number}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-2/3 md:pl-4 p-4 mt-16 md:mt-8">
              <table className="table-auto w-full text-left">
                <tbody>
                  {profileData.website && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Company Website:</td>
                      <td className="py-2">
                        <a
                          href={profileData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-400"
                        >
                          {profileData.website}
                        </a>
                      </td>
                    </tr>
                  )}
                  {profileData.company_type && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Company Type:</td>
                      <td className="py-2">{profileData.company_type}</td>
                    </tr>
                  )}
                  {profileData.company_product && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Products:</td>
                      <td className="py-2">{profileData.company_product}</td>
                    </tr>
                  )}
                  {profileData.establish_date && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Established:</td>
                      <td className="py-2">{profileData.establish_date}</td>
                    </tr>
                  )}
                  {profileData.contact_name && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Contact Person:</td>
                      <td className="py-2">{profileData.contact_name}</td>
                    </tr>
                  )}
                  {profileData.contact_designation && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Designation:</td>
                      <td className="py-2">
                        {profileData.contact_designation}
                      </td>
                    </tr>
                  )}
                  {profileData.contact_email && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Contact Email:</td>
                      <td className="py-2">
                        <a
                          href={"mailto:" + profileData.contact_email}
                          className="text-blue-600 hover:text-blue-400"
                        >
                          {profileData.contact_email}
                        </a>
                      </td>
                    </tr>
                  )}
                  {profileData.contact_phone && (
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold py-2">Contact Phone:</td>
                      <td className="py-2">{profileData.contact_phone}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Profile Section ends */}

        {/* Card Section */}
        <div className="container mx-auto text-center py-10 px-5 lg:px-20 max-w-6xl">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 w-full">
                <strong className="text-lg block mb-2 py-2 bg-green-600 text-white rounded-b-lg">
                  Experience
                </strong>
                <div className="bg-green-200 h-56 flex items-center justify-center">
                  <p className="text-4xl text-blue-700 font-bold">2 Years</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 w-full">
                <strong className="text-lg block mb-2 py-2 bg-green-600 text-white rounded-b-lg">
                  No of Employees
                </strong>
                <div className="bg-green-200 h-56 flex items-center justify-center">
                  <p className="text-4xl text-blue-700 font-bold">
                    200<sup>+</sup>
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 w-full">
                <strong className="text-lg block mb-2 py-2 bg-green-600 text-white rounded-b-lg">
                  Number of Contracts Maked
                </strong>
                <div className="bg-green-200 h-56 flex items-center justify-center">
                  {profileData.number_of_contracts && (
                    <p className="text-4xl text-blue-700 font-bold">
                      {profileData.number_of_contracts} Contracts
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section ends */}

        {/* Achievements Section */}
        <div className="mx-auto my-10 px-4 sm:px-6 lg:px-20 max-w-6xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-between w-full">
                <i className="fa-solid fa-trophy fa-2x text-green-500"></i>
                <strong className="text-xl bg-green-600 text-white px-6 py-3 rounded-full w-full text-center">
                  Achievements
                </strong>
              </div>
            </div>
            <ul className="space-y-4">
              {achievements.length > 0 ? (
                achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-center p-5 bg-green-300 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <i className="fa-solid fa-leaf text-green-600 p-3 bg-white rounded-full"></i>
                      <strong className="text-lg text-gray-800 w-full text-left">
                        {achievement.title}{" "}
                        <span className="text-gray-500 text-sm">
                          ({achievement.date})
                        </span>
                      </strong>
                    </div>
                  </li>
                ))
              ) : (
                <li className="flex items-center p-5 bg-gray-200 rounded-md shadow-sm">
                  <div className="flex items-center space-x-3 w-full">
                    <i className="fa-solid fa-exclamation-circle text-red-600 p-3 bg-white rounded-full"></i>
                    <strong className="text-lg text-gray-800 w-full text-left">
                      No achievements found.
                    </strong>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Achievements ends */}

        {/* Previous Contracts Section with Slider */}
        <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-20 max-w-6xl">
          <div className="p-6">
            <div className="flex items-center mb-5">
              <i className="fa-solid fa-id-card-clip fa-2x text-green-500"></i>
              <strong className="text-xl bg-green-600 text-white px-6 py-3 rounded-full w-full text-center">
                Previous Contracts
              </strong>
            </div>
            <Slider {...sliderSettings}>
              {Array.isArray(previousContracts) &&
              previousContracts.length > 0 ? (
                previousContracts.map((contract, index) => (
                  <div className="p-2" key={index}>
                    <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 border border-green-200">
                      <img
                        src={potato} // Replace with actual image path if available
                        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                        alt="Contract Image" // Update this if you have different images for contracts
                      />
                      <div className="p-4">
                        <h5 className="font-bold text-green-800 text-lg mb-2">
                          {contract.title} {/* Display contract title */}
                        </h5>
                        <table className="table-auto w-full mt-2">
                          <tbody>
                            <tr>
                              <td className="font-bold">Company:</td>
                              <td>{contract.company}</td>{" "}
                              {/* Display company name */}
                            </tr>
                            <tr>
                              <td className="font-bold">Contract Type:</td>
                              <td>{contract.type}</td>{" "}
                              {/* Display contract type */}
                            </tr>
                            <tr>
                              <td className="font-bold">Duration:</td>
                              <td>{contract.duration}</td>{" "}
                              {/* Display duration */}
                            </tr>
                            <tr>
                              <td className="font-bold">Start Date:</td>
                              <td>{contract.start_date}</td>{" "}
                              {/* Display start date */}
                            </tr>
                            <tr>
                              <td className="font-bold">End Date:</td>
                              <td>{contract.end_date}</td>{" "}
                              {/* Display end date */}
                            </tr>
                          </tbody>
                        </table>
                        <a
                          href="#"
                          className="bg-green-600 text-white py-2 px-4 rounded mt-4 block text-center transition-colors duration-300 hover:bg-green-700"
                        >
                          Learn More...
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center p-6">
                  <p className="text-gray-500">
                    No previous contracts available.
                  </p>
                </div>
              )}
            </Slider>
          </div>
        </div>
        {/* Previous Contracts Section with Slider ends */}

        {/* Images Section with Slider */}
        <div className="container mx-auto my-5">
          <h1 className="text-xl bg-green-600 text-white px-6 py-3 rounded-full w-full text-center">
            <strong>Images</strong>
          </h1>
          <Slider {...sliderSettings}>
            <div className="p-2">
              <img
                src={farm1}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                alt="Image 1"
              />
            </div>
            <div className="p-2">
              <img
                src={farm2}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                alt="Image 2"
              />
            </div>
            <div className="p-2">
              <img
                src={farm3}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                alt="Image 3"
              />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
        {/* Images end */}
      </div>
      <Footer />
    </>
  );
}
