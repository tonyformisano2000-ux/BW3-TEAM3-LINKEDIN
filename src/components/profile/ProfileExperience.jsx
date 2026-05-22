// importa hook react
import { useState, useEffect, useCallback } from "react";

// importa componenti bootstrap
import { Card, Button, Modal, Spinner } from "react-bootstrap";

// importa redux
import { useSelector } from "react-redux";

// token autenticazione API
const TOKEN =
  "YOUR_TOKEN_HERE";

// url base delle chiamate API
const API_BASE = "https://striveschool-api.herokuapp.com/api/profile";

// genera colore HSL da stringa
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${Math.abs(hash) % 360}, 60%, 38%)`;
};

// restituisce le iniziali dell'azienda
const getInitials = (company) =>
  (company || "A")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

// formatta data ISO in formato inglese
const formatDate = (dateStr) => {
  if (!dateStr) return "Present";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

// logo azienda con iniziali colorate
const CompanyLogo = ({ company }) => (
  <div
    className="rounded-2 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
    style={{
      width: 52,
      height: 52,
      backgroundColor: stringToColor(company || "A"),
      fontSize: "0.95rem",
    }}
  >
    {getInitials(company)}
  </div>
);

// stato iniziale del form vuoto
const EMPTY_FORM = {
  role: "",
  company: "",
  type: "Full-time",
  area: "",
  startDate: "",
  endDate: "",
  ongoing: false,
  description: "",
};

// singola esperienza nella lista
const ExperienceItem = ({ exp, onEdit }) => {

  // stato espansione descrizione
  const [expanded, setExpanded] = useState(false);

  // tronca descrizione lunga
  const desc = exp.description || "";
  const MAX = 130;
  const isLong = desc.length > MAX;
  const text = expanded || !isLong ? desc : desc.slice(0, MAX) + "...";

  return (
    <div className="d-flex gap-3 pb-4 border-bottom">

      {/* logo azienda */}
      <CompanyLogo company={exp.company} />

      {/* dettagli esperienza */}
      <div className="flex-grow-1">

        {/* ruolo */}
        <p className="fw-bold mb-0">{exp.role}</p>

        {/* azienda e tipo */}
        <p className="mb-0 small">
          {exp.company}
          {exp.type ? ` · ${exp.type}` : ""}
        </p>

        {/* date */}
        <p className="text-muted small mb-0">
          {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
        </p>

        {/* sede */}
        {exp.area && <p className="text-muted small mb-1">{exp.area}</p>}

        {/* descrizione */}
        {desc && <p className="small mb-0">{text}</p>}

        {/* bottone espandi descrizione */}
        {isLong && (
          <Button
            variant="link"
            className="p-0 small text-decoration-none fw-semibold"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>

      {/* bottone modifica */}
      <Button
        variant="light"
        className="rounded-circle border-0 p-2 align-self-start flex-shrink-0"
        onClick={() => onEdit(exp)}
      >
        <i className="bi bi-pencil"></i>
      </Button>
    </div>
  );
};

// form campi esperienza 
const ExperienceForm = ({ form, onChange }) => (
  <>
    {/* nota campi obbligatori */}
    <p className="small text-muted">* Indicates required</p>

    {/* campo titolo */}
    <div className="mb-3">
      <label className="form-label">Title*</label>
      <input
        type="text"
        className="form-control"
        placeholder="E.g. Frontend Developer"
        value={form.role}
        onChange={(e) => onChange("role", e.target.value)}
      />
    </div>

    {/* campo tipo impiego */}
    <div className="mb-3">
      <label className="form-label">Employment type</label>
      <select
        className="form-select"
        value={form.type}
        onChange={(e) => onChange("type", e.target.value)}
      >
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Self-employed</option>
        <option>Freelance</option>
        <option>Internship</option>
        <option>Apprenticeship</option>
        <option>Seasonal</option>
      </select>
    </div>

    {/* campo azienda */}
    <div className="mb-3">
      <label className="form-label">Company*</label>
      <input
        type="text"
        className="form-control"
        placeholder="E.g. Google"
        value={form.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
    </div>

    {/* campo sede */}
    <div className="mb-3">
      <label className="form-label">Location</label>
      <input
        type="text"
        className="form-control"
        placeholder="E.g. Milan, Italy"
        value={form.area}
        onChange={(e) => onChange("area", e.target.value)}
      />
    </div>

    {/* campi date */}
    <div className="row g-3 mb-2">

      {/* data inizio */}
      <div className="col">
        <label className="form-label">Start date*</label>
        <input
          type="date"
          className="form-control"
          value={form.startDate}
          onChange={(e) => onChange("startDate", e.target.value)}
        />
      </div>

      {/* data fine */}
      <div className="col">
        <label className="form-label">End date</label>
        <input
          type="date"
          className="form-control"
          value={form.endDate}
          disabled={form.ongoing}
          onChange={(e) => onChange("endDate", e.target.value)}
        />
      </div>
    </div>

    {/* checkbox attualmente in corso */}
    <div className="form-check mb-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="ongoing-check"
        checked={form.ongoing}
        onChange={(e) => {
          onChange("ongoing", e.target.checked);
          if (e.target.checked) onChange("endDate", "");
        }}
      />
      <label className="form-check-label small" htmlFor="ongoing-check">
        I currently work here
      </label>
    </div>

    {/* campo descrizione */}
    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea
        className="form-control"
        rows={4}
        placeholder="Describe your role..."
        value={form.description}
        onChange={(e) => onChange("description", e.target.value)}
      />
    </div>
  </>
);

// componente principale esperienze
const ProfileExperience = () => {

  // profilo utente
  const profile = useSelector((state) => state.profile);
  const userId = profile?._id;

  // stato lista esperienze
  const [experiences, setExperiences] = useState([]);
  const [loadingExp, setLoadingExp] = useState(false);
  const [saving, setSaving] = useState(false);

  // stato modali
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editExp, setEditExp] = useState(null);

  // stato form
  const [form, setForm] = useState(EMPTY_FORM);

  // recupera esperienze
  const fetchExperiences = useCallback(async () => {
    if (!userId) return;
    setLoadingExp(true);
    try {
      const res = await fetch(`${API_BASE}/${userId}/experiences`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      if (res.ok) setExperiences(await res.json());
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingExp(false);
    }
  }, [userId]);

  // carica esperienze
  useEffect(() => {
    if (!userId) return;
    const timeoutId = setTimeout(() => void fetchExperiences(), 0);
    return () => clearTimeout(timeoutId);
  }, [userId, fetchExperiences]);

  // aggiorna un campo del form
  const handleField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  // apre modal aggiunta
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setShowAdd(true);
  };

  // apre modal modifica 
  const openEdit = (exp) => {
    setEditExp(exp);
    setForm({
      role: exp.role || "",
      company: exp.company || "",
      type: exp.type || "Full-time",
      area: exp.area || "",
      startDate: exp.startDate ? exp.startDate.slice(0, 10) : "",
      endDate: exp.endDate ? exp.endDate.slice(0, 10) : "",
      ongoing: !exp.endDate,
      description: exp.description || "",
    });
    setShowEdit(true);
  };

  // costruisce il payload 
  const buildPayload = () => {
    const { ongoing, endDate, ...rest } = form;
    return ongoing ? rest : { ...rest, endDate };
  };

  // salva nuova esperienza
  const saveAdd = async () => {
    if (!form.role || !form.company) return;
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/${userId}/experiences`, {
        method: "POST",
        headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });
      if (res.ok) {
        await fetchExperiences();
        setShowAdd(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  // aggiorna esperienza esistente
  const saveEdit = async () => {
    if (!form.role || !form.company || !editExp) return;
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/${userId}/experiences/${editExp._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });
      if (res.ok) {
        await fetchExperiences();
        setShowEdit(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* card esperienze */}
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">

          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Experience</h5>

            {/* bottone aggiungi */}
            <Button variant="light" className="rounded-circle border-0 p-2" onClick={openAdd}>
              <i className="bi bi-plus-lg"></i>
            </Button>
          </div>

          {/* spinner caricamento */}
          {loadingExp ? (
            <div className="text-center py-3">
              <Spinner size="sm" />
            </div>
          ) : experiences.length === 0 ? (

            // messaggio lista vuota
            <p className="text-muted small mb-0">No experience added yet.</p>
          ) : (

            // lista esperienze
            <div className="d-flex flex-column gap-4">
              {experiences.map((exp) => (
                <ExperienceItem key={exp._id} exp={exp} onEdit={openEdit} />
              ))}
            </div>
          )}

        </Card.Body>
      </Card>

      {/* modale aggiungi esperienza */}
      <Modal show={showAdd} onHide={() => setShowAdd(false)} centered size="lg">

        {/* header */}
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Add experience</Modal.Title>
        </Modal.Header>

        {/* form */}
        <Modal.Body>
          <ExperienceForm form={form} onChange={handleField} />
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAdd(false)} disabled={saving}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveAdd} disabled={saving || !form.role || !form.company}>
            {saving ? <Spinner size="sm" /> : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modale modifica esperienza */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered size="lg">

        {/* header */}
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Edit experience</Modal.Title>
        </Modal.Header>

        {/* form precompilato */}
        <Modal.Body>
          <ExperienceForm form={form} onChange={handleField} />
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)} disabled={saving}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveEdit} disabled={saving || !form.role || !form.company}>
            {saving ? <Spinner size="sm" /> : "Save changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// esporta componente
export default ProfileExperience;