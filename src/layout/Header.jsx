import "./Header.css"
import  logo from "../assets/logoEL.png"
function Header() {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logo" />
      <div className="titre1">
       <h1>Espace Lecture</h1>
      </div>
      <div className="titre2">
        <h3>Bibliothèque Associative</h3>
      </div>
    </div>
  )
}

export default Header
