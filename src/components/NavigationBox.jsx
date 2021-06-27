import './NavigationBox.css';
import { Link } from 'react-router-dom';

function NavigationBox() {
  return (
    <div>
      <nav>
        <ul className='navigation-box'>
          <li>
            <Link className="link-box" to='/association'>Qui sommes-nous</Link>
          </li>
          <li>
            <Link className="link-box" to='/info'>Info pratiques</Link>
          </li>
          <li>
            <Link className="link-box" to='/projets'>Archives</Link>
          </li>
          <li>
            <Link className="link-box" to='/projets'>Catalogue</Link>
          </li>
        </ul>
      <div className='blog'>
        <Link  className="link-box" to='/projets'>Blog</Link>
      </div>
      </nav>
    </div>
  );
}

export default NavigationBox;
