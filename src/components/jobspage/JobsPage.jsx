import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../redux/Actions/index";
import JobsSidebar from "./JobsSidebar";
import PremiumBanner from "./PremiumBanner";
import PremiumModal from "./PremiumModal";
import CategorySection from "./CategorySection";
import SearchView from "./SearchView";

// COMPONENTE PRINCIPALE

const JobsPage = ({ search }) => {
  const dispatch = useDispatch();

  // stati jobs
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // stati UI
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Simple application");
  const [activeCategory, setActiveCategory] = useState("Simple application");
  const [dismissedIds, setDismissedIds] = useState(new Set());
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // fetch jobs
  const getJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs",
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

  // fetch jobs
  useEffect(() => {
    getJobs();
    dispatch(getMyProfile());
  }, []);

  // reset al cambio ricerca
  useEffect(() => {
    setVisibleCount(10);
    setSelectedJob(null);
  }, [search]);

  // rimuove una job dalla lista
  const handleDismiss = (id) => {
    setDismissedIds((prev) => new Set([...prev, id]));
    if (selectedJob?._id === id) setSelectedJob(null);
  };

  // jobs filtrati per ricerca e dismissed
  const filteredJobs = jobs
    .filter((job) => !dismissedIds.has(job._id))
    .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  const isSearching = search.trim() !== "";

  // ------- RENDER -------

  return (
    <main className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="row">
          {/* sidebar sinistra */}
          <JobsSidebar />

          {/* contenuto principale */}
          <div className="col-12 col-md-9">
            {/* spinner caricamento */}
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

            {/* errore fetch */}
            {error && <p className="text-danger">{error}</p>}

            {/* vista default — nessuna ricerca */}
            {!loading && !error && !isSearching && (
              <>
                <PremiumBanner
                  onPremiumClick={() => setShowPremiumModal(true)}
                />
                <CategorySection
                  filteredJobs={filteredJobs}
                  visibleCount={visibleCount}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onSelect={setSelectedJob}
                  onDismiss={handleDismiss}
                  onLoadMore={() => setVisibleCount((p) => p + 20)}
                />
              </>
            )}

            {/* vista ricerca — split panel */}
            {!loading && !error && isSearching && (
              <SearchView
                filteredJobs={filteredJobs}
                visibleCount={visibleCount}
                selectedJob={selectedJob}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onSelect={setSelectedJob}
                onDismiss={handleDismiss}
                onLoadMore={() => setVisibleCount((p) => p + 20)}
              />
            )}
          </div>
        </div>
      </div>

      {/* modal premium */}
      {showPremiumModal && (
        <PremiumModal onClose={() => setShowPremiumModal(false)} />
      )}
    </main>
  );
};

export default JobsPage;
