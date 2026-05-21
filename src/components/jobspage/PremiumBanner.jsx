// banner premium in cima alla vista default
const PremiumBanner = ({ onPremiumClick }) => (
  <div className="bg-white rounded-3 border p-4 mb-3">
    <div className="d-flex align-items-start gap-3">

      {/* avatar sovrapposti */}
      <div className="d-flex flex-shrink-0 mt-1">
        {[1, 2, 3].map((n) => (
          <img
            key={n}
            src={`https://i.pravatar.cc/32?img=${n}`}
            className="rounded-circle border border-2 border-white"
            style={{ width: 32, height: 32, marginLeft: n === 1 ? 0 : -8 }}
            alt=""
          />
        ))}
      </div>

      {/* testo e bottone */}
      <div>
        <p className="fw-semibold mb-1" style={{ fontSize: "0.95rem" }}>
          Vedi l&apos;elenco completo delle offerte di lavoro per cui saresti fra i migliori candidati
        </p>
        <small className="text-muted d-block mb-2">
          Antonio e milioni di altri utenti usano Premium
        </small>
        <button
          className="btn btn-warning rounded-pill btn-sm fw-semibold px-4"
          onClick={onPremiumClick}
        >
          Riattiva Premium con il 50% di sconto
        </button>
        <small className="text-muted d-block mt-1">
          Puoi annullare in qualsiasi momento. Nessuna spesa nascosta.
        </small>
      </div>
    </div>
  </div>
);

export default PremiumBanner;
