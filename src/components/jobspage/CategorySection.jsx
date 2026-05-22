import JobCard from "./JobCard";
import { EasterEggDaRemoto, EasterEggAltro } from "./EasterEggs";

const CATEGORY_TABS = [
  { label: "Simple application", icon: "bi-file-earmark-text" },
  { label: "Remotely", icon: "bi-people" },
  { label: "Hybrid", icon: "bi-house-door" },
  { label: "Other", icon: "bi-grid" },
];

// sezione "Esplora le categorie" con tab e lista offerte
const CategorySection = ({
  filteredJobs,
  visibleCount,
  activeCategory,
  onCategoryChange,
  onSelect,
  onDismiss,
  onLoadMore,
}) => (
  <div className="bg-white rounded-3 border">
    <div className="px-4 pt-4 pb-0">
      <h5 className="fw-bold mb-3">Explore the offer categories</h5>

      {/* tab categorie */}
      <div className="d-flex border-bottom" style={{ gap: "4px" }}>
        {CATEGORY_TABS.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => onCategoryChange(label)}
            className="btn btn-link text-decoration-none px-3 pb-2"
            style={{
              fontSize: "0.85rem",
              borderRadius: 0,
              borderBottom:
                activeCategory === label
                  ? "2px solid #000"
                  : "2px solid transparent",
              color: activeCategory === label ? "#000" : "#666",
              fontWeight: activeCategory === label ? "600" : "400",
            }}
          >
            <i className={`bi ${icon} me-1`}></i>
            {label}
          </button>
        ))}
      </div>
    </div>

    <div className="p-4">
      {activeCategory === "Remotely" ? (
        <EasterEggDaRemoto />
      ) : activeCategory === "Other" ? (
        <EasterEggAltro />
      ) : (
        <>
          {filteredJobs.slice(0, visibleCount).map((job) => (
            <div
              key={job._id}
              className="border rounded-3 mb-3 overflow-hidden"
            >
              <JobCard job={job} onSelect={onSelect} onDismiss={onDismiss} />
            </div>
          ))}
          {visibleCount < filteredJobs.length && (
            <div className="text-center mt-2">
              <button
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={onLoadMore}
              >
                Show all &rarr;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

export default CategorySection;
