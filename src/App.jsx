import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import PorzioneCentrale from "./components/homepage/HomePage";
import { Texting } from "./components/Texting";
import HomePage from "./components/homepage/HomePage";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Texting collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
}

export default App;
