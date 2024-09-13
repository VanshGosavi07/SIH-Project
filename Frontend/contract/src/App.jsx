import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Company_Profile from "./components/profile_forms/company_profile/Company_Profile";
import Farmer_Profile from "./components/profile_forms/farmer_profile/Farmer_Profile";
import Registeration from "./components/Registeration";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company_profile" element={<Company_Profile />} />
          <Route path="/farmer_profile" element={<Farmer_Profile />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
