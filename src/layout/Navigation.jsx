import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <nav>
        <ul className="navigation">
          <li>
            <Link className="link" to='/'>ACCUEIL</Link>
          </li>
          <li>
            <Link className="link" to='/association'>QUI SOMMES-NOUS ?</Link>
          </li>
          <li>
            <Link className="link" to='/info'>INFOS PRATIQUES</Link>
          </li>
          <li>
            <Link className="link" to='/archives'>ARCHIVES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
