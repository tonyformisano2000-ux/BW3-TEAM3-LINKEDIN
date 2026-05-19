// importiamo componenti bootstrap
import { Modal, Button } from 'react-bootstrap'

// componente modale copertina
const CoverModal = ({
  // stato apertura modale
  show,

  // funzione chiusura modale
  onHide,

  // immagine attualmente selezionata
  coverImage,

  // funzione per aggiornare la cover
  setCoverImage,
}) => {

  // array immagini predefinite
  const coverImages = [

    // ufficio moderno
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',

    // setup computer
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',

    // team working
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',

    // workspace
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  ]

  // funzione upload copertina
  const handleCoverUpload = (e) => {

    // prendiamo il file selezionato
    const file = e.target.files[0]

    // se non esiste usciamo
    if (!file) return

    // creiamo URL temporaneo
    const imageUrl = URL.createObjectURL(file)

    // aggiorniamo immagine cover
    setCoverImage(imageUrl)
  }

  return (

    // modale bootstrap
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
    >

      {/* header modale */}
      <Modal.Header closeButton>

        {/* titolo */}
        <Modal.Title>
          Aggiungi un’immagine di copertina
        </Modal.Title>

      </Modal.Header>

      {/* contenuto */}
      <Modal.Body>

        {/* titolo sezione */}
        <p className="fw-bold mb-1">
          Carica la tua immagine
        </p>

        {/* descrizione */}
        <p className="text-muted">
          Mostra la tua personalità,
          i tuoi interessi,
          il tuo lavoro o istantanee del tuo team
        </p>

        {/* bottone upload da pc */}
        <label className="btn btn-outline-secondary mb-4">

          Carica una sola foto

          {/* input nascosto */}
          <input
            type="file"
            accept="image/*"
            className="d-none"
            onChange={handleCoverUpload}
          />

        </label>

        {/* titolo gallery */}
        <p className="fw-bold">
          Oppure scegli una copertina predefinita
        </p>

        {/* gallery immagini */}
        <div className="row g-3">

          {/* ciclo immagini */}
          {coverImages.map((image, index) => (

            <div
              className="col-6 col-md-3"
              key={index}
            >

              {/* immagine */}
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

        {/* annulla */}
        <Button
          variant="secondary"
          onClick={onHide}
        >
          Annulla
        </Button>

        {/* salva */}
        <Button
          variant="primary"
          onClick={onHide}
        >
          Salva
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

// esportiamo componente
export default CoverModal