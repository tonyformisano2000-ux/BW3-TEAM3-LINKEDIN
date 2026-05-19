// importiamo hook React
import { useEffect, useState } from "react";

// importiamo card singolo lavoro
import JobCard from "./JobCard";

// componente pagina jobs
const JobsPage = () => {

  // stato lista lavori
  const [jobs, setJobs] = useState([]);

  // stato caricamento
  const [loading, setLoading] = useState(false);

  // stato errore
  const [error, setError] = useState(null);

  // funzione fetch lavori
  const getJobs = async () => {

    try {

      // attiviamo loading
      setLoading(true);

      // resettiamo eventuali errori
      setError(null);

      // chiamata API
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs"
      );

      // se la response fallisce
      if (!response.ok) {
        throw new Error(
          "Errore nel recupero dei lavori"
        );
      }

      // convertiamo risposta in json
      const data = await response.json();

      // debug console
      console.log(data);

      // salviamo array lavori
      setJobs(data.data || data || []);

    } catch (error) {

      // salviamo errore
      setError(error.message);

    } finally {

      // spegniamo loading
      setLoading(false);
    }
  };

  // fetch al caricamento pagina
  useEffect(() => {
    getJobs();
  }, []);

  return (

    // pagina principale
    <main className="bg-light min-vh-100 py-4">

      {/* container bootstrap */}
      <div className="container">

        {/* titolo pagina */}
        <h1 className="fw-bold mb-4">
          Jobs
        </h1>

        {/* loading */}
        {loading && (
          <p>Caricamento lavori...</p>
        )}

        {/* errore */}
        {error && (
          <p className="text-danger">
            {error}
          </p>
        )}

        {/* lista lavori */}
        {!loading &&
          !error &&
          jobs.map((job) => (

            <JobCard
              key={job._id}
              job={job}
            />

          ))}
      </div>
    </main>
  );
};

// esportiamo componente
export default JobsPage;