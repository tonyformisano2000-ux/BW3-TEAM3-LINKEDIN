// easter egg — pagina My Network

const NetworkPage = () => (
  <main className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
    <div className="text-center p-5" style={{ maxWidth: 520 }}>

      {/* titolo */}
      <h2 className="fw-bold">La tua rete professionale</h2>

      {/* sottotitolo */}
      <p className="text-muted mt-3 fs-5">
        Hai 847 connessioni.<br />
        Ne conosci davvero 3.
      </p>

      {/* corpo */}
      <p className="text-secondary mt-2" style={{ fontSize: "1rem" }}>
        Ci sono persone qui dentro che hai aggiunto nel 2019 a un evento di networking
        dove mangiaste tramezzini di dubbia qualità.<br />
        Non vi siete mai scritti. Non vi scriverete mai.<br />
      </p>

    </div>
  </main>
);

export default NetworkPage;
