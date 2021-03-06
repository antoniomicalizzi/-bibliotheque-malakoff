import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
import AnimationCulturelles from '../components/AnimationCulturelles';
import VieAssociative from '../components/VieAssociative';
import PrixLitteraire from '../components/PrixLitteraire';

import './Archives.css';

function Archives() {
  return (
    <><><div className="fondarchive">
      <Navigation />
      <h1 className='main-title'>Archives</h1>
      <div className="carrousel">
      <VieAssociative />
      <PrixLitteraire />
      <AnimationCulturelles />
      </div>
    </div>
    </><Footer /></>
  

  );
}

export default Archives
