import "./Header.css"
import  logo from "../assets/logoEL.png"
function Header() {
  return (
    <div className="header">
        <img className="logo1" src={logo} alt="logo" />
      <div className="titre1">
       <h1>Espace Lecture</h1>
        <h3 className="titre2">BIBLIOTHEQUE ASSOCIATIVE</h3>
      </div>
    </div>
  )
}

export default Header
