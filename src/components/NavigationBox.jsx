import './NavigationBox.css';
import { Link } from 'react-router-dom';

function NavigationBox() {
  return (
    <div>
      <nav>
        <ul className='navigation-box'>
          <li>
            <Link className='link-box' to='/association'>
              QUI SOMMES-NOUS
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/info'>
              INFOS PRATIQUES
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/archives'>
              ARCHIVES
            </Link>
          </li>
          <li>
            <Link className='link-box' to='/catalogue'>
              CATALOGUE
            </Link>
          </li>
        </ul>
        <div className='blog'>
          <a href='https://espacelecture.fr/' target='_blank' rel='noreferrer'>
            BLOG
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBox;
