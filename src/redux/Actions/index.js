// PAGINA PROFILO - MARTINA

// tipi di azioni Redux
export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";
export const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

// mio token
const TOKEN_MARTINA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZTZmMzA2YmJlOTAwMTVkZWU1ODYiLCJpYXQiOjE3NzkwOTkzNzksImV4cCI6MTc4MDMwODk3OX0.QMTP69GvymIEdVhiMDnpWJ-fxlbNWlFnh2_3JY-ukc4";

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

      // se la risposta non è ok, creo un errore
      if (!response.ok) {
        throw new Error("Errore nel recupero del profilo");
      }

      // trasformo la risposta in JSON
      const data = await response.json();

      // salvo il profilo dentro Redux
      dispatch({
        type: SET_PROFILE,
        payload: data,
      });

      // levo eventuali errori precedenti
      dispatch({
        type: SET_PROFILE_ERROR,
        payload: null,
      });
    } catch (error) {
      // salvo l'errore dentro Redux
      dispatch({
        type: SET_PROFILE_ERROR,
        payload: error.message,
      });
    } finally {
      // finito il caricamento
      dispatch({
        type: SET_PROFILE_LOADING,
        payload: false,
      });
    }
  };
};
