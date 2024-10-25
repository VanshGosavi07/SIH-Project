import React from "react";
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
import profile from "../../../../../Media/1.jpg";
import Footer from "../Footer";

export default function Company_Profile_Page() {
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

  return (
    <>
      <Navbar />
      <div>
        {/* Profile Section */}
        <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-20 max-w-1xl bg-green-200 shadow-lg rounded-lg">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="w-full md:w-1/3 text-center md:text-left p-4">
              <img
                src={profile}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md mx-auto md:mx-0 border-4 border-green-500"
                alt="Profile Picture"
              />
              <h3 className="text-xl md:text-2xl font-semibold mt-3 text-gray-700">
                Kalpesh D Desale
              </h3>
              <p>
                <a className="text-blue-600 hover:text-blue-400">
                  kalpeshdesle7234
                </a>
              </p>
              <div className="flex justify-center md:justify-start space-x-3 mt-3 text-xl text-gray-600">
                <i className="fa-solid fa-phone text-green-500"></i>
                <i className="fa-solid fa-comment text-blue-500"></i>
                <i className="fa-solid fa-envelope text-black"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pl-4 p-4 mt-6 md:mt-0">
              <table className="table-auto w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-2">Name:</td>
                    <td className="py-2">Kalpesh D Desale</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-2">Email:</td>
                    <td className="py-2">
                      <a
                        href="mailto:kalpeshdesale123@gmail.com"
                        className="text-blue-600 hover:text-blue-400"
                      >
                        kalpeshdesale@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-2">Phone:</td>
                    <td className="py-2">
                      <a
                        href="tel:7838137944"
                        className="text-blue-600 hover:text-blue-400"
                      >
                        7838137944
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-2">Address:</td>
                    <td className="py-2">Nimba Anna Nagar Avadhan Dhule</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-semibold py-2">Status:</td>
                    <td className="py-2 text-green-600 font-bold">Active</td>
                  </tr>
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
                  Land Size
                </strong>
                <div className="bg-green-200 h-56 flex items-center justify-center">
                  <p className="text-4xl text-blue-700 font-bold">2 Hectors</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 w-full">
                <strong className="text-lg block mb-2 py-2 bg-green-600 text-white rounded-b-lg">
                  Number of Contracts
                </strong>
                <div className="bg-green-200 h-56 flex items-center justify-center">
                  <p className="text-4xl text-blue-700 font-bold">
                    5 Contracts
                  </p>
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
              <li className="flex items-center p-5 bg-green-300 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 w-full">
                  <i className="fa-solid fa-leaf text-green-600 p-3 bg-white rounded-full"></i>
                  <strong className="text-lg text-gray-800 w-full text-left">
                    Innovative Farming Technique
                  </strong>
                </div>
              </li>
              <li className="flex items-center p-5 bg-green-300 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 w-full">
                  <i className="fa-solid fa-leaf text-green-600 p-3 bg-white rounded-full"></i>
                  <strong className="text-lg text-gray-800 w-full text-left">
                    Adoption of Technology
                  </strong>
                </div>
              </li>
              <li className="flex items-center p-5 bg-green-300 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 w-full">
                  <i className="fa-solid fa-leaf text-green-600 p-3 bg-white rounded-full"></i>
                  <strong className="text-lg text-gray-800 w-full text-left">
                    Pioneering Farming Technique
                  </strong>
                </div>
              </li>
              <li className="flex items-center p-5 bg-green-300 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 w-full">
                  <i className="fa-solid fa-leaf text-green-600 p-3 bg-white rounded-full"></i>
                  <strong className="text-lg text-gray-800 w-full text-left">
                    High Yield Crop Development
                  </strong>
                </div>
              </li>
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
              {/* Contract 1 */}
              <div className="p-2">
                <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 border border-green-200">
                  <img
                    src={potato}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                    alt="Contract Image"
                  />
                  <div className="p-4">
                    <h5 className="font-bold text-green-800 text-lg mb-2">
                      Vegetables Contract
                    </h5>
                    <table className="table-auto w-full mt-2">
                      <tbody>
                        <tr>
                          <td className="font-bold">Company:</td>
                          <td>FoodAgro Company</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Contract Type:</td>
                          <td>Vegetables</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Duration:</td>
                          <td>6 months</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Start Date:</td>
                          <td>24 June 2023</td>
                        </tr>
                        <tr>
                          <td className="font-bold">End Date:</td>
                          <td>25 December 2023</td>
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
              {/* Contract 2 */}
              <div className="p-2">
                <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 border border-green-200">
                  <img
                    src={fruit}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                    alt="Contract Image"
                  />
                  <div className="p-4">
                    <h5 className="font-bold text-green-800 text-lg mb-2">
                      Fruits Contract
                    </h5>
                    <table className="table-auto w-full mt-2">
                      <tbody>
                        <tr>
                          <td className="font-bold">Company:</td>
                          <td>FoodAgro Company</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Contract Type:</td>
                          <td>Fruits</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Duration:</td>
                          <td>12 months</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Start Date:</td>
                          <td>28 December 2023</td>
                        </tr>
                        <tr>
                          <td className="font-bold">End Date:</td>
                          <td>28 December 2024</td>
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
              {/* Add more contracts as needed */}
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
