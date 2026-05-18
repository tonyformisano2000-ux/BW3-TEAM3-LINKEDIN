// importiamo useState per gestire stati locali del componente
import { useState } from 'react'

// importiamo componenti di React Bootstrap
import { Button, Card, Modal } from 'react-bootstrap'

// componente hero principale del profilo
const ProfileHero = ({ profile }) => {
  // stato per aprire/chiudere la modale della copertina
  const [showCoverModal, setShowCoverModal] = useState(false)

  // stato della copertina selezionata
  const [coverImage, setCoverImage] = useState(null)
  // stato foto profilo
  const [profileImage, setProfileImage]=useState(profile.image)

  // immagini predefinite tra cui scegliere
  const coverImages = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  ]

  // funzione per caricare una copertina dal PC
  const handleCoverUpload = (e) => {
    // prendiamo il primo file scelto
    const file = e.target.files[0]

    // se non c'è nessun file, fermiamo la funzione
    if (!file) return

    // creiamo un URL temporaneo per mostrare subito l'immagine
    const imageUrl = URL.createObjectURL(file)

    // salviamo l'immagine nello stato
    setCoverImage(imageUrl)
  }

  // funzione per cambiare foto profilo 
  const handleProfileUpload = (e) => {
    // prendiao file selezionato
    const file = e.target.files[0]

    // se non esiste, fermiamo tutto
    if (!file) return
    
    // URL temporaneo
    const imageUrl= URL.createObjectURL(file)

    // aggiorno foto profilo
    setProfileImage(imageUrl)
  }

  return (
    <>
      {/* card principale */}
      <Card className="overflow-hidden rounded-4">
        {/* banner/copertina superiore */}
        <div
          className="position-relative"
          style={{
            height: '180px',

            // se coverImage esiste, mostriamo quella; altrimenti gradient grigio
            backgroundImage: coverImage
              ? `url(${coverImage})`
              : 'linear-gradient(135deg, #78909c, #455a64)',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* bottone fotocamera */}
          <Button
            variant="light"
            size="sm"
            className="rounded-circle position-absolute top-0 end-0 m-3"
            onClick={() => setShowCoverModal(true)}
          >
            <i className="bi bi-camera-fill"></i>
          </Button>
        </div>

        {/* corpo della card */}
        <Card.Body className="position-relative pt-5">
          {/* immagine profilo */}
          <img
            src={profileImage}
            alt={`${profile.name} ${profile.surname}`}
            className="rounded-circle border border-4 border-white position-absolute"
            style={{
              width: '140px',
              height: '140px',
              objectFit: 'cover',
              top: '-90px',
              left: '24px',
            }}
          />

          {/* bottone modifica foto profilo */}
          <label
          className='btn btn-light rounded-circle position-absolute d-flex justify-content-center align-items-center p-0'
          style={{
            width:'38px',
            height: '38px',
            left: '120px',
            top: '15px',
            border: '1px solid #ddd',
            cursor: 'pointer',
           }}
           ></label>



          {/* nome e cognome */}
          <h2 className="mb-0">
            {profile.name} {profile.surname}
          </h2>

          {/* titolo lavorativo */}
          <p className="mb-1">{profile.title}</p>

          {/* località */}
          <p className="text-muted mb-3">{profile.area}</p>

          {/* bottoni */}
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="primary" className="rounded-pill">
              Disponibile per
            </Button>

            <Button variant="outline-primary" className="rounded-pill">
              Aggiungi sezione del profilo
            </Button>

            <Button variant="outline-secondary" className="rounded-pill">
              Altro
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* modale modifica copertina */}
      <Modal
        show={showCoverModal}
        onHide={() => setShowCoverModal(false)}
        centered
        size="lg"
      >
        {/* header modale */}
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi un’immagine di copertina</Modal.Title>
        </Modal.Header>

        {/* corpo modale */}
        <Modal.Body>
          <p className="fw-bold mb-1">Carica la tua immagine</p>

          <p className="text-muted">
            Mostra la tua personalità, i tuoi interessi, il tuo lavoro o
            istantanee del tuo team
          </p>

          {/* bottone upload dal PC */}
          <label className="btn btn-outline-secondary mb-4">
            Carica una sola foto
            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleCoverUpload}
            />
          </label>

          <p className="fw-bold">Oppure scegli una copertina predefinita</p>

          {/* gallery immagini predefinite */}
          <div className="row g-3">
            {coverImages.map((image, index) => (
              <div className="col-6 col-md-3" key={index}>
                <img
                  src={image}
                  alt={`Copertina ${index + 1}`}
                  className="img-fluid rounded-3"
                  style={{
                    height: '90px',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer',

                    // bordo blu se è selezionata
                    border:
                      coverImage === image
                        ? '3px solid #0d6efd'
                        : '1px solid #ddd',
                  }}
                  onClick={() => setCoverImage(image)}
                />
              </div>
            ))}
          </div>
        </Modal.Body>

        {/* footer modale */}
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowCoverModal(false)}
          >
            Annulla
          </Button>

          <Button
            variant="primary"
            onClick={() => setShowCoverModal(false)}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileHero