import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NavigationBox from '../components/NavigationBox';
import './LandingPage.css';


function LandingPage() {
  return (
    <div>
      <div className="fond">
      <Header />
        <NavigationBox />
          <div className="edito">
            <h2>L’Espace Lecture, bibliothèque associative nantaise
            </h2>
            <p>Située au sein du quartier Malakoff, l’Espace Lecture est une des quatre bibliothèques associatives conventionnées par la ville de Nantes. Elle contribue à favoriser l’intérêt et le goût pour la lecture au plus près du public.</p>
            <h3>Lieu de rencontre et de culture
            </h3>
            <p>Elle rassemble des populations d’âges et de milieux sociaux différents. Consciente de son rôle éducatif et social, elle développe des animations culturelles en lien avec la lecture à l’attention d’un public de tous âges et de toutes origines. Grâce à son rôle fédérateur, elle tend à respecter les différences et à mettre en valeur les richesses de chacun. 
            Dans le même esprit, elle participe à l’opération « Facile à lire » et anime une bibliothèque de rue. 
            Tout au long de l’année scolaire, l’Espace Lecture accompagne aussi des classes dans leurs projets pédagogiques. Persuadée comme Flore Vasseur que ”un enfant qui lit sera un adulte qui pense”, elle porte un intérêt particulier aux plus jeunes voire même aux tout-petits par ses interventions au sein de la PMI, de la crèche et en recevant les classes maternelles du quartier.
            </p>
            <h3>Lieu de convivialité et de richesse</h3>
            <p>Grâce à Nathalie et Sandrine, médiatrices du livre qui coordonnent une équipe de 10 bénévoles, cet espace bibliothèque est un endroit  accueillant et chaleureux. Il offre au public des ouvrages diversifiés sélectionnés par leur soin et des conseils très personnalisés. Il permet à ses lecteurs petits et grands d’évoluer et de s’enrichir en participant par exemple à différents prix en fonction de leur niveau et de leur goût. Plus qu’une bibliothèque, l’Espace Lecture est un lieu de vie et de rencontre où se croisent des gens tous animés par une même pensée: toute lecture est un enrichissement.

            « La lecture est importante. Si vous savez lire, alors le monde s’offre à vous. »
            Barack Obama
            </p>
            <h3>
            Lieu de médiation culturelle
            </h3>
            <p>L’Espace Lecture donne également à ses lecteurs la possibilité de participer à différents prix littéraires. Elle accueille des rencontres d’auteurs, participe aux projets du quartier et de la ville et tisse des liens avec de nombreux partenaires.</p>
            <h3>Lieu d’espoir et de solidarité
            </h3>
            <p>Le 5 juillet 2018, la bibliothèque associative Espace Lecture avait entièrement brûlé, à la Maison des Haubans, suite aux émeutes urbaines. Ses 13 000 ouvrages étaient partis en fumée. Grâce à un énorme élan de solidarité venu de toute part, Région, Ville, éditeurs, auteurs, particuliers, l’équipe a pu reconstituer un fonds, récupérer des meubles et un lieu qui lui ont permis de repartir sur de nouvelles bases. 
            Actuellement située au 3/5 rue d’Autriche, elle retournera dans la Maison des Haubans une fois sa restauration terminée. 
            </p>
            <p>Juin 2021
            BAILHACHE Catherine
            Présidente de l’Espace Lecture,
            Bibliothèque associative nantaise
            </p>
          </div>
          <Footer />
          </div> 
    </div>
  );
}

export default LandingPage;
