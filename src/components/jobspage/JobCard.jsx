const COLORS = ["#0a66c2", "#057642", "#b24020", "#7a3e98", "#c37d16", "#1d4477"];
const LOCATIONS = ["Milano", "Roma", "Torino", "Bologna", "Firenze", "Napoli", "Genova"];
const WORK_TYPES = ["Da remoto", "In sede", "Ibrido"];

const hashStr = (str) => (str || "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);

const JobCard = ({ job, isSelected, onSelect, onDismiss, compact }) => {
  const hash = hashStr(job._id || job.company_name);
  const color = COLORS[hash % COLORS.length];
  const location = LOCATIONS[hash % LOCATIONS.length];
  const workType = WORK_TYPES[(hash >> 1) % WORK_TYPES.length];
  const hoursAgo = (hash % 20) + 1;
  const isEarly = hash % 3 === 0;

  return (
    <div
      className={`d-flex gap-3 align-items-start p-3 ${isSelected ? "bg-primary-subtle" : "bg-white"} ${compact ? "border-bottom" : ""}`}
      onClick={() => onSelect && onSelect(job)}
      style={{
        cursor: "pointer",
        borderLeft: isSelected ? "3px solid #0a66c2" : "3px solid transparent",
      }}
    >
      {/* Logo azienda */}
      <div
        className="rounded d-flex justify-content-center align-items-center text-white fw-bold flex-shrink-0"
        style={{ width: 48, height: 48, backgroundColor: color, fontSize: "1.2rem" }}
      >
        {job.company_name?.charAt(0).toUpperCase()}
      </div>

      <div className="flex-grow-1 overflow-hidden">
        <p className="mb-0 fw-semibold text-primary text-truncate" style={{ fontSize: "0.9rem" }}>
          {job.title}
        </p>
        <p className="mb-0 text-dark" style={{ fontSize: "0.82rem" }}>
          {job.company_name}
        </p>
        <p className="mb-1 text-muted" style={{ fontSize: "0.78rem" }}>
          {location}, Italia ({workType})
        </p>
        <div className="d-flex flex-wrap align-items-center gap-1">
          {isEarly && (
            <span className="text-success fw-semibold" style={{ fontSize: "0.73rem" }}>
              Invia una delle prime candidature ·{" "}
            </span>
          )}
          <span className="text-muted" style={{ fontSize: "0.73rem" }}>
            {hoursAgo}h fa ·
          </span>
          <i className="bi bi-linkedin text-primary" style={{ fontSize: "0.73rem" }}></i>
          <span className="text-muted" style={{ fontSize: "0.73rem" }}>
            Candidatura semplice
          </span>
        </div>
      </div>

      <button
        className="btn btn-link text-muted p-0 flex-shrink-0"
        style={{ lineHeight: 1 }}
        onClick={(e) => {
          e.stopPropagation();
          onDismiss && onDismiss(job._id);
        }}
      >
        <i className="bi bi-x-lg" style={{ fontSize: "0.85rem" }}></i>
      </button>
    </div>
  );
};

export default JobCard;
