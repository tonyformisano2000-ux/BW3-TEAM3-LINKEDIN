// importiamo useEffect per eseguire il fetch al caricamento della pagina
import { useEffect } from 'react'

// importiamo gli hook di Redux
import { useDispatch, useSelector } from 'react-redux'

// importiamo la funzione che recupera il profilo
import { getMyProfile } from '../../redux/Actions'

const ProfilePage = () => {
  // dispatch serve per inviare azioni a Redux
  const dispatch = useDispatch()

  // recuperiamo i dati dal Redux store
  const profile = useSelector((state) => state.profile)

  // stato loading
  const loading = useSelector((state) => state.loading)

  // eventuali errori
  const error = useSelector((state) => state.error)

  // useEffect parte al caricamento della pagina
  useEffect(() => {
    // richiamiamo il fetch del profilo
    dispatch(getMyProfile())
  }, [dispatch])

  // se sta caricando
  if (loading) return <p>Caricamento profilo...</p>

  // se c'è un errore
  if (error) return <p>Errore: {error}</p>

  // se non esiste ancora il profilo
  if (!profile) return <p>Nessun profilo trovato</p>

  return (
    <main>
      {/* nome e cognome */}
      <h1>
        {profile.name} {profile.surname}
      </h1>

      {/* titolo lavorativo */}
      <p>{profile.title}</p>

      {/* città/zona */}
      <p>{profile.area}</p>

      {/* bio */}
      <p>{profile.bio}</p>

      {/* immagine profilo */}
      <img
        src={profile.image}
        alt={`${profile.name} ${profile.surname}`}
      />
    </main>
  )
}

// esportiamo il componente
export default ProfilePage