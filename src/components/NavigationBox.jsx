import './NavigationBox.css';
import { Link } from 'react-router-dom';

function NavigationBox() {
  return (
    <div>
      <nav>
        <ul className='navigation-box'>
          <li>
            <Link className='link-box' to='/association'>
              Qui sommes-nous
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/info'>
              Infos pratiques
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/projets'>
              Archives
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/projets'>
              Catalogue
            </Link>
          </li>
        </ul>
        <div className='blog'>
          <a href='https://espacelecture.fr/' target='_blank' rel='noreferrer'>
            Blog
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBox;
