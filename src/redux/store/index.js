// PROFILE PAGE - MARTINA

// importp configureStore da Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// importo il reducer principale
import mainReducer from "../Reducers";

// creo lo store Redux
const store = configureStore({
  // collego il reducer allo store
  reducer: mainReducer,
});

// esporto lo store
export default store;
