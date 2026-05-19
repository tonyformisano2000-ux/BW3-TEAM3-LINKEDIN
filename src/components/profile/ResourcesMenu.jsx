// componente menu risorse
const ResourcesMenu = () => {

  return (

    // container menu
    <div
      className="position-absolute bg-white shadow rounded-4 p-3 mt-2"

      // stile custom
      style={{
        width: '275px',

        // resta sopra tutto
        zIndex: 9999,

        // posizione menu
        right: 0,
      }}
    >

      {/* ====================== */}
      {/* INVIA PROFILO */}
      {/* ====================== */}

      <div className="d-flex align-items-center gap-3 py-3">

        {/* icona */}
        <i className="bi bi-send fs-4"></i>

        {/* testo */}
        <span className="fw-semibold">
          Invia il profilo in un messaggio
        </span>

      </div>

      {/* ====================== */}
      {/* PDF */}
      {/* ====================== */}

      <div className="d-flex align-items-center gap-3 py-3">

        <i className="bi bi-download fs-4"></i>

        <span className="fw-semibold">
          Salva come PDF
        </span>

      </div>

      {/* ====================== */}
      {/* ELEMENTI SALVATI */}
      {/* ====================== */}

      <div className="d-flex align-items-center gap-3 py-3">

        <i className="bi bi-bookmark-fill fs-4"></i>

        <span className="fw-semibold">
          Elementi salvati
        </span>

      </div>

      {/* ====================== */}
      {/* ATTIVITÀ */}
      {/* ====================== */}

      <div className="d-flex align-items-center gap-3 py-3">

        <i className="bi bi-bar-chart fs-4"></i>

        <span className="fw-semibold">
          Attività
        </span>

      </div>

      {/* ====================== */}
      {/* INFO UTENTE */}
      {/* ====================== */}

      <div className="d-flex align-items-center gap-3 py-3">

        <i className="bi bi-info-square-fill fs-4"></i>

        <span className="fw-semibold">
          Informazioni sull’utente
        </span>

      </div>

    </div>
  )
}

// esportiamo componente
export default ResourcesMenu