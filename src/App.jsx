import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";
import PorzioneCentrale from "./components/homepage/porzioneCentrale";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <ProfilePage />
      <PorzioneCentrale />
    </div>
  );
}

export default App;
