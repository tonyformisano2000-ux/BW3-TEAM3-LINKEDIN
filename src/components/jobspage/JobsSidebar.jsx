import SidebarSx from "../homepage/SidebarSx";

const JOBS_SIDEBAR_LINKS = [
  { icon: "bi-sliders", label: "Preferenze" },
  { icon: "bi-bookmark", label: "Tracker delle offerte di lavoro" },
  { icon: "bi-folder2", label: "Le mie informazioni sulla carriera" },
];

const FOOTER_LINKS = ["Informazioni", "Accessibilità", "Centro assistenza", "Privacy", "Termini"];

// sidebar sinistra della pagina jobs
const JobsSidebar = () => (
  <div className="col-12 col-md-3 mb-3">

    {/* profilo utente — componente condiviso */}
    <SidebarSx />

    {/* link specifici della sezione jobs */}
    <div className="bg-white rounded-3 shadow-sm p-3 mt-2">
      {JOBS_SIDEBAR_LINKS.map(({ icon, label }) => (
        <div key={label} className="d-flex align-items-center gap-2 py-2" style={{ cursor: "pointer" }}>
          <i className={`bi ${icon} text-muted`}></i>
          <small className="fw-semibold">{label}</small>
        </div>
      ))}
      <hr className="my-2" />
      <div className="d-flex align-items-center gap-2 py-1" style={{ cursor: "pointer" }}>
        <i className="bi bi-pencil-square text-primary"></i>
        <small className="text-primary fw-semibold">Pubblica offerta di lavoro gratuita</small>
      </div>
    </div>

    {/* footer links */}
    <div className="px-1 mt-3 d-none d-lg-block">
      <div className="d-flex flex-wrap gap-2" style={{ fontSize: "0.72rem" }}>
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className="text-muted text-decoration-none">{link}</a>
        ))}
      </div>
      <p className="text-muted mt-1" style={{ fontSize: "0.70rem" }}>
        LinkedIn &copy; {new Date().getFullYear()}
      </p>
    </div>
  </div>
);

export default JobsSidebar;
