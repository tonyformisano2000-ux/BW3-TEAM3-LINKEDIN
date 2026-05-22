import { useState } from "react";
import { Modal } from "react-bootstrap";

const ProfileSections = ({ show, onHide }) => {
  const [showMainSections, setShowMainSections] = useState(true);
  const [showSuggestedSections, setShowSuggestedSections] = useState(false);
  const [showOtherSections, setShowOtherSections] = useState(false);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add to profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        {/* SEZIONI PRINCIPALI */}
        <div className="p-4 border-bottom">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowMainSections(!showMainSections)}
          >
            <h4 className="fw-bold mb-0">Core sections</h4>

            <i
              className={`bi ${
                showMainSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showMainSections && (
            <>
              <p className="text-muted fs-4">
                Complete these core sections to improve your profile visibility
                among recruiters and connections.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Add about section
                </button>
                <button className="btn text-start py-3 border-top">
                  Add education
                </button>
                <button className="btn text-start py-3 border-top">
                  Add work position
                </button>
                <button className="btn text-start py-3 border-top">
                  Add services
                </button>
                <button className="btn text-start py-3 border-top">
                  Add career break
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Add skills
                </button>
              </div>
            </>
          )}
        </div>

        {/* SEZIONI CONSIGLIATE */}
        <div className="p-4 border-bottom">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowSuggestedSections(!showSuggestedSections)}
          >
            <h4 className="fw-bold mb-0">Recommended sections</h4>

            <i
              className={`bi ${
                showSuggestedSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showSuggestedSections && (
            <>
              <p className="text-muted fs-4">
                Completing these sections will increase your credibility and
                help you access more opportunities.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Add featured content
                </button>
                <button className="btn text-start py-3 border-top">
                  Add licenses and certifications
                </button>
                <button className="btn text-start py-3 border-top">
                  Add projects
                </button>
                <button className="btn text-start py-3 border-top">
                  Add courses
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Add recommendations
                </button>
              </div>
            </>
          )}
        </div>

        {/* ALTRO */}
        <div className="p-4">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowOtherSections(!showOtherSections)}
          >
            <h4 className="fw-bold mb-0">Additional sections</h4>

            <i
              className={`bi ${
                showOtherSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showOtherSections && (
            <>
              <p className="text-muted fs-4">
                Give your profile even more personality. These sections will
                help you expand your network and build more professional
                relationships.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Add volunteer experience
                </button>
                <button className="btn text-start py-3 border-top">
                  Add publications
                </button>
                <button className="btn text-start py-3 border-top">
                  Add patents
                </button>
                <button className="btn text-start py-3 border-top">
                  Add honors and awards
                </button>
                <button className="btn text-start py-3 border-top">
                  Add test scores
                </button>
                <button className="btn text-start py-3 border-top">
                  Add languages
                </button>
                <button className="btn text-start py-3 border-top">
                  Add organizations
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Add causes
                </button>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileSections;