import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import PorzioneCentrale from "./components/homepage/porzioneCentrale";
import { Texting } from "./components/Texting";
import JobsPage from "./components/jobspage/JobsPage";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setSearch(value);

    if (value.trim() !== "") {
      navigate("/jobs");
    }
  };

  const handleSearchSubmit = () => {
    if (search.trim() !== "") {
      navigate("/jobs");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        search={search}
        setSearch={handleSearchChange}
        onSearch={handleSearchSubmit}
        clearSearch={() => setSearch("")}
      />

      <Routes>
        <Route path="/home" element={<PorzioneCentrale />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/jobs" element={<JobsPage search={search} />} />
      </Routes>

      <Texting collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
}

export default App;