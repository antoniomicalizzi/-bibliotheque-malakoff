import { Slide } from 'react-slideshow-image' 
import img1 from '../assets/ac-img1.png'
import img2 from '../assets/ac-img2.png'
import img3 from '../assets/ac-img3.png'
import img4 from '../assets/ac-img4.png'
import img5 from '../assets/ac-img5.png'
import img6 from '../assets/ac-img6.png'
import img7 from '../assets/ac-img7.png'
import img8 from '../assets/ac-img8.png'
import img9 from '../assets/ac-img9.png'
import img10 from '../assets/ac-img10.png'
import img11 from '../assets/ac-img11.png'
import img12 from '../assets/ac-img12.png'
import img13 from '../assets/ac-img13.png'
import img14 from '../assets/ac-img14.png'
import img15 from '../assets/ac-img15.png'
import img16 from '../assets/ac-img16.png'
import img17 from '../assets/ac-img17.png'
import img18 from '../assets/ac-img18.png'
import img19 from '../assets/ac-img19.png'
import img20 from '../assets/ac-img20.png'
import img21 from '../assets/ac-img21.png'
import img22 from '../assets/ac-img22.png'
import img23 from '../assets/ac-img23.png'
import img24 from '../assets/ac-img24.png'
import img25 from '../assets/ac-img25.png'
import img26 from '../assets/ac-img26.png'
import img27 from '../assets/ac-img27.png'
import img28 from '../assets/ac-img28.png'


const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

function AnimationCulturelles() {
  return (
      < div className="containerSlide">
        <h1> Animations culturelles </h1>
        <Slide {...proprietes}>
        <div className="each-slide">
            <div>
              <img src={img1} alt="img1" />
              <p>Accueil des écoles maternelles et élémentaires du quartier. Ce temps d’accueil s’articule autour d’un temps de lecture et d’un temps libre de découverte des livres de la bibliothèque</p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img2} alt="img2" />
              <p>Accueil P’tits Loups. L’Espace lecture accueille une fois par mois, en partenariat avec la Bibliothèque Municipale de Nantes, les enfants de 0-3 ans pour une action de sensibilisation aux livres et à la bibliothèque</p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img3} alt="img3" />
              <p>Croq’Minots Animations de contes et comptines pour tout-petits qui allient la musique et la lecture, en partenariat avec la ludothèque de l’ACCOORD. La plupart des enfants présents sont des enfants qui viennent avec une assistante maternelle ou avec le Multi-accueil de Malakoff, mais aussi parfois accompagnés d'un parent ou grand-parent</p>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img4} alt="img4" />
              <p>Lectures à la PMI (Protection Maternelle et Infantile). Depuis 2016, l'Espace Lecture anime des séances de lecture et de sensibilisation aux livres au sein de la salle d'attente de la PMI de Malakoff. Ces lectures ont lieu une fois par mois, les jours de consultation du médecin</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img5} alt="img5" />
              <p>Lecture avec le Multi-Accueil. Depuis 2001, l’Espace Lecture anime des lectures au Multi-accueil de Malakoff auprès d’enfants tout-petits et jusqu’à 3 ans</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img6} alt="img6" />
              <p>Ateliers vacances. A chaque vacances scolaires, la bibliothèque propose tous les mardis et jeudis des animations pour les enfants et, plus largement , pour les familles.  Ces animations, toujours en lien avec le livre, se déclinent en 3 catégories:
