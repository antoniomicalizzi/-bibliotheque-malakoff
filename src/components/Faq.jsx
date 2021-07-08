import React from 'react';
import Collapsible from 'react-collapsible';
import './Faq.css';

const Faq = () => {
  return (
    <>
      <Collapsible
        className='question'
        trigger="Comment je fais pour m'inscrire à la bibliothèque ?"
      >
        <p>
          La carte d'adhésion est de 3 euros et valable un an à compter du jour
          de l'inscription. La carte est nominative mais plusieurs personnes
          peuvent emprunter sur la même carte.
        </p>
        <p>
          La 3ème carte pour la même famille est gratuite. L'inscription à la
          bibliothèque permet d'emprunter 5 documents pour 3 semaines. Il n'y a
          pas besoin de documents nécessaires pour l'inscription.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger='Combien de documents je peux emprunter ?'
      >
        <p>
          Avec sa carte, chaque adhérent peut emprunter jusqu'à 5 documents.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger="Combien de temps je peux garder les documents que j'ai empruntés ?"
      >
        <p>La durée de prêt d'un document est de 3 semaines.</p>
        <p>
          Si le document n'est pas réservé par un autre abonné, une prolongation
          peut être demandée.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger='Est-ce que je peux emprunter des livres à l’Espace Lecture avec la carte de la Bibliothèque Municipale ?'
      >
        <p>
          Non, la bibliothèque Espace Lecture est associative. Il faut payer une
          adhésion annuelle de 3 euros pour emprunter des livres.
        </p>
        <p>
          La bibliothèque fait partie du réseau de Lecture publique de Nantes et
          travaille en partenariat avec la BM, mais est indépendante.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger='Comment réserver un document ?'
      >
        <p>Il existe plusieurs manières de réserver un document :</p>
        <p>
          Soit en vous rendant directement à la bibliothèque et de demander
          directement aux médiatrices du livre{' '}
        </p>
        <p>
          Soit en faisant une réservation par mail à l’adresse
          bibliotheque@espacelecture.fr ou par téléphone
        </p>
        <p>
          Soit via le blog, en cliquant sur le lien du catalogue en ligne, après
          avoir inséré votre identifiant (« 1ère lettre de votre prénom puis
          votre nom de famille, le tout en minuscules "sans espace") et le mdp «
          12345 » par défaut. Par soucis de sécurité, nous vous conseillons de
          changer le mot de passe dès votre première connexion.
        </p>
        <p>
          Lorsque le document que vous souhaitez emprunter est rapporté par
          l'emprunteur précédent, il est mis de côté pour vous à la
          Bibliothèque. Un courriel vous est envoyé pour vous avertir de sa
          disponibilité.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger='Est-il possible de rendre les documents empruntés dans une autre bibliothèque ?'
      >
        <p>
          Les documents empruntés à l’Espace Lecture doivent être rapportés à
          l’Espace Lecture pendant les heures d’ouverture. Les documents
          empruntés dans une des bibliothèques municipales doivent être rendus
          dans une des bibliothèques municipales.
        </p>
      </Collapsible>
      <Collapsible
        className='question'
        trigger='Est-ce que les ateliers proposés pendant les vacances ne sont adressés qu’aux adhérents ?'
      >
        <p>
          Nos ateliers sont proposés en priorité aux adhérents de la
          bibliothèque, mais également aux habitants du quartier non-adhérents.
        </p>
      </Collapsible>
    </>
  );
};
export default Faq;
