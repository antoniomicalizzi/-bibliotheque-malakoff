import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import './Info.css';
import Faq from '../components/Faq';

function Info() {
  return (
    <div className='fond'>
      <Navigation />
      <h1 className='main-title'>Info</h1>
      <div className='noustrouver'>
        <div className='info-txt'>
        <h3> Heures d’ouverture au public en accès libre </h3>
        <ul>
          <li> Mardi 12h-13h et 16h-18h</li>
          <li>Mercredi 14h-18h30</li>
          <li> Jeudi et Vendredi 16h-18h</li>
          <li>Samedi 10h-12h</li>
        </ul>
        <h3>Entrée libre</h3>
        <p>
          {' '}
          Toute lecture ou consultation sur place est libre et gratuite, sans
          limitation de durée, aussi souvent que vous le souhaitez.
        </p>
        <h3> Transports</h3>
        <p>
          {' '}
          Se rendre à l’Espace Lecture en transport en commun avec le C3 et bus
          ligne 5 (lien du site de la TAN){' '}
        </p>
      </div>
      <div div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10840.075965940747!2d-1.5250113!3d47.2162107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30cd131e61341202!2sBiblioth%C3%A8que%20Espace%20Lecture!5e0!3m2!1sfr!2sfr!4v1625577461376!5m2!1sfr!2sfr'
          title='map'
          width='600'
          height='450'
          allowfullscreen=''
          loading='lazy'
        ></iframe>
        </div>
      <div className='faq'>
      <Faq />
      </div>
    </div>
  <div>
  <Footer />
 </div>  
 </div>
  );
}

export default Info;
