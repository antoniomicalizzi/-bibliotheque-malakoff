import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
import './Presentation.css';
import image1 from '../assets/image1asso.png';
import image2 from '../assets/image2asso.png';
import image3 from '../assets/image3asso.png';

function Presentation() {
  return (
    <div className='fondasso'>
      <Navigation />
      <h1 className="main-title">L'association</h1>
    <div className='container'>
      <div className='paragraph'>
        <img className='photo1'src={image1} alt='test' />
        <div className='text-paragraph'>
        <h2>Historique</h2>
          <p>
            Née en 1992 de l'initiative d'un couple d'habitants, puis mise en
            sommeil de 1995 à 1997, la bibliothèque est reprise par une équipe de
            militants associatifs du quartier fin 1997.{' '}
            <br/>
            Installée à l'origine dans le CDI du collège, elle a déménagé en 1999
            dans un local en bas de tour, rue d'Irlande.{' '}
            <br/>
            La bibliothèque, jusque-là gérée entièrement par des bénévoles, embauche
            dès 2000 sa première salariée ; les bénévoles restent très impliqués
            dans le projet associatif et l'animation d'activités.
            <br/>
            Lors de l'ouverture de la Maison des Haubans en 2011, la bibliothèque
            intègre la maison de quartier de Malakoff, passant d'un local de 32m2 à
            un espace de 120m2. Ce nouvel espace permet d'accueillir le public dans
            de meilleures conditions, mais surtout d'enrichir l'offre documentaire
            en doublant les collections.
            <br/>
            En 2018, suite à l'incendie de la bibliothèque, cette dernière retrouve
            temporairement le petit local de la rue d'Irlande, se reconstruisant
            petit à petit.
            <br/>
            Depuis octobre 2020, l'Espace Lecture est relogé dans un espace spacieux
            au 3-5 rue d'Autriche, dans l'attente du retour à la Maison des Haubans
            en fin d'année 2023.{' '}
          </p>
          </div>
      </div>
      <div className='paragraph'>
      <img className='photo'src={image2} alt='test' />
      <div className='text-paragraph'>
      <h2>L'équipe</h2>
        <p>
          L'équipe de la bibliothèque est constituée d'une douzaine de bénévoles
          coordonnés par les deux médiatrices du livre.
          <br/>
          Les bénévoles participent conjointement, avec les salariées, à la vie de
          l'association et aident à l'accueil du public, au traitement des livres
          et aux animations (bibliothèque de rue, projets culturels, bourses aux
          livres...).
        </p>
      </div>

      
      
      </div>
      <div className='paragraph'>
      <img className='photo3'src={image3} alt='test' />
        <div className='text-paragraph'>
          <h2>Les partenariats</h2>
        <p>
          Pour mener à bien ses projets, l'Espace Lecture développe des
          partenariats aussi bien associatifs que institutionnels. L'association
          est conventionnée avec la Ville de Nantes. A ce titre, elles ont un
          partenariat privilégié autant en terme financier, qu'en terme de
          développement d'actions sur le quartier de Malakoff et, plus largement,
          sur la ville.
          <br/>
          Au niveau du quartier, la bibliothèque travaille régulièrement en
          partenariat avec différentes associations du quartier, selon les actions
          (l'Accoord pour l'activité "Croq'Minots", la Clé des couleurs pour
          l'animation d'ateliers sur différents projets...), mais également plus
          ponctuellement avec d'autres acteurs culturels (l'association Couleurs,
          le Théâtre clandestin, l'association Les Erthern'elles… ). La
          bibliothèque développe aussi des partenariats institutionnels locaux
          avec les crèches, écoles, le collège et la PMI du quartier.
          <br/>
          A l'échelle de la ville, les collaborations sont également étendues. La
          bibliothèque est partenaire de différents prix littéraires : le prix du
          roman et le prix BD avec Cezam (réseau des comités d'entreprises de
          l'agglomération nantaise), les prix Mini-Bulles et Maxi-Bulles avec les
          3 autres bibliothèques associatives nantaises, le pix Bermond-Boquié
          avec la Bibliothèque Municipale de Nantes.
          <br/>
          La bibliothèque travaille également en lien avec d'autres acteurs
          culturels nantais, notamment avec les éditions MeMo, sur le projet
          bisannuel "Nous sommes livres", le Lieu Unique (Festival Atlantide) ou
          encore Nantes Livres Jeunes (rencontres d'auteurs).
          <br/>
          Le partenariat peut parfois n'être que d'ordre financier, notamment sur
          des projets thématiques (DRAC, CGET, Fondation SNCF, Fondation du Crédit
          Mutuel).
        </p>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Presentation;
