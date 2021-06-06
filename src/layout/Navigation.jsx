import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/association'>Qui sommes-nous</Link>
          </li>
          <li>
            <Link to='/projets'>Archives</Link>
          </li>
          <li>
            <Link to='/info'>Info pratiques</Link>
          </li>
          <li>
            <Link to='/vieasso'>???</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
