import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />

      <main className="bg-secondary flex-grow-1 d-flex">Content here</main>
    </div>
  );
}

export default App;
