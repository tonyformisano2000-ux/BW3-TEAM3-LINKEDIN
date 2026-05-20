// PAGINA PROFILO - MARTINA
import { TOKEN, MOCK_PROFILE } from "../../auth/auth";

// tipi di azioni Redux
export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";
export const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

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
            Authorization: `Bearer ${TOKEN}`,
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
