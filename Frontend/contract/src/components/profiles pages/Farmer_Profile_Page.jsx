import React from 'react';
import Navbar from '../Navbar'; // Ensure this path is correct
import logo from '../../../../../Media/1.jpg'
import card1 from '../../../../../Media/card1.jpg'
import card2 from '../../../../../Media/card2.jpg'
import card3 from '../../../../../Media/card3.jpg'
import potato from '../../../../../Media/b1.jpg'
import fruit from '../../../../../Media/b2.jpg'
import farm1 from '../../../../../Media/s1.jpg'
import farm2 from '../../../../../Media/s2.jpg'
import farm3 from '../../../../../Media/s3.jpg'

import profile from '../../../../../Media/1.jpg'


const Farmerprofile = () => {
    return (
        <div className="bg-green-100">
            {/* Profile Section */}
            <div className="container mx-auto text-center my-5">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                        <img src={logo} className="w-48 h-48 rounded-full mx-auto" alt="Profile Picture" />  
                        <h3 className="text-xl font-bold mt-2">Kalpesh D Desale</h3>
                        <p><a href="mailto:foodagro@gmail.com" className="text-blue-500">kalpeshdasale@gmail.com</a></p>
                        <div className="flex justify-center mt-2">
                            <i className="fa-solid fa-phone text-green-600 me-2 fa-2x"></i>
                            <i className="fa-solid fa-comment text-blue-600 me-2 fa-2x"></i>
                            <i className="fa-solid fa-envelope text-black fa-2x"></i>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-5 rounded-lg p-4">
                        <table className="table-auto w-full mt-4 border-collapse bg-white">  
                            <tbody>
                                <tr className="border-b border-gray-300"> 
                                    <td className="font-bold bg-white">Name:</td>
                                    <td className="bg-white">Kalpesh D Desale</td>
                                </tr>
                                <tr className="border-b border-gray-300">  
                                    <td className="font-bold bg-white">Email:</td>
                                    <td className="bg-white"><a href="mailto:kalpeshdesale123@gmail.com" className="text-blue-500">kalpeshdesale@gmail.com</a></td>
                                </tr>
                                <tr className="border-b border-gray-300">  
                                    <td className="font-bold bg-white">Email Verification:</td>
                                    <td className="bg-white">Active</td>
                                </tr>
                                <tr className="border-b border-gray-300"> 
                                    <td className="font-bold bg-white">Phone:</td>
                                    <td className="bg-white"><a href="tel:7838137944" className="text-blue-500">7838137944</a></td>
                                </tr>
                                <tr className="border-b border-gray-300">  
                                    <td className="font-bold bg-white">Phone Verification:</td>
                                    <td className="bg-white">Active</td>
                                </tr>
                                <tr className="border-b border-gray-300"> 
                                    <td className="font-bold bg-white">Status:</td>
                                    <td className="bg-white">Active</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="bg-green-600 text-white py-2 px-4 rounded mt-4">Learn more...</button>
                    </div>
                </div>
            </div>
            {/* Profile Section ends */}

            {/* Card Section */}
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 p-2">
                        <i className="fa-solid fa-medal fa-2x text-yellow-500"></i> <strong className="text-lg">Experience</strong>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 mx-auto"> {/* Increased card width */}
                            <img src={card1} className="w-56 h-56 mx-auto" alt="Experience" /> {/* Larger image size */}
                            <div className="p-4">
                                <p className="text-lg">2+ YEARS <strong>Experience</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <i className="fa-solid fa-landmark fa-2x"></i> <strong className="text-lg">Land Size</strong>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 mx-auto"> {/* Increased card width */}
                            <img src={card2} className="w-56 h-56 mx-auto" alt="Land Size" /> {/* Larger image size */}
                            <div className="p-4">
                                <p className="text-lg">2 HECTORS <strong>Land Size</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <i className="fa-solid fa-file-invoice fa-2x"></i> <strong className="text-lg">Number of Contracts</strong>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 mx-auto"> {/* Increased card width */}
                            <img src={card3} className="w-56 h-56 mx-auto" alt="Contracts" /> {/* Larger image size */}
                            <div className="p-4">
                                <p className="text-lg">5+ <strong>Contracts</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Section ends */}

            {/* Achievements Section */}
            <div className="container mx-auto my-5">
                <i className="fa-solid fa-trophy fa-2x text-yellow-500"></i> <strong className="text-xl text-gray-800 ml-4">Achievements</strong>  
                <ul className="list-none p-0">
                    <li className="bg-gray-200 p-2 rounded mb-2">Innovative Farming Techniques</li>
                    <li className="bg-gray-200 p-2 rounded mb-2">Adoption of Technology</li>
                    <li className="bg-gray-200 p-2 rounded mb-2">Pioneering Organic Farming</li>
                    <li className="bg-gray-200 p-2 rounded mb-2">High Yield Crop Development</li>
                </ul>
            </div>
            {/* Achievements ends */}

            {/* Previous Contracts Section */}
            <div className="container mx-auto my-5">
                <i className="fa-solid fa-id-card-clip"></i> <strong className="ml-4">Previous Contracts</strong>  
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-2">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={potato} className="w-1/3 h-32 object-contain rounded-lg" alt="Contract Image" />
                            <div className="p-4">
                                <h5 className="font-bold">Vegetables Contract</h5>
                                <table className="table-auto w-full">
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
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 inline-block">Learn More...</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={fruit} className="w-1/3 h-32 object-contain rounded-lg" alt="Contract Image" />
                            <div className="p-4">
                                <h5 className="font-bold">Fruits Contract</h5>
                                <table className="table-auto w-full">
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
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded mt-2 inline-block">Learn More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Previous Contracts ends */}

            {/* Images Section */}
            <div className="container mx-auto my-5">
                <h2 className="text-xl font-bold mb-4 ml-4">Images</h2>  
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <img src={farm1} className="w-full h-48 object-cover rounded-lg" alt="Image 1" />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <img src={farm2} className="w-full h-48 object-cover rounded-lg" alt="Image 2" />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <img src={farm3} className="w-full h-48 object-cover rounded-lg" alt="Image 3" />
                    </div>
                </div>
            </div>
            {/* Images end */}
        </div>
    );
};

export default function Company_Profile_Page() {
    return (
        <>
            <Navbar />
            <Farmerprofile />
        </>
    );
}
