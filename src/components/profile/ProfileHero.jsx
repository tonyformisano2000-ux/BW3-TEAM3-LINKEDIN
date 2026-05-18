// importiamo useState per gestire stati locali del componente
import { useState } from 'react'

// importiamo componenti di React Bootstrap
import { Button, Card, Modal } from 'react-bootstrap'

// componente hero principale del profilo
const ProfileHero = ({ profile }) => {
  // stato per aprire/chiudere la modale della copertina
  const [showCoverModal, setShowCoverModal] = useState(false)

  // stato per aprire/chiudere la modale modifica profilo
  const [showEditModal, setShowEditModal] = useState(false)

  // stato della copertina selezionata
  const [coverImage, setCoverImage] = useState(null)

  // stato della foto profilo
  const [profileImage, setProfileImage] = useState(profile.image)

  // immagini predefinite tra cui scegliere
  const coverImages = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  ]

  // funzione upload copertina
  const handleCoverUpload = (e) => {
    // prendiamo il file selezionato
    const file = e.target.files[0]

    // se non esiste blocchiamo tutto
    if (!file) return

    // creiamo URL temporaneo
    const imageUrl = URL.createObjectURL(file)

    // aggiorniamo la copertina
    setCoverImage(imageUrl)
  }

  // funzione upload foto profilo
  const handleProfileUpload = (e) => {
    const file = e.target.files[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setProfileImage(imageUrl)
  }

  return (
    <>
      {/* card principale */}
      <Card className="overflow-hidden rounded-4 shadow-sm border-0">
        
        {/* banner/copertina */}
        <div
          className="position-relative"
          style={{
            height: '220px',

            // se esiste una cover selezionata la mostriamo
            backgroundImage: coverImage
              ? `url(${coverImage})`
              : 'linear-gradient(135deg, #78909c, #455a64)',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* bottone modifica copertina */}
          <Button
            variant="light"
            size="sm"
            className="rounded-circle position-absolute top-0 end-0 m-3"
            onClick={() => setShowCoverModal(true)}
          >
            <i className="bi bi-camera-fill"></i>
          </Button>
        </div>

        {/* corpo card */}
        <Card.Body className="position-relative pt-5 px-4 pb-4">

          {/* bottone modifica profilo */}
          <Button
            variant="light"
            className="rounded-circle position-absolute top-0 end-0 m-3 border-0"
            onClick={() => setShowEditModal(true)}
          >
            <i className="bi bi-pencil"></i>
          </Button>

          {/* immagine profilo */}
          <img
            src={profileImage}
            alt={`${profile.name} ${profile.surname}`}
            className="rounded-circle border border-4 border-white position-absolute"
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'cover',

              // sovrapposta alla copertina
              top: '-100px',
              left: '32px',
            }}
          />

          {/* bottone modifica foto profilo */}
          <label
            className="btn btn-light rounded-circle position-absolute d-flex justify-content-center align-items-center p-0"
            style={{
              width: '42px',
              height: '42px',

              // posizione sopra la foto
              left: '150px',
              top: '25px',

              border: '1px solid #ddd',
              cursor: 'pointer',
            }}
          >
            {/* icona fotocamera */}
            <i className="bi bi-camera-fill"></i>

            {/* input nascosto */}
            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleProfileUpload}
            />
          </label>

          {/* spazio sopra per la foto */}
          <div style={{ height: '70px' }}></div>

          {/* nome + badge */}
          <div className="d-flex align-items-center gap-2 flex-wrap">

            {/* nome */}
            <h2 className="mb-0 fw-bold">
              {profile.name} {profile.surname}
            </h2>

            {/* badge verifica */}
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill border-dashed fw-semibold"
            >
              <i className="bi bi-shield-check me-1"></i>

              Aggiungi badge di verifica
            </Button>
          </div>

          {/* titolo */}
          <p className="mb-2">
            {profile.title || '--'}
          </p>

          {/* area + contatti */}
          <p className="text-muted mb-4">
            {profile.area || 'Lamezia Terme, Calabria, Italia'}

            <span className="mx-1">·</span>

            <a
              href="#"
              className="fw-semibold text-decoration-none"
            >
              Informazioni di contatto
            </a>
          </p>

          {/* bottoni principali */}
          <div className="d-flex gap-2 flex-wrap">

            <Button
              variant="primary"
              className="rounded-pill fw-semibold"
            >
              Disponibile per
            </Button>

            <Button
              variant="outline-primary"
              className="rounded-pill fw-semibold"
            >
              Aggiungi sezione
            </Button>

            <Button
              variant="outline-primary"
              className="rounded-pill fw-semibold"
            >
              Migliora profilo
            </Button>

            <Button
              variant="outline-secondary"
              className="rounded-pill fw-semibold"
            >
              Risorse
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* ========================= */}
      {/* MODALE COPERTINA */}
      {/* ========================= */}

      <Modal
        show={showCoverModal}
        onHide={() => setShowCoverModal(false)}
        centered
        size="lg"
      >
        {/* header */}
        <Modal.Header closeButton>
          <Modal.Title>
            Aggiungi un’immagine di copertina
          </Modal.Title>
        </Modal.Header>

        {/* contenuto */}
        <Modal.Body>

          <p className="fw-bold mb-1">
            Carica la tua immagine
          </p>

          <p className="text-muted">
            Mostra la tua personalità,
            i tuoi interessi,
            il tuo lavoro o istantanee del tuo team
          </p>

          {/* upload dal pc */}
          <label className="btn btn-outline-secondary mb-4">
            Carica una sola foto

            <input
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleCoverUpload}
            />
          </label>

          <p className="fw-bold">
            Oppure scegli una copertina predefinita
          </p>

          {/* gallery immagini */}
          <div className="row g-3">

            {coverImages.map((image, index) => (
              <div
                className="col-6 col-md-3"
                key={index}
              >
                <img
                  src={image}
                  alt={`Copertina ${index + 1}`}
                  className="img-fluid rounded-3"
                  style={{
                    height: '90px',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer',

                    // bordo blu se selezionata
                    border:
                      coverImage === image
                        ? '3px solid #0d6efd'
                        : '1px solid #ddd',
                  }}

                  // selezione immagine
                  onClick={() => setCoverImage(image)}
                />
              </div>
            ))}
          </div>
        </Modal.Body>

        {/* footer */}
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

      {/* ========================= */}
      {/* MODALE MODIFICA PROFILO */}
      {/* ========================= */}

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        size="lg"
      >
        {/* header */}
        <Modal.Header closeButton>

          <Modal.Title>
            Modifica presentazione
          </Modal.Title>

        </Modal.Header>

        {/* contenuto */}
        <Modal.Body>
        
        {/* box premium finto */}
       <div className="border rounded-3 p-3 mb-4">
        <div className="d-flex justify-content-between align-items-start">
         <div>
          <p className="fw-bold mb-2">
            <span className="text-warning me-1">◆</span>
           Migliora il tuo profilo con Premium
          </p>

          <p className="small mb-2">
          Sposta in alto le sezioni del profilo che vuoi mettere in evidenza,
          aggiungi un pulsante personalizzato, sfrutta l’assistente di scrittura
          con IA e tanto altro.
          </p>

         <Button
          variant="warning"
          size="sm"
          className="rounded-pill fw-semibold"
         >
          Prova Premium per 0 €
         </Button>
        </div>

         <i className="bi bi-chevron-down"></i>
        </div>
       </div>

         <p className="small text-muted">
         * Indica che è obbligatorio
        </p>

        {/* informazioni base */}
          <h5 className="fw-bold mt-4">Informazioni di base</h5>

         <div className="mb-3">
         <label className="form-label">Nome*</label>
         <input
          type="text"
          className="form-control"
          defaultValue={profile.name}
         />
         </div>

         <div className="mb-3">
          <label className="form-label">Cognome*</label>
          <input
           type="text"
           className="form-control"
           defaultValue={profile.surname}
         />
         </div>

        <div className="mb-3">
         <label className="form-label">Sommario*</label>
         <textarea
         className="form-control"
         rows="3"
         defaultValue={profile.bio}
         ></textarea>
        </div>

          {/* posizione */}
          <h5 className="fw-bold mt-4">Posizione attuale</h5>

        <div className="mb-3">
         <label className="form-label">Titolo*</label>
         <input
         type="text"
         className="form-control"
         defaultValue={profile.title}
         />
        </div>

        <div className="mb-3">
         <label className="form-label">Settore*</label>
         <input
          type="text"
          className="form-control"
          placeholder="Es. Informatica, Marketing, Design..."
        />
       </div>

          {/* località */}
           <h5 className="fw-bold mt-4">Località</h5>

        <div className="mb-3">
         <label className="form-label">Paese/Area geografica*</label>
         <input
          type="text"
          className="form-control"
          defaultValue="Italia"
        />
        </div>

        <div className="mb-3">
         <label className="form-label">Città*</label>
         <input
          type="text"
          className="form-control"
          defaultValue={profile.area}
        />
       </div>

          {/* contatti */}
           <h5 className="fw-bold mt-4">Informazioni di contatto</h5>

           <p className="small">
             Aggiungi o modifica il tuo profilo URL, indirizzo email e altro.
           </p>

        <Button variant="link" className="p-0 fw-semibold text-decoration-none">
          Modifica le informazioni di contatto
        </Button>
       </Modal.Body>

        {/* footer */}
        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={() => setShowEditModal(false)}
          >
            Annulla
          </Button>

          <Button
            variant="primary"
            onClick={() => setShowEditModal(false)}
          >
            Salva
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

// esportiamo il componente
export default ProfileHero