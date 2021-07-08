import './Footer.css';
import logo from '../assets/Nantes_logo.png';

function Footer() {
  return (
  <div className="footer">
    <div className="espace">
     <h1>Espace Lecture</h1>
     <p>3-5 rue d’Autriche – 44000 Nantes<br />tél. 07 49 50 75 48 <br />mail bibliotheque@espacelecture.fr</p>
    </div>
    <div className="logo">
      <p>en collaboration avec</p>
      <img className="logo-ville" src={logo} alt="logo-ville" />
    </div>
  </div>
  )
}

export default Footer
