import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oups! Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>

      
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  )
}

export default ErrorPage
