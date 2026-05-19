import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import CoverModal from "./CoverModal";
import EditProfileModal from "./EditProfileModal";
import ProfileSections from "./ProfileSections";
import AvailableMenu from './AvailableMenu';
import ImproveProfileModal from './ImproveProfileModel';
import ResourcesMenu from './ResourcesMenu'


const ProfileHero = ({ profile }) => {
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showAvailableMenu, setShowAvailableMenu] = useState(false)
  const [showResourcesMenu, setShowResourcesMenu] = useState(false)

  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(profile.image);
  const [showImproveModal, setShowImproveModal] = useState(false);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <>
      <Card className="rounded-4 shadow-sm border-0">
        <div
          className="position-relative"
          style={{
            height: "220px",
            backgroundImage: coverImage
              ? `url(${coverImage})`
              : "linear-gradient(135deg, #78909c, #455a64)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            variant="light"
            size="sm"
            className="rounded-circle position-absolute top-0 end-0 m-3"
            onClick={() => setShowCoverModal(true)}
          >
            <i className="bi bi-camera-fill"></i>
          </Button>
        </div>

        <Card.Body className="position-relative pt-5 px-4 pb-4">
          <Button
            variant="light"
            className="rounded-circle position-absolute top-0 end-0 m-3 border-0"
            onClick={() => setShowEditModal(true)}
          >
            <i className="bi bi-pencil"></i>
          </Button>

          <img
            src={profileImage}
            alt={`${profile.name} ${profile.surname}`}
            className="rounded-circle border border-4 border-white position-absolute"
            style={{
              width: "160px",
              height: "160px",
              objectFit: "cover",
              top: "-100px",
              left: "32px",
            }}
          />

          <label
            className="btn btn-light rounded-circle position-absolute d-flex justify-content-center align-items-center p-0"
            style={{
              width: "42px",
              height: "42px",
              left: "150px",
              top: "25px",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            <i className="bi bi-camera-fill"></i>

            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleProfileUpload}
            />
          </label>

          <div style={{ height: "70px" }}></div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <h2 className="mb-0 fw-bold">
              {profile.name} {profile.surname}
            </h2>

            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill border-dashed fw-semibold"
            >
              <i className="bi bi-shield-check me-1"></i>
              Aggiungi badge di verifica
            </Button>
          </div>

          <p className="mb-2">{profile.title || "--"}</p>

          <p className="text-muted mb-4">
            {profile.area || "Lamezia Terme, Calabria, Italia"}
            <span className="mx-1">·</span>
            <a href="#" className="fw-semibold text-decoration-none">
              Informazioni di contatto
            </a>
          </p>

          <div className="d-flex gap-2 flex-wrap">
            <div className="position-relative">

            <Button
             variant="primary"
             className="rounded-pill fw-semibold"
             onClick={() =>
             setShowAvailableMenu(!showAvailableMenu)
             }
            >
              Disponibile per
            </Button>

            {/* menu dropdown */}
            {showAvailableMenu && (
            <AvailableMenu />
            )}

           </div>

            <Button
              variant="outline-primary"
              className="rounded-pill fw-semibold"
              onClick={() => setShowAddSectionModal(true)}
            >
              Aggiungi sezione
            </Button>

            <Button 
            variant="outline-primary" 
            className="rounded-pill fw-semibold"
            onClick={()=>setShowImproveModal(true)}
            >
                
              Migliora profilo
            </Button>

            <div className="position-relative">

            <Button
              variant="outline-secondary"
              className="rounded-pill fw-semibold"
              onClick={() =>
              setShowResourcesMenu(!showResourcesMenu)
             }
            >
              Risorse
            </Button>

             {/* dropdown risorse */}
              {showResourcesMenu && (
              <ResourcesMenu />
             )}

            </div>
          </div>
        </Card.Body>
      </Card>

      <CoverModal
        show={showCoverModal}
        onHide={() => setShowCoverModal(false)}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
      />

      <EditProfileModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        profile={profile}
      />

      <ProfileSections
        show={showAddSectionModal}
        onHide={() => setShowAddSectionModal(false)}
      />
      <ImproveProfileModal
      show={showImproveModal}
      onHide={()=>setShowImproveModal(false)}
      />
    </>
  );
};

export default ProfileHero;