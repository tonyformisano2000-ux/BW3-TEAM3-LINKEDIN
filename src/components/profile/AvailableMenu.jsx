// componente menu disponibile per
const AvailableMenu = () => {

  return (

    <div
      className="position-absolute bg-white shadow rounded-4 p-3 mt-2"

      style={{
        width: '290px',

        zIndex: 9999,
      }}
    >


      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Find a new job
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Show recruiters and others that you are available for work
        </p>

      </div>

      {/* ====================== */}
      {/* ASSUNZIONI */}
      {/* ====================== */}

      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Hiring
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          let them know you're hiring 
          and attract qualified candidates
        </p>

      </div>

      {/* ====================== */}
      {/* SERVIZI */}
      {/* ====================== */}

      <div className="mb-4">

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Provide services
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Highlight the services you offer, 
          so new customers can find you
        </p>

      </div>

      {/* ====================== */}
      {/* VOLONTARIATO */}
      {/* ====================== */}

      <div>

        {/* titolo */}
        <h5 className="fw-bold mb-1">
          Find volunteer opportunities
        </h5>

        {/* descrizione */}
        <p className="text-muted mb-0">
          Show that you are available 
          for related volunteering 
          to your skills
          
        </p>

      </div>

    </div>
  )
}

// esportiamo componente
export default AvailableMenu