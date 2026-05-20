import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Notifications = () => {
  // stato loading notifiche
  const [loading, setLoading] = useState(true);

  // finto caricamento easter egg
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      {loading ? (
        <div className="text-center">
          <Spinner
            animation="border"
            variant="primary"
            style={{ width: "4rem", height: "4rem" }}
          />

          <p className="mt-4 fs-5 fw-semibold">
            Caricamento notifiche...
          </p>
        </div>
      ) : (
        <div
          className="bg-white rounded-4 shadow p-5 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="fw-bold mb-4">
            ❌ Nessuna nuova notifica
          </h2>

          <p className="fs-5 mb-3">
            I recruiter hanno visto il tuo profilo...
            <br />
            e hanno deciso di cambiare lavoro.
          </p>

          <div className="text-muted mt-4">
            <p className="mb-2">
              • 14 persone hanno trovato lavoro
            </p>

            <p className="mb-2">
              • 3 hanno aperto una startup
            </p>

            <p className="mb-0">
              • tu stai ancora refreshando questa pagina
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Notifications;