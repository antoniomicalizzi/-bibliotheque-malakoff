import { Link } from 'react-router-dom';
import './Navigation.css';
import  logo from "../assets/logoEL.jpg"
function Navigation() {
  return (
    <div>
      <nav>
        <ul className="navigation">
        <img className="logo" src={logo} alt="logo" />
          <li>
            <Link className="link" to='/'>Homepage</Link>
          </li>
          <li>
            <Link className="link" to='/association'>Qui sommes-nous</Link>
          </li>
          <li>
            <Link className="link" to='/info'>Info pratiques</Link>
          </li>
          <li>
            <Link className="link" to='/projets'>Archives</Link>
          </li>
          <li>
            <Link className="link" to='/vieasso'>Vie associative</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
