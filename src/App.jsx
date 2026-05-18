import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import PorzioneCentrale from "./components/homepage/porzioneCentrale";
import { Texting } from "./components/Texting";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="d-flex flex-column vh-100">
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <ProfilePage />

      <PorzioneCentrale />

      <Texting collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
}

export default App;
