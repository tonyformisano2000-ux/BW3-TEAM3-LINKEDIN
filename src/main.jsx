// importo createRoot per montare l'app nel DOM - Martina
import { createRoot } from "react-dom/client";
// importo il CSS globale - Martina
import "./index.css";
// importo il componente principale - Martina
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// importo lo store Redux che abbiamo creato - Martina
import store from "./redux/store";
// importo il Provider di Redux - Martina
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
