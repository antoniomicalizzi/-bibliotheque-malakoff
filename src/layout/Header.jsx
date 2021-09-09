import "./Header.css"
import  logo from "../assets/logoEL.png"


function Header() {
  return (
    <div className="header">
        <img className="logo1" src={logo} alt="logo" />
      <div className="titre1">
        <h2>BIBLIOTHEQUE ASSOCIATIVE ESPACE LECTURE</h2>
      </div>
    </div>
  )
}

export default Header
