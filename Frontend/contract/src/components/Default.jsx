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
    <div className="bg-green-100">
      {/* Navbar */}
      <header className="bg-green-800 shadow-md p-4 md:flex md:items-center md:justify-between fixed top-0 left-0 w-full z-50">
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
            className="text-white md:hidden focus:outline-none"
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
                className="block text-white text-lg py-2 px-4 hover:text-blue-600 cursor-pointer"
              >
                {language === "English"
                  ? "Home"
                  : language === "Hindi"
                  ? "होम"
                  : "मुख्यपृष्ठ"}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 text-white text-lg px-4 hover:text-blue-600 cursor-pointer"
              >
                {language === "English"
                  ? "About Us"
                  : language === "Hindi"
                  ? "हमारे बारे में"
                  : "आमच्याबद्दल"}
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 text-white text-lg hover:text-blue-600 cursor-pointer"
              >
                {language === "English"
                  ? "Our Services"
                  : language === "Hindi"
                  ? "हमारी सेवाएं"
                  : "आमच्या सेवा"}
              </Link>
            </li>
            <li>
              <Link
                to="photo-gallery"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 text-white text-lg hover:text-blue-600 cursor-pointer"
              >
                {language === "English"
                  ? "Photo Gallery"
                  : language === "Hindi"
                  ? "फोटो गैलरी"
                  : "फोटो गॅलरी"}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 px-4 text-white text-lg hover:text-blue-600 cursor-pointer"
              >
                {language === "English"
                  ? "Contact Us"
                  : language === "Hindi"
                  ? "संपर्क करें"
                  : "आमच्याशी संपर्क साधा"}
              </Link>
            </li>
            <li>
              <a
                href="/login"
                className="block text-white text-lg py-2 px-4 hover:text-blue-600"
              >
                {language === "English"
                  ? "Login"
                  : language === "Hindi"
                  ? "लॉग इन करें"
                  : "लॉगिन"}
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="block text-white text-lg py-2 px-4 hover:text-blue-600"
              >
                {language === "English"
                  ? "Register"
                  : language === "Hindi"
                  ? "रजिस्टर करें"
                  : "नोंदणी करा"}
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
      <div id="home" className="pt-20 mb-10">
        <Slider className="border-9 border-black bg-white p-4 rounded-lg shadow-md" />
      </div>

      {/* About Us */}
      <section
        id="about"
        className="py-16 shadow-md mb-20 bg-gray-50 mx-4 md:mx-14"
      >
        <div className="about-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="about-image md:w-1/2 w-full p-2">
            {/* Added padding here */}
            <img
              src={image}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="about-content md:w-1/2 w-full md:ml-8 mt-8 md:mt-0 text-gray-800">
            <h2 className="text-3xl text-green-600 font-bold mb-4">
              {language === "English"
                ? "About Us"
                : language === "Hindi"
                ? "हमारे बारे में"
                : "आमच्याबद्दल"}
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              {language === "English"
                ? "Passion Meets Innovation in Food and Agriculture"
                : language === "Hindi"
                ? "खाद्य और कृषि में नवाचार के साथ जुनून"
                : "अन्न व शेतीत नवनिर्मितीच्या उत्साहाचा संगम"}
            </h3>
            <p className="mb-4">
              {language === "English"
                ? "We are AgriConnect, a platform for contract-based farming that directly connects farmers with contractors, eliminating intermediaries. Our platform not only facilitates connections but also manages contracts from start to finish, offering legal support for any contract breaches to ensure transparency and trust."
                : language === "Hindi"
                ? "हम एग्रीकनेक्ट हैं, एक ऐसा प्लेटफॉर्म जो अनुबंध-आधारित खेती के लिए किसानों को ठेकेदारों से सीधे जोड़ता है, बिचौलियों को समाप्त करता है। हमारा प्लेटफॉर्म न केवल कनेक्शन की सुविधा प्रदान करता है बल्कि अनुबंधों को शुरू से अंत तक प्रबंधित करता है, किसी भी अनुबंध उल्लंघन के लिए कानूनी समर्थन प्रदान करता है ताकि पारदर्शिता और विश्वास सुनिश्चित हो सके।"
                : "आम्ही अॅग्रीकनेक्ट आहोत, एक व्यासपीठ जी करार-आधारित शेतीसाठी शेतकऱ्यांना ठेकेदारांशी थेट जोडते, मध्यस्थांना समाप्त करते. आमचे व्यासपीठ केवळ कनेक्शनची सुविधा देत नाही तर करारांचे सुरुवातीपासून शेवटपर्यंत व्यवस्थापन करते, कोणत्याही कराराच्या उल्लंघनासाठी कायदेशीर समर्थन देते जेणेकरून पारदर्शकता आणि विश्वास सुनिश्चित होईल."}
            </p>
            <p className="mb-4">
              {language === "English"
                ? "We foster transparency to ensure mutual benefits: farmers gain stable market access, and companies enjoy a reliable supply chain. Together, we drive economic growth, sustainability, and future food security."
                : language === "Hindi"
                ? "हम पारदर्शिता को बढ़ावा देते हैं ताकि पारस्परिक लाभ सुनिश्चित हो सके: किसानों को स्थिर बाजार पहुंच प्राप्त हो, और कंपनियों को एक विश्वसनीय आपूर्ति श्रृंखला का आनंद मिले। साथ में, हम आर्थिक विकास, स्थिरता और भविष्य की खाद्य सुरक्षा को बढ़ावा देते हैं।"
                : "आम्ही पारदर्शकतेला प्रोत्साहन देतो जेणेकरून परस्पर लाभ सुनिश्चित होईल: शेतकऱ्यांना स्थिर बाजारपेठ मिळेल आणि कंपन्यांना विश्वासार्ह पुरवठा साखळीचा आनंद मिळेल. एकत्रितपणे, आम्ही आर्थिक वाढ, शाश्वतता आणि भविष्यातील अन्न सुरक्षा वाढवतो."}
            </p>
            <div className="stats flex space-x-8 mt-6">
              <div className="stat-item text-center">
                <span className="block text-lg font-semibold">
                  {language === "English"
                    ? "Farmers"
                    : language === "Hindi"
                    ? "किसान"
                    : "शेतकरी"}
                </span>
                <strong className="text-2xl">8000+</strong>
              </div>
              <div className="stat-item text-center">
                <span className="block text-lg font-semibold">
                  {language === "English"
                    ? "States"
                    : language === "Hindi"
                    ? "राज्य"
                    : "राज्ये"}
                </span>
                <strong className="text-2xl">16</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-gray-50 mb-20 mx-4 md:mx-14">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl text-green-600 font-bold mb-8">
            {language === "English"
              ? "Our Services"
              : language === "Hindi"
              ? "हमारी सेवाएं"
              : "आमच्या सेवा"}
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            {language === "English"
              ? "We provide a range of services to support farmers and contractors, ensuring transparent, efficient, and sustainable farming practices."
              : language === "Hindi"
              ? "हम किसानों और ठेकेदारों का समर्थन करने के लिए सेवाओं की एक श्रृंखला प्रदान करते हैं, जो पारदर्शी, कुशल और स्थायी खेती प्रथाओं को सुनिश्चित करती हैं।"
              : "शेतकरी आणि कंत्राटदारांना समर्थन देण्यासाठी आम्ही सेवांची श्रेणी प्रदान करतो, पारदर्शक, कार्यक्षम आणि टिकाऊ शेती पद्धती सुनिश्चित करतो."}
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
                {language === "English"
                  ? "Contract Management"
                  : language === "Hindi"
                  ? "अनुबंध प्रबंधन"
                  : "करार व्यवस्थापन"}
              </h3>
              <p className="text-gray-600">
                {language === "English"
                  ? "We offer a streamlined process for creating and managing contracts between farmers and contractors, featuring customizable templates, secure digital signatures, and automated tracking to ensure all contract terms are met efficiently."
                  : language === "Hindi"
                  ? "हम किसानों और ठेकेदारों के बीच अनुबंध बनाने और प्रबंधित करने के लिए एक सुव्यवस्थित प्रक्रिया प्रदान करते हैं, जिसमें अनुकूलन योग्य टेम्पलेट, सुरक्षित डिजिटल हस्ताक्षर और स्वचालित ट्रैकिंग शामिल हैं।"
                  : "शेतकरी आणि कंत्राटदारांमधील करार तयार करण्यासाठी आणि व्यवस्थापित करण्यासाठी आम्ही एक सुव्यवस्थित प्रक्रिया प्रदान करतो, ज्यामध्ये सानुकूलन साच्यांचे वैशिष्ट्य आहे, सुरक्षित डिजिटल स्वाक्षरी आणि स्वयंचलित ट्रॅकिंग."}
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={Financial_Support}
                alt="Financial Support and Insurance"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {language === "English"
                  ? "Financial Support and Insurance"
                  : language === "Hindi"
                  ? "वित्तीय समर्थन और बीमा"
                  : "आर्थिक समर्थन आणि विमा"}
              </h3>
              <p className="text-gray-600">
                {language === "English"
                  ? "We provide comprehensive financial solutions, including loan assistance, crop insurance options, and financial planning services to support farmers in managing their operations effectively and reducing risk."
                  : language === "Hindi"
                  ? "हम व्यापक वित्तीय समाधान प्रदान करते हैं, जिसमें ऋण सहायता, फसल बीमा विकल्प, और वित्तीय योजना सेवाएं शामिल हैं।"
                  : "आम्ही व्यापक आर्थिक उपाय प्रदान करतो, ज्यामध्ये कर्ज सहाय्य, पीक विमा पर्याय आणि आर्थिक नियोजन सेवा समाविष्ट आहेत."}
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={market}
                alt="Market Access"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {language === "English"
                  ? "Market Access"
                  : language === "Hindi"
                  ? "बाजार पहुंच"
                  : "बाजार प्रवेश"}
              </h3>
              <p className="text-gray-600">
                {language === "English"
                  ? "We connect farmers directly with potential buyers and provide real-time market trends, pricing, and demand forecasts to help them make informed decisions and maximize profits."
                  : language === "Hindi"
                  ? "हम किसानों को संभावित खरीदारों से सीधे जोड़ते हैं और उन्हें बाजार प्रवृत्तियों, मूल्य निर्धारण और मांग पूर्वानुमानों के बारे में जानकारी प्रदान करते हैं।"
                  : "आम्ही शेतकऱ्यांना संभाव्य खरेदीदारांशी थेट जोडतो आणि त्यांना बाजारातील प्रवृत्ती, किंमत निर्धारण आणि मागणी अंदाज याबद्दल माहिती देतो."}
              </p>
            </div>
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <img
                src={Legal_Support}
                alt="Legal Support"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {language === "English"
                  ? "Legal Support"
                  : language === "Hindi"
                  ? "कानूनी समर्थन"
                  : "कायदेशीर समर्थन"}
              </h3>
              <p className="text-gray-600">
                {language === "English"
                  ? "We provide expert legal assistance to ensure that farmers and contractors navigate the complexities of agricultural laws, dispute resolution, and regulatory compliance with ease."
                  : language === "Hindi"
                  ? "हम विशेषज्ञ कानूनी सहायता प्रदान करते हैं ताकि किसान और ठेकेदार कृषि कानूनों, विवाद समाधान और विनियामक अनुपालन की जटिलताओं को आसानी से नेविगेट कर सकें।"
                  : "आम्ही तज्ज्ञ कायदेशीर सहाय्य प्रदान करतो जेणेकरून शेतकरी आणि कंत्राटदार कृषी कायदे, वाद निवारण आणि नियामक अनुपालनाची गुंतागुंत सहजपणे हाताळू शकतील."}
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
              {language === "English"
                ? "Quality Product"
                : language === "Hindi"
                ? "गुणवत्ता उत्पाद"
                : "गुणवत्तापूर्ण उत्पादन"}
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === "English"
                ? "We appreciate Your Trust Greatly"
                : language === "Hindi"
                ? "हम आपके विश्वास की अत्यधिक सराहना करते हैं"
                : "आम्ही तुमच्या विश्वासाचे खूप कौतुक करतो"}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === "English"
                ? "We prioritize quality in every partnership. Our commitment to connecting companies with dedicated farmers ensures that only the best produce reaches you. We deeply value your trust in our platform and strive to maintain it by upholding the highest standards of quality and transparency in all our operations."
                : language === "Hindi"
                ? "हम हर साझेदारी में गुणवत्ता को प्राथमिकता देते हैं। समर्पित किसानों से कंपनियों को जोड़ने की हमारी प्रतिबद्धता यह सुनिश्चित करती है कि केवल सर्वोत्तम उत्पाद आप तक पहुंचे। हम आपके हमारे प्लेटफॉर्म में विश्वास को गहराई से महत्व देते हैं और इसे बनाए रखने के लिए हमारी सभी गतिविधियों में उच्चतम गुणवत्ता और पारदर्शिता मानकों को बनाए रखने का प्रयास करते हैं।"
                : "आम्ही प्रत्येक भागीदारीत गुणवत्ता प्राधान्य देतो. समर्पित शेतकऱ्यांना कंपन्यांशी जोडण्याची आमची वचनबद्धता सुनिश्चित करते की फक्त सर्वोत्तम उत्पादन तुमच्यापर्यंत पोहोचेल. आमच्या प्लॅटफॉर्मवरील तुमचा विश्वास आम्ही अत्यंत महत्त्व देतो आणि आमच्या सर्व कामकाजामध्ये उच्च दर्जाचे आणि पारदर्शकतेचे मानक राखून ते कायम ठेवण्याचा प्रयत्न करतो."}
            </p>

            {/* Progress Bars */}
            <div className="progress-bar-container space-y-4">
              <div className="progress-bar">
                <div className="progress-label flex justify-between text-gray-800 mb-1">
                  <span>
                    {language === "English"
                      ? "Eco Farms"
                      : language === "Hindi"
                      ? "इको फार्म्स"
                      : "इको फार्म्स"}
                  </span>
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
                  <span>
                    {language === "English"
                      ? "Special Equipment"
                      : language === "Hindi"
                      ? "विशेष उपकरण"
                      : "विशेष उपकरणे"}
                  </span>
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
              alt={
                language === "English"
                  ? "Eco Farm"
                  : language === "Hindi"
                  ? "इको फार्म"
                  : "इको फार्म"
              }
              className="image-top w-full h-auto rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        id="photo-gallery"
        className="py-16 bg-gray-50 mx-4 mb-20 md:mx-14"
      >
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          {language === "English"
            ? "Photo Gallery"
            : language === "Hindi"
            ? "फोटो गैलरी"
            : "फोटो गॅलरी"}
        </h1>
        <div className="photo-gallery overflow-x-auto flex space-x-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item flex-shrink-0 w-72 sm:w-80 lg:w-96 xl:w-96 snap-center"
            >
              <img
                src={image.src}
                alt={
                  language === "English"
                    ? image.alt
                    : language === "Hindi"
                    ? `फोटो ${index + 1}`
                    : `फोटो ${index + 1}`
                }
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-gray-50 mx-4 mb-20 md:mx-14">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          {language === "English"
            ? "Contact Us"
            : language === "Hindi"
            ? "संपर्क करें"
            : "आमच्याशी संपर्क साधा"}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
            <img
              src={AgriConnectLogo}
              alt={
                language === "English"
                  ? "Contact Us"
                  : language === "Hindi"
                  ? "संपर्क करें"
                  : "आमच्याशी संपर्क साधा"
              }
              className="w-full h-auto border-1 border-black shadow-md object-cover"
              style={{ height: 464 }}
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 bg-white shadow-lg border-b border-black border-t border-black border-r border-black p-8 flex justify-center items-center">
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {language === "English"
                  ? "Have Questions? Get in Touch"
                  : language === "Hindi"
                  ? "कोई प्रश्न है? संपर्क करें"
                  : "प्रश्न आहेत? आमच्याशी संपर्क साधा"}
              </h3>

              <form action="#" method="post" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="first-name"
                      placeholder={
                        language === "English"
                          ? "First Name*"
                          : language === "Hindi"
                          ? "पहला नाम*"
                          : "पहिले नाव*"
                      }
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last-name"
                      placeholder={
                        language === "English"
                          ? "Last Name*"
                          : language === "Hindi"
                          ? "अंतिम नाम*"
                          : "आडनाव*"
                      }
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
                      placeholder={
                        language === "English"
                          ? "Email*"
                          : language === "Hindi"
                          ? "ईमेल*"
                          : "ईमेल*"
                      }
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={
                        language === "English"
                          ? "Phone Number*"
                          : language === "Hindi"
                          ? "फ़ोन नंबर*"
                          : "फोन नंबर*"
                      }
                      required
                      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={
                      language === "English"
                        ? "Message*"
                        : language === "Hindi"
                        ? "संदेश*"
                        : "संदेश*"
                    }
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
                    {language === "English"
                      ? "Get In Touch"
                      : language === "Hindi"
                      ? "संपर्क करें"
                      : "संपर्क साधा"}
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
    </div>
  );
}

export default Default;
