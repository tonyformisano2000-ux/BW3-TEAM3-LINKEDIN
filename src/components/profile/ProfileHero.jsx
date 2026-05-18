// importiamo componenti di React Bootstrap
import { Button, Card } from 'react-bootstrap'

// componente hero principale del profilo
const ProfileHero = ({ profile }) => {
  return (
    // card principale
    <Card className="overflow-hidden rounded-4">
      
      {/* banner/copertina superiore */}
      <div
        className="bg-secondary"
        style={{ height: '180px' }}
      ></div>

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

            // evita che l'immagine si deformi
            objectFit: 'cover',

            // posizione sovrapposta al banner
            top: '-90px',
            left: '24px',
          }}
        />

        {/* nome e cognome */}
        <h2 className="mb-0">
          {profile.name} {profile.surname}
        </h2>

        {/* titolo lavorativo */}
        <p className="mb-1">{profile.title}</p>

        {/* zona/località */}
        <p className="text-muted mb-3">
          {profile.area}
        </p>

        {/* bottoni */}
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
  )
}

// esportiamo il componente
export default ProfileHero