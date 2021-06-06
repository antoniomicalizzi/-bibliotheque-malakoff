import "./Header.css"
import  logo from "../assets/logoEL.jpg"
function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <h1>Espace Lecture</h1>
      <h1>Bibliothèque Associative</h1>
    </div>
  )
}

export default Header
