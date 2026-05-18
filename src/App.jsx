import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <ProfilePage />
    </div>
  );
}

export default App;