ateliers créatifs, sorties culturelles et ateliers animés par des intervenants professionnels
</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img7} alt="img7" />
              <p>Ateliers vacances</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img8} alt="img8" />
              <p>Ateliers vacances</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img9} alt="img9" />
              <p>Ateliers vacances</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img10} alt="img10" />
              <p>Le Festival Atlantide est une manifestation culturelle de la Ville de Nantes qui réunit chaque année durant quatre jours des auteurs nationaux et internationaux, qui viennent à Nantes partager leurs points de vue littéraires sur les grands enjeux contemporains dans des conférences, des rencontres, des lectures. Cette année, Espace Lecture a accueilli deux auteurs : Ousmane Diarra et Sophie Adriansen, autours des œuvres La route des clameurs (Gallimard, 2014) et Papa est en bas (Nathan, 2018)</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img11} alt="img11" />
              <p>Ousmane Diarra</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img12} alt="img12" />
              <p>Bibliothèque de rue. Le principe de la bibliothèque de rue est simple: des lecteurs bénévoles s’installent en extérieur sur des couvertures avec des caisses de livres et lisent aux enfants qui viennent lire et écouter des histoires. La bibliothèque de rue permet de découvrir, dans un cadre moins attendu, le plaisir des livres et de la lecture. Depuis 1999, chaque mercredi de 15h30 à 16h30 l'Espace Lecture invite les enfants et parents à s'installer sur l’aire de jeux rue de Chypre à Malakoff. </p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img13} alt="img13" />
              <p>Bourse aux livres solidaire. Suite à l'incendie de la bibliothèque en juillet 2018, l'Espace Lecture a organisé une bourse aux livres solidaire en partenariat avec les magasins Cultura.Installée sur le parvis de la rue d'Irlande, dans le quartier Malakoff, la bourse aux livres a attiré de nombreux visiteurs qui ont pu trouver des romans, polars, documentaires , BD, albums jeunesse... il y en avait pour tous les goûts ! Des ateliers créatifs gratuits ont même été proposés tout l'après-midi par des animateurs des magasins Cultura.</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img14} alt="img14" />
              <p>Bourse aux livres solidaire</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img15} alt="img15" />
              <p>Le projet “Nous sommes livres” est né en 2014 d’une rencontre entre les éditions MeMo et la bibliothèque Espace Lecture. Replacer le livre au cœur des familles dès la petite enfance est l’idée forte du projet “nous sommes livres”, afin de sensibiliser à la lecture dès le plus jeune âge.</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img16} alt="img16" />
              <p>Ce projet réunit un acteur nantais de l’économie du livre (les éditions Memo), des habitants du quartier, bénévoles et salariées au sein de l’Espace Lecture et les enseignants des écoles, et les groupes d’adultes en apprentissage du français avec l’Accoord, tous largement motivés par l’envie de rendre accessible le livre là où il ne l’est pas.</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img17} alt="img17" />
              <p>C’est bien en fréquentant différents univers littéraires qu’on entre dans la lecture et cheminer ensemble en littérature, c’est construire petit à petit son projet de lecture. Ce projet annuel au départ qui est devenu bisannuel depuis 2019, s’articule à chaque édition autour d’albums d’un auteur/illustrateur édité par MeMo.</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img18} alt="img18" />
              <p>Invitation des autrices/illustratrices: Anne Bertier en 2016, Junko Nakamura en 2017, Emilie Vast en 2019,Claire Garralon en 2021</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img19} alt="img19" />
              <p>Nous sommes livres</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img20} alt="img20" />
              <p>Nous sommes livres</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img21} alt="img21" />
              <p>Suite à la sous-occupation des appartements « Domicile service », en juin 2017, la Mutualité Retraite qui les gère a annoncé sa décision de rendre la totalité des appartements au bailleur. Cela a automatiquement entraîné la fermeture du service d'animation-culturelle au sein de la résidence. La Ville de Nantes a donc proposé pendant un an d'expérimenter des actions en direction des personnes âgées isolées du quartier (½ journée par semaine sur 52 	semaines).</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img22} alt="img22" />
              <p>Le public concerné par ce projet n'est pas le public qui fréquente habituellement la Maison des Haubans. Il s'adresse aux personnes âgées isolées de + de 65 ans, avec des niveaux d'autonomie divers, qui sont soit logées en foyers bleus, soit bénéficiaires du portage de repas à domicile, ou qui ont une télé alarme...	L'Espace Lecture a donc commencé cette action en octobre 2017, en proposant diverses animations (mots mêlés, lectures, échanges sur une thématique...)</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img23} alt="img23" />
              <p>Régulièrement, avec différents partenaires de la vie culturelle nantaise, la bibliothèque accueille des auteur.e.s Anne Crausaz, 2014 (en partenariat avec le Centre ressource ville)</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img24} alt="img24" />
              <p>Régulièrement, avec différents partenaires de la vie culturelle nantaise, la bibliothèque accueille des auteur.e.s Aude Maurel</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img25} alt="img25" />
              <p>Régulièrement, avec différents partenaires de la vie culturelle nantaise, la bibliothèque accueille des auteur.e.s Charles Dutertre, 2011 et 2019</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img26} alt="img26" />
              <p>Régulièrement, avec différents partenaires de la vie culturelle nantaise, la bibliothèque accueille des auteur.e.s Malika Doray, 2016</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img27} alt="img27" />
              <p>Régulièrement, avec différents partenaires de la vie culturelle nantaise, la bibliothèque accueille des auteur.e.s Richard Marnier</p>
            </div>
          </div>
          <div div className="each-slide">
            <div>
              <img src={img28} alt="img28" />
              <p>A travers des lectures de textes, Marie-Jo Coulon et Pascale Pautrat nous parlent, à leur manière et de façon originale, de différents auteurs </p>
            </div>
          </div>
          
        </Slide>
        </div>
  )
}

export default AnimationCulturelles
