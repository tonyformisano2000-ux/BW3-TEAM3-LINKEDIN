// URL gif easter egg
const GIF_DA_REMOTO = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBiNXNhZzk4am01amYxanhuanB5aXNmMWd6OWRqOXBvaDE4Z3dsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jOpLbiGmHR9S0/giphy.gif";
const GIF_ALTRO = "https://media1.tenor.com/m/mKfeCtD5EukAAAAd/the-office-the.gif";

// easter egg tab "Da remoto"
export const EasterEggDaRemoto = () => (
  <div className="text-center py-5">
    <img src={GIF_DA_REMOTO} alt="the office" style={{ width: 280, borderRadius: 12 }} />
    <h4 className="fw-bold mt-3">Seeeh, ti piacerebbe!</h4>
    <p className="text-muted mt-2">
      Niente smart working qui.<br />
      Ufficio, 8 ore al giorno, dal lunedì al venerdì.<br />
      Come si faceva una volta. Come si farà per sempre.
    </p>
  </div>
);

// easter egg tab "Altro"
export const EasterEggAltro = () => (
  <div className="text-center py-5">
    <img src={GIF_ALTRO} alt="the office altro" style={{ width: 280, borderRadius: 12 }} />
    <h4 className="fw-bold mt-3">Altro? Altro cosa?</h4>
    <p className="text-muted mt-2">
      Non trovi lavoro neanche nella categoria principale.<br />
      Stai cercando in &quot;Altro&quot;.<br />
      Forse è il momento di rivedere il CV.
    </p>
  </div>
);
