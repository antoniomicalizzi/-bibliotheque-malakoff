import { Slide } from 'react-slideshow-image' 
import img1 from '../assets/pl-img1.png'
import img2 from '../assets/pl-img2.png'
import img3 from '../assets/pl-img3.png'
import img5 from '../assets/pl-img5.png'


const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

function PrixLitteraire() {
  return (
      < div className="containerSlide">
        <h1> Prix Littéraires </h1>
        <Slide {...proprietes}>
        <div className="each-slide">
            <div>
              <img src={img1} alt="img1" />
              <p>Le <strong>prix Bermond-Boquié </strong>est le prix littéraire pour la jeunesse créé par la Bibliothèque Municipale de Nantes.<br/> Chaque année, un jury composé de bibliothécaires, médiatrices du livre, libraire sélectionnent 4 à 5 romans pour les 9-12 ans.<br/> Tous les ans, de jeunes lecteurs participent à ce prix d’octobre à février et votent pour leur roman préféré.<br/> La fin du prix est marqué par le festival Atlantide au cours duquel les auteurs des romans en lice sont invités.<br/> En tant que partenaire, l’Espace Lecture participe à ce prix depuis 2019. <br/>Tous les ans, plusieurs lecteurs s’inscrivent à ce prix et certains sont impliqués dans le festival Atlantide.</p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img2} alt="img2" />
              <p>Depuis 1997 l’association des comités d’entreprise <strong>Cezam</strong> Pays de la Loire propose à ses membres, ainsi qu’aux bibliothèques et lycées associés, de décerner un prix parmi une sélection de 10 romans publiés par des petites ou moyennes maisons d’édition.<br/> Depuis 2001, l’Espace Lecture est partenaire de ce prix.<br/> Chaque année, des rencontres sont organisées avec les auteurs en lice.<br/> En 2010, l’Acener (Association des Comités d’Entreprise de Nantes et sa Région) - aujourd’hui Cezam - a mis en place un prix BD.<br/> Le principe est simple : lire d’octobre à juin et noter les 9 bandes dessinées en sélection.<br/> L’Espace Lecture est partenaire de ce prix depuis 2010.</p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img3} alt="img3" />
              <p>En 2013, les 4 bibliothèques associatives (Lire, Expression-Livres, 1001 pages et l’Espace lecture) ont mis en place un prix BD jeunesse pour les 9-12 ans, à l’instar de celui proposé aux adultes, le <strong>prix Mini bulles</strong>.<br/> Puis, 2 ans après, ce prix a été étendu aux élèves de collèges avec le <strong>prix Maxi bulles</strong> (12-15 ans).<br/> Les médiatrices du livre sélectionnent dix BD pour chacune de ces tranches d’âge.<br/> L’objectif de ce prix étant d’ouvrir les jeunes à ce 9ème Art tant par la diversité des thématiques, que par la diversité esthétique des formats proposés.</p>
            </div>
          </div>
          <div div className="each-slide-small">
            <div>
              <img src={img5} alt="img5" />
              <p><strong>Le prix Mini et Maxi Bulles</strong></p>
            </div>
          </div>
        </Slide>
        </div>
  )
}

export default PrixLitteraire