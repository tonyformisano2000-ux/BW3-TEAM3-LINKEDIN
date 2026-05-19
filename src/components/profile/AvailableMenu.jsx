// componente menu disponibile per
const AvailableMenu = () => {

  return (

    // container menu dropdown
    <div
      className="position-absolute bg-white shadow rounded-4 p-3 mt-2"

      // stile custom
      style={{
        width: '290px',

        // resta sopra gli altri elementi
        zIndex: 9999,
      }}
    >

      {/* ====================== */}
      {/* NUOVO LAVORO */}
      {/* ====================== */}

      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Trovare un nuovo lavoro
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Mostra ai recruiter e ad altri
          che sei disponibile a lavorare
        </p>

      </div>

      {/* ====================== */}
      {/* ASSUNZIONI */}
      {/* ====================== */}

      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Assunzioni
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Fai sapere che stai assumendo
          e attrai candidati qualificati
        </p>

      </div>

      {/* ====================== */}
      {/* SERVIZI */}
      {/* ====================== */}

      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Fornire servizi
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Metti in risalto i servizi che offri,
          così i nuovi clienti potranno trovarti
        </p>

      </div>

      {/* ====================== */}
      {/* VOLONTARIATO */}
      {/* ====================== */}

      <div>

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Trovare opportunità di volontariato
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Mostra che sei disponibile
          per volontariato relativo
          alle tue competenze
        </p>

      </div>

    </div>
  )
}

// esportiamo componente
export default AvailableMenu