// componente card singolo lavoro
const JobCard = ({ job }) => {

  return (

    // card lavoro
    <div className="border rounded-4 p-3 mb-3 bg-white">

      {/* contenitore principale */}
      <div className="d-flex gap-3">

        {/* logo fake azienda */}
        <div
          className="rounded bg-primary text-white d-flex justify-content-center align-items-center fw-bold"

          style={{
            width: "55px",
            height: "55px",
            flexShrink: 0,
            fontSize: "1.3rem",
          }}
        >

          {/* iniziale azienda */}
          {job.company_name?.charAt(0)}

        </div>

        {/* contenuto testo */}
        <div className="flex-grow-1">

          {/* titolo lavoro */}
          <h5 className="fw-bold mb-1">
            {job.title}
          </h5>

          {/* azienda */}
          <p className="mb-1">
            {job.company_name}
          </p>

          {/* categoria */}
          <p className="text-muted small mb-2">
            {job.category}
          </p>

          {/* link */}
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm rounded-pill"
          >
            Vedi annuncio
          </a>

        </div>
      </div>
    </div>
  );
};

// esportiamo componente
export default JobCard;