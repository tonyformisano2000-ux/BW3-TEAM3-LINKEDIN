import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import SidebarSx from "../homepage/SidebarSx";

const JobsPage = ({ search }) => {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs"
      );

      if (!response.ok) throw new Error("Error fetching jobs");

      const data = await response.json();
      setJobs(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getJobs();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(10);
  }, [search]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="row">
          {/*sidebar sinistra anche nella pagina jobs */}
          <div className="col-12 col-md-3 mb-3">
            <SidebarSx />
          </div>

          {/*contenuto principale jobs */}
          <div className="col-12 col-md-9">
            <h1 className="fw-bold mb-4">Jobs</h1>

            {loading && (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div
                  className="spinner-border text-primary"
                  role="status"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {error && <p className="text-danger">{error}</p>}

            {!loading &&
              !error &&
              filteredJobs
                .slice(0, visibleCount)
                .map((job) => <JobCard key={job._id} job={job} />)}

            {!loading && !error && visibleCount < filteredJobs.length && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary rounded-pill"
                  onClick={() => setVisibleCount((prev) => prev + 20)}
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobsPage;