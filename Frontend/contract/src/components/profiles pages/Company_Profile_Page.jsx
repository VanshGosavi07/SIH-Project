import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Slider from "react-slick";
import Contract_Cards from "../Contracts/Contract_Cards";
import farm1 from "../../../../../Media/s1.jpg";
import farm2 from "../../../../../Media/s2.jpg";
import farm3 from "../../../../../Media/s3.jpg";
import profile from "../../../../../Media/company-logo.jpg";
import Footer from "../Footer";

export default function Company_Profile_Page() {
  const [profileData, setProfileData] = useState(null);
  const [contractType, setContractType] = useState("Completed Contract");
  const [visibleContracts, setVisibleContracts] = useState(6);
  const [userContracts, setUserContracts] = useState([]);
  const [contractsToShow, setContractsToShow] = useState(6);
  const currentUserID = localStorage.getItem("Current_User_id");

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
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("error");
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const fetchUserContracts = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/contracts/user/${currentUserID}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const contracts = response.data.map((contract) => ({
          ...contract,
          crop_image: contract.crop_image
            ? `http://127.0.0.1:8000${contract.crop_image}`
            : null,
        }));
        setUserContracts(contracts);
        console.log(contracts); // Log the user contracts data to the console
      } catch (error) {
        console.error("Error fetching user contracts:", error);
      }
    };

    fetchUserContracts();
  }, [currentUserID]);

  const handleContractTypeClick = (type) => {
    setContractType(type);
    console.log(`Selected contract type: ${type}`);
  };

  const loadMoreContracts = () => {
    setContractsToShow((prev) => prev + 6);
  };

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

        {/* Contracts Section */}
        <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-20 max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center w-full">
              <i className="fa-solid fa-trophy fa-2x text-green-500 mr-4"></i>
              <strong className="text-xl bg-green-600 text-white px-6 py-3 rounded-full w-full text-center">
                {contractType} Details
              </strong>
            </div>
          </div>

          <div className="flex justify-around space-x-2 mb-6 mt-6">
            <button
              onClick={() => handleContractTypeClick("Completed Contract")}
              className={`py-2 px-3 rounded w-1/4 ${
                contractType === "Completed Contract"
                  ? "bg-green-600 text-white"
                  : "bg-green-200 text-green-600"
              } hover:bg-green-700 hover:text-white transition-all duration-200`}
            >
              Completed Contract
            </button>
            <button
              onClick={() => handleContractTypeClick("Post Contract")}
              className={`py-2 px-3 rounded w-1/4 ${
                contractType === "Post Contract"
                  ? "bg-green-600 text-white"
                  : "bg-green-200 text-green-600"
              } hover:bg-green-700 hover:text-white transition-all duration-200`}
            >
              Post Contract
            </button>
            <button
              onClick={() => handleContractTypeClick("Current Contract")}
              className={`py-2 px-3 rounded w-1/4 ${
                contractType === "Current Contract"
                  ? "bg-green-600 text-white"
                  : "bg-green-200 text-green-600"
              } hover:bg-green-700 hover:text-white transition-all duration-200`}
            >
              Current Contract
            </button>
          </div>
          {contractType === "Post Contract" && Array.isArray(userContracts) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userContracts.slice(0, contractsToShow).map((contract) => (
                <Contract_Cards key={contract.id} card={contract} />
              ))}
            </div>
          )}
          {contractType === "Post Contract" &&
            Array.isArray(userContracts) &&
            userContracts.length > contractsToShow && (
              <div className="text-center mt-6">
                <button
                  onClick={loadMoreContracts}
                  className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none"
                >
                  Load More
                </button>
              </div>
            )}

          {(contractType === "Completed Contract" ||
            contractType === "Current Contract") && (
            <div className="flex justify-center">
              <div className="w-1/2 px-4 py-6 text-center border">
                <p className="text-gray-700">
                  Displaying information for:{" "}
                  <span className="font-semibold">{contractType}</span>
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Contracts Section ends */}

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
