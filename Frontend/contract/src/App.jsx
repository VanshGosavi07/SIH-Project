import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./components/Default";
import Company_Profile from "./components/profile_forms/company_profile/Company_Profile";
import Farmer_Profile from "./components/profile_forms/farmer_profile/Farmer_Profile";
import Registeration from "./components/Registeration";
import Login from "./components/Login";
import CreateContract from "./components/Create_Contract";
import Home from "./components/Home";
import Company_Profile_Page from "./components/profiles pages/Company_Profile_Page";
import Farmer_Profile_Page from "./components/profiles pages/Farmer_Profile_Page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contract_Page from "./components/Contracts/Contract_Page";
import Sidebar from "./components/Chat/Sidebar";
import ChatArea from "./components/Chat/ChatArea";
import { LanguageProvider } from "./Context/LanguageContext";
import Manged_contract_page from "./components/Contracts/Managed_contract_page";
import Update_contract from "./components/Contracts/Update_contract";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <LanguageProvider>
                <Default />
              </LanguageProvider>
            }
          />
          <Route path="/company_profile_form" element={<Company_Profile />} />
          <Route path="/farmer_profile_form" element={<Farmer_Profile />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create_contract" element={<CreateContract />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company_profile" element={<Company_Profile_Page />} />
          <Route path="/farmer_profile" element={<Farmer_Profile_Page />} />
          <Route path="/contract_page/:id" element={<Contract_Page />} />
          <Route path="/update_contract/:id" element={<Update_contract />} />
          <Route
            path="/managed_contract_page/:id"
            element={<Manged_contract_page />}
          />
          <Route
            path="/chat"
            element={
              <div className="chat-container">
                <Sidebar onSelectUser={setSelectedUserId} />
                <ChatArea selectedUserId={selectedUserId} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
