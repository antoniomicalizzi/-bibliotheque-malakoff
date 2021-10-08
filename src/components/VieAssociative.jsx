import { Slide } from 'react-slideshow-image' 
import img1 from '../assets/va-img1.png'
import img2 from '../assets/va-img2.png'
import img4 from '../assets/va-img4.png'


const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

function VieAssociative() {
  return (
      < div className="containerSlide">
        <h1> Vie associative </h1>
        <Slide {...proprietes}>
        <div className="each-slide">
            <div>
              <img src={img1} alt="img1" />
              <p><strong>Débord de Loire</strong> est une invitation à explorer toutes les facettes du fleuve.<br/> Un programme de découvertes – visites, portes ouvertes, ateliers, expositions – est proposé tout au long de l’événement, partout dans l’estuaire.<br/>  Cette manifestation se déroule tous les deux ans.<br/>  En 2019, le quartier Malakoff a participé lui aussi à cette belle fête.<br/>  Les acteurs du quartier ont proposé diverses animations (parcours photos, balades sur l'eau, ateliers peinture, plage éphémère, espace jeux, bal...).<br/> L'Espace Lecture s'est associé à ce temps fort en proposant en partenariat avec les «Éthern'elles » une lecture déambulatoire sur le thème de l'eau et du fleuve.</p>
            </div>
          </div>
          <div className="each-slide-small">
            <div>
              <img src={img2} alt="img2" />
              <p><strong>Fête du quartier </strong></p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img4} alt="img4" />
              <p><strong>Le Forum Associatif </strong> représente un temps fort des associations du quartier Saint Donatien / Malakoff / Dalby.<br/> Une cinquantaine d'associations (sportives, culturelles...) sont présentes chaque année.<br/> Vitrine de la dynamique associative, ce temps d’information auprès des habitants pour les activités de rentrée est un moment de partage et de convivialité.</p>
            </div>
          </div>
        </Slide>
        </div>
  )
}

export default VieAssociative