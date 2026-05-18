// importiamo useState per gestire stati locali del componente
import { useState } from 'react'

// importiamo componenti di React Bootstrap
import { Button, Card, Modal } from 'react-bootstrap'

// componente hero principale del profilo
const ProfileHero = ({ profile }) => {

  // stato che servirà per aprire/chiudere la modale della copertina
  const [showCoverModal, setShowCoverModal] = useState(false)

  // copertina attualmente mostrata
const [coverImage, setCoverImage] = useState(null)

// immagini predefinite
const coverImages = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
]

// funzione per caricare una foto dal PC
const handleCoverUpload = (e) => {
  const file = e.target.files[0]

  if (!file) return

  const imageUrl = URL.createObjectURL(file)

  setCoverImage(imageUrl)
}

  return (
    <>
    {/* card principale */}
    <Card className="overflow-hidden rounded-4">

      {/* banner/copertina superiore */}
      <div
        className="bg-secondary position-relative"
        style={{ height: '180px' }}
      >

        {/* bottone fotocamera */}
        <Button
          variant="light"
          size="sm"

          // bottone tondo
          className="rounded-circle position-absolute top-0 end-0 m-3"

          // apre la futura modale
          onClick={() => setShowCoverModal(true)}
        >
          {/* icona bootstrap */}
          <i className="bi bi-camera-fill"></i>
        </Button>
      </div>

      {/* corpo della card */}
      <Card.Body className="position-relative pt-5">

        {/* immagine profilo */}
        <img
          src={profile.image}
          alt={`${profile.name} ${profile.surname}`}
          className="rounded-circle border border-4 border-white position-absolute"
          style={{
            width: '140px',
            height: '140px',

            // evita deformazioni
            objectFit: 'cover',

            // posizione sopra la copertina
            top: '-90px',
            left: '24px',
          }}
        />

        {/* nome e cognome */}
        <h2 className="mb-0">
          {profile.name} {profile.surname}
        </h2>

        {/* titolo lavorativo */}
        <p className="mb-1">
          {profile.title}
        </p>

        {/* località */}
        <p className="text-muted mb-3">
          {profile.area}
        </p>

        {/* contenitore bottoni */}
        <div className="d-flex gap-2 flex-wrap">

          {/* bottone principale */}
          <Button
            variant="primary"
            className="rounded-pill"
          >
            Disponibile per
          </Button>

          {/* bottone secondario */}
          <Button
            variant="outline-primary"
            className="rounded-pill"
          >
            Aggiungi sezione del profilo
          </Button>

          {/* bottone altro */}
          <Button
            variant="outline-secondary"
            className="rounded-pill"
          >
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
               Mostra la tua personalità, i tuoi interessi,
               il tuo lavoro o istantanee del tuo team
            </p>

           <Button variant="outline-secondary">
             Carica una sola foto
           </Button>
          </Modal.Body>
        </Modal>
       </>
  )
}

// esportiamo il componente
export default ProfileHero