import "./Header.css"
import  logo from "../assets/logoEL-ConvertImage.png"


function Header() {
  return (
    <>
    <div className="header">
        
         <img className="logo1" src={logo} alt="logo" />
      
         <h2 className="titre1">BIBLIOTHEQUE ASSOCIATIVE ESPACE LECTURE</h2>
       
         <a className='blog' href='https://espacelecture.fr/' target='_blank' rel='noreferrer'>
        Blog
      </a>
    
    
     
   
    </div>
   
   </>
  )
}

export default Header
