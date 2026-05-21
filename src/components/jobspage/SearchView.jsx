import JobCard from "./JobCard";
import JobDetail from "./JobDetail";
import { EasterEggDaRemoto } from "./EasterEggs";

const FILTER_TABS = [
  "Candidatura semplice",
  "Da remoto",
  "Ibrido",
  "Piccole imprese",
  "Part time",
  "Volontariato",
];

// vista split panel — attiva quando si cerca
const SearchView = ({ filteredJobs, visibleCount, selectedJob, activeFilter, onFilterChange, onSelect, onDismiss, onLoadMore }) => (
  <div className="bg-white rounded-3 border overflow-hidden">

    {/* tab filtri orizzontali */}
    <div className="d-flex border-bottom px-3 overflow-auto" style={{ gap: "4px", flexWrap: "nowrap" }}>
      {FILTER_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onFilterChange(tab)}
          className="btn btn-link text-decoration-none py-3 px-2 text-nowrap"
          style={{
            fontSize: "0.85rem",
            borderRadius: 0,
            borderBottom: activeFilter === tab ? "2px solid #000" : "2px solid transparent",
            color: activeFilter === tab ? "#000" : "#666",
            fontWeight: activeFilter === tab ? "600" : "400",
            flexShrink: 0,
          }}
        >
          {tab}
        </button>
      ))}
    </div>

    <div className="row g-0" style={{ minHeight: "70vh" }}>

      {/* pannello lista */}
      <div className="col-5 border-end" style={{ overflowY: "auto", maxHeight: "calc(100vh - 140px)" }}>

        {/* header risultati */}
        <div className="px-3 py-2 border-bottom" style={{ backgroundColor: "#edf3f8" }}>
          <p className="fw-semibold mb-0 text-truncate" style={{ fontSize: "0.85rem" }}>
            Offerte di lavoro {activeFilter}
          </p>
          <small className="text-muted">{filteredJobs.length} risultati</small>
        </div>

        {/* easter egg o lista */}
        {activeFilter === "Da remoto" ? (
          <EasterEggDaRemoto />
        ) : (
          <>
            {filteredJobs.slice(0, visibleCount).map((job) => (
              <JobCard
                key={job._id}
                job={job}
                isSelected={selectedJob?._id === job._id}
                onSelect={onSelect}
                onDismiss={onDismiss}
                compact
              />
            ))}
            {visibleCount < filteredJobs.length && (
              <div className="text-center p-3">
                <button className="btn btn-primary rounded-pill" onClick={onLoadMore}>
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* pannello dettaglio */}
      <div className="col-7" style={{ overflowY: "auto", maxHeight: "calc(100vh - 140px)" }}>
        {selectedJob ? (
          <JobDetail job={selectedJob} />
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100 text-muted p-5">
            <div className="text-center">
              <i className="bi bi-briefcase" style={{ fontSize: "3rem" }}></i>
              <p className="mt-3">Seleziona un&apos;offerta per visualizzare i dettagli</p>
            </div>
          </div>
        )}
      </div>

    </div>
  </div>
);

export default SearchView;
