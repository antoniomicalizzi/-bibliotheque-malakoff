import affiche from '../assets/affiche.jpg'
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <img className="affiche" src={affiche} alt="affiche" />
    </div>
  )
}

export default Footer
