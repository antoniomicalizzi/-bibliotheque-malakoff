import "./Header.css"
import  logo from "../assets/logoEL-ConvertImage.png"


function Header() {
  return (
    <>
    <div className="header">
        <img className="logo1" src={logo} alt="logo" />
      <div className="titre1">
        <h2>BIBLIOTHEQUE ASSOCIATIVE ESPACE LECTURE</h2>
      </div>
      <div className='blog'>
     <a href='https://espacelecture.fr/' target='_blank' rel='noreferrer'>
       Blog
     </a>
   </div>
  </div>
   
   </>
  )
}

export default Header
