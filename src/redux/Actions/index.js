// PAGINA PROFILO - MARTINA
import martinaProfile from "../../assets/martina-profile.jpg";

// tipi di azioni Redux
export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";
export const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

// mio token
const TOKEN_MARTINA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBiNTYzOTA2YmJlOTAwMTVkZWU1OGIiLCJpYXQiOjE3NzkxMjc4NjYsImV4cCI6MTc4MDMzNzQ2Nn0.JZjN2osgizy9f_4tzKIJOa3qHhRyBgZO9IpElXOHt8Q";

// profilo mock — usato come fallback quando l'API non è raggiungibile
const MOCK_PROFILE = {
  _id: "6a0ae6f306bbe90015dee586",
  name: "Martina",
  surname: "Aceto",
  email: "martina.aceto@email.it",
  username: "martina.aceto",
  bio: 'Martina 🏰 | Front-End Developer\nOrgogliosamente lametina. Creo cose belle sul web.\nVivo secondo la regola: "Se funziona, non toccarlo. Se non funziona, dai la colpa al Back-End".\nSe non sto programmando, probabilmente sto facendo Pilates.',
  title: "Frontend Developer",
  area: "Lamezia Terme, Calabria, Italia",
  image: martinaProfile,
};

// funzione asincrona per recuperare il profilo
export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      // attivo il caricamento
      dispatch({
        type: SET_PROFILE_LOADING,
        payload: true,
      });

      // chiamata API
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${TOKEN_MARTINA}`,
          },
        },
      );

      // se la risposta non è ok uso il mock
      if (!response.ok) throw new Error("API non disponibile");

      // se il server risponde con HTML (Heroku down) uso il mock
      const text = await response.text();
      if (text.trim().startsWith("<")) throw new Error("API non disponibile");

      const data = JSON.parse(text);

      // salvo il profilo dentro Redux
      dispatch({ type: SET_PROFILE, payload: data });
      dispatch({ type: SET_PROFILE_ERROR, payload: null });
    } catch (error) {
      console.error(error);
      // API non raggiungibile: uso il profilo mock
      dispatch({ type: SET_PROFILE, payload: MOCK_PROFILE });
      dispatch({ type: SET_PROFILE_ERROR, payload: null });
    } finally {
      dispatch({ type: SET_PROFILE_LOADING, payload: false });
    }
  };
};
