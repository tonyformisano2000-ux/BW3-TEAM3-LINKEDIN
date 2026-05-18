// PROFILE PAGE - MARTINA

// importo le azioni che userò nel reducer
import {
  SET_PROFILE,
  SET_PROFILE_LOADING,
  SET_PROFILE_ERROR,
} from "../Actions";

// stato iniziale di Redux
const initialState = {
  // qui finiranno i dati del profilo presi dalle API
  profile: null,

  // serve per sapere se il fetch sta caricando
  loading: false,

  // serve per eventuali errori
  error: null,
};

// reducer principale
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // quando arrivano i dati del profilo
    case SET_PROFILE:
      return {
        // copiamo tutto lo state precedente
        ...state,

        // aggiorniamo profile con i dati ricevuti
        profile: action.payload,
      };

    // gestione loading
    case SET_PROFILE_LOADING:
      return {
        ...state,

        // true o false
        loading: action.payload,
      };

    // gestione errori
    case SET_PROFILE_ERROR:
      return {
        ...state,

        // salviamo eventuali errori
        error: action.payload,
      };

    // se non riconosce l'azione
    default:
      // restituisce lo state attuale
      return state;
  }
};

// esporto il reducer
export default mainReducer;
