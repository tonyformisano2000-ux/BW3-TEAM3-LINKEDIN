// modal che appare cliccando "Riattiva Premium"
const PremiumModal = ({ onClose }) => (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    onClick={onClose}
  >
    <div
      className="bg-white rounded-4 p-4 text-center shadow-lg"
      style={{ maxWidth: 380 }}
      onClick={(e) => e.stopPropagation()}
    >
      <h4 className="fw-bold mt-2">Non te lo puoi permettere.</h4>
      <p className="text-muted mt-2">
        Hai visto quanto costa?<br />
        Torna a cercare lavoro, magari prima o poi riesci a pagarlo.
      </p>
      <button className="btn btn-secondary rounded-pill px-4 mt-1" onClick={onClose}>
        Ok, hai ragione
      </button>
    </div>
  </div>
);

export default PremiumModal;
