import { Modal, Button } from 'react-bootstrap'

const CoverModal = ({
  show,

  onHide,

  coverImage,

  setCoverImage,
}) => {

  const coverImages = [

    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',

    
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  ]

  const handleCoverUpload = (e) => {

    const file = e.target.files[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setCoverImage(imageUrl)
  }

  return (

    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
    >

      <Modal.Header closeButton>

        <Modal.Title>
          Add a cover image
        </Modal.Title>

      </Modal.Header>

      <Modal.Body>

        <p className="fw-bold mb-1">
          Upload your image
        </p>

        <p className="text-muted">
          Show your personality,
          your interests,
          your work or snapshots of your team
        </p>

        <label className="btn btn-outline-secondary mb-4">

          Upload a photo

          <input
            type="file"
            accept="image/*"
            className="d-none"
            onChange={handleCoverUpload}
          />

        </label>

        <p className="fw-bold">
          Or choose a default cover
        </p>

        <div className="row g-3">

          {coverImages.map((image, index) => (

            <div
              className="col-6 col-md-3"
              key={index}
            >

              <img
                src={image}
                alt={`Cover ${index + 1}`}
                className="img-fluid rounded-3"

                style={{
                  height: '90px',
                  width: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',

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

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={onHide}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={onHide}
        >
          Save
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

export default CoverModal