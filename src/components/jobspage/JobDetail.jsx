const COLORS = ["#0a66c2", "#057642", "#b24020", "#7a3e98", "#c37d16", "#1d4477"];
const LOCATIONS = ["Milano", "Roma", "Torino", "Bologna", "Firenze", "Napoli", "Genova"];
const WORK_TYPES = ["Da remoto", "In sede", "Ibrido"];

const hashStr = (str) => (str || "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);

const JobDetail = ({ job }) => {
  if (!job) return null;

  const hash = hashStr(job._id || job.company_name);
  const color = COLORS[hash % COLORS.length];
  const location = LOCATIONS[hash % LOCATIONS.length];
  const workType = WORK_TYPES[(hash >> 1) % WORK_TYPES.length];
  const timeType = hash % 2 === 0 ? "A tempo pieno" : "Part time";
  const candidateCount = (hash % 50) + 5;
  const hoursAgo = (hash % 20) + 1;
  const skillMatch = hash % 6;

  return (
    <div>
      {/* Intestazione */}
      <div className="p-4 border-bottom">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div
            className="rounded d-flex justify-content-center align-items-center text-white fw-bold"
            style={{ width: 56, height: 56, backgroundColor: color, fontSize: "1.4rem" }}
          >
            {job.company_name?.charAt(0).toUpperCase()}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-light btn-sm rounded-circle p-2">
              <i className="bi bi-share"></i>
            </button>
            <button className="btn btn-light btn-sm rounded-circle p-2">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        </div>

        <h5 className="fw-bold mb-1">{job.title}</h5>
        <p className="mb-1" style={{ fontSize: "0.9rem" }}>
          {job.company_name} · {location}, Lombardia, Italia
        </p>
        <p className="text-muted mb-1" style={{ fontSize: "0.82rem" }}>
          {hoursAgo} ore fa · {candidateCount} candidati
        </p>
        <p className="mb-3" style={{ fontSize: "0.82rem" }}>
          Promossa ·{" "}
          <span className="text-success fw-semibold">
            Solitamente la valutazione richiede 1 settimana
          </span>
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="border rounded-pill px-3 py-1" style={{ fontSize: "0.82rem" }}>
            ✓ {workType === "Da remoto" ? "Da remoto" : workType === "Ibrido" ? "Ibrido" : "In sede"}
          </span>
          <span className="border rounded-pill px-3 py-1" style={{ fontSize: "0.82rem" }}>
            ✓ {timeType}
          </span>
        </div>

        {skillMatch > 0 && (
          <div className="mb-3">
            <span className="border rounded-pill px-3 py-1 text-muted" style={{ fontSize: "0.82rem" }}>
              <i className="bi bi-gem me-1 text-warning"></i>
              {skillMatch} di 10 competenze corrispondenti
            </span>
          </div>
        )}

        <div className="d-flex gap-2">
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-pill px-4 fw-semibold"
          >
            <i className="bi bi-linkedin me-2"></i>Candidatura semplice
          </a>
          <button className="btn btn-outline-secondary rounded-pill px-4">Salva</button>
        </div>
      </div>

      {/* Premium */}
      <div className="p-4 border-bottom">
        <div className="d-flex align-items-start gap-3">
          <span style={{ fontSize: "2rem" }}>🧡</span>
          <div>
            <p className="fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
              Vedi un confronto con altri {candidateCount} candidati
            </p>
            <p className="text-muted mb-2" style={{ fontSize: "0.82rem" }}>
              Accedi a informazioni esclusive sui candidati, scopri le offerte di lavoro per cui
              rientreresti fra i migliori candidati, e tanto altro
            </p>
            <button className="btn btn-warning rounded-pill btn-sm fw-semibold px-3">
              Riattiva Premium con il 50% di sconto
            </button>
          </div>
        </div>
      </div>

      {/* Descrizione offerta */}
      <div className="p-4 border-bottom">
        <h6 className="fw-bold mb-3">Informazioni sull'offerta di lavoro</h6>
        <p
          className="fw-semibold text-uppercase mb-2"
          style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
        >
          {job.category}
        </p>
        <p className="text-muted mb-2" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
          Siamo alla ricerca di un professionista motivato da inserire nel nostro team come{" "}
          <strong>{job.title}</strong>. Il candidato ideale ha esperienza nel settore{" "}
          <strong>{job.category}</strong> ed è pronto ad affrontare nuove sfide.
        </p>
        <p className="fw-semibold mb-1" style={{ fontSize: "0.88rem" }}>
          Responsabilità:
        </p>
        <ul className="text-muted" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
          <li>Gestione e sviluppo delle attività in ambito {job.category}</li>
          <li>Collaborazione con team interfunzionali</li>
          <li>Reportistica e analisi dei risultati</li>
        </ul>
        <p className="fw-semibold mb-1" style={{ fontSize: "0.88rem" }}>
          Requisiti:
        </p>
        <ul className="text-muted" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
          <li>Esperienza minima di 2 anni nel settore</li>
          <li>Ottime capacità comunicative</li>
          <li>Conoscenza della lingua inglese</li>
        </ul>
      </div>

      {/* Informazioni azienda */}
      <div className="p-4">
        <h6 className="fw-bold mb-3">Informazioni sull'azienda</h6>
        <div className="d-flex align-items-center gap-3 mb-2">
          <div
            className="rounded d-flex justify-content-center align-items-center text-white fw-bold"
            style={{ width: 48, height: 48, backgroundColor: color, fontSize: "1.2rem" }}
          >
            {job.company_name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
              {job.company_name}
            </p>
            <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">+ Segui</button>
          </div>
        </div>
        <p className="text-muted" style={{ fontSize: "0.82rem" }}>
          {job.category} · 11-50 dipendenti
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
