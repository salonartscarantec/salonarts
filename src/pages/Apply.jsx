import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMailBulk, faPrint } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "components/layout/Sidebar";
import { faEuroSign, faHandsHelping, faInfoCircle, faMoneyCheckAlt, faPalette, faPeopleCarry, faStar, faTasks } from '@fortawesome/free-solid-svg-icons';

const Apply = () => {
  const { t } = useTranslation();
  const REACT_APP_PRICE = process.env.REACT_APP_PRICE;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
    
  return (
    <section className='Apply'>
      <h1 className="titlecustom text-center">{t("registertitle")}</h1>
      <Row className="inlinelist">
        <Col xs={12} md={12}>
          <ol className="horizontal-list">
            <li className="horizontal-list-item">
              <FontAwesomeIcon icon={faPrint} size="2x" className="listicon"/> Remplir le formulaire et le sauvegarder
            </li>
            <li className="horizontal-list-item">
              <FontAwesomeIcon icon={faMailBulk} size="2x" className="listicon"/> Envoyer le formulaire par la poste avec un chèque de {REACT_APP_PRICE} pour les frais d'inscriptions et des photos de vos oeuvres par email
            </li>
            <li className="horizontal-list-item">
              <FontAwesomeIcon icon={faClock} size="2x" className="listicon"/> Attendre la réponse
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="inlinebutton">
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownload">
            {t("linkregisterdownload")}
            {t("painting")}
          </Link>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownload">
            {t("linkregisterdownload")}
            {t("sculpture")}
          </Link>
        </Col>
      </Row>
      <Row className="organisation">
        <Col xs={12} md={12}>
          <h2 className="titlecustom text-center">Organisations</h2>
        </Col>
      </Row>
      <Row className="Applytext">
        <Col md={2} className="sidebar-wrapper">
          <Sidebar/>
        </Col>
        <Col sx={12} md={10} className="righttext">
          <ul id="infos">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faStar} className="listicon2"/>
              Infos
            </h2>
            <ol>Ouverture de l’exposition au public : samedi 17 juillet à 15h.</ol>
            <ol>L’exposition sera ouverte tous les jours de 15h à 19h, ainsi que le jeudi matin, jour de marché, de 10h30 à 12h30.</ol>
            <ol>Fin de l’exposition le jeudi 19 août à 19h.</ol>
            <ol>Le vernissage n’aura pas lieu à cause du contexte sanitaire.</ol>
          </ul>
          <ul id="art">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              Dépôt des œuvres
            </h2>
            <ol>
              <span className="font-weight-bold">Peintres</span> : lundi 12 juillet 10h-12h et 14h-16h
            </ol>
            <ol>
              <span className="font-weight-bold">Sculpteurs</span> : vendredi 16 juillet de 10h à 12h
            </ol>
            <ol>Accrochage et installation réalisé par l’association.</ol>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>  
              Retrait des œuvres
            </h2>
            <ol> vendredi 20 août de 10 à 12h</ol>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              Infos œuvres
            </h2>
            <ol className="mb-2">
              Les œuvres doivent être originales et ne pas avoir été déjà exposées dans notre salon. 
              Dans un souci d’harmonie, les organisateurs se réservent le droit de limiter les œuvres exposées.
              Nous avons besoin de vos photos (avec une bonne définition) pour le choix de l’affiche.
            </ol>
            <ol className="mb-2">
              <span className="font-weight-bold">Peintres</span> : Chaque artiste dispose d’une surface de 1m20x1m80 (panneau horizontal ou vertical).
               Merci de respecter les dimensions car cette année le salon a lieu dans une salle de la mairie plus restreinte que notre salle habituelle.
            </ol>
            <ol className="mb-2">
              <span className="font-weight-bold">Sculpteurs</span> : 4 ou 5 oeuvres originales. Prévoir des socles blancs de préférence.
            </ol> 
          </ul>
          <ul id="apply">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faMoneyCheckAlt} className="listicon2"/>
              Candidatures
            </h2>
            <ol>
              Le droit d’inscription est de {REACT_APP_PRICE} à régler avec la fiche de candidature par chèque à l’ordre de l’association Salon des Arts.
              A l’adresse suivante : {REACT_APP_ADDRESS}
            </ol>
            <ol className="importanttext">
              L’inscription au salon implique obligatoirement l’adhésion totale au présent règlement.
            </ol>
            <ol className="importanttext">
              L’inscription n’est effective qu'après la réception de complète du dossier et la confirmation de l'association.
            </ol>
          </ul>
          <ul id="sells">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faEuroSign} className="listicon2"/>
              Ventes
            </h2>
            <ol>
              Le prix de vente de chaque œuvre est de la responsabilité de l’artiste.
              Chaque œuvre devra porter au dos : nom, prénom, adresse, le titre de l’œuvre et son prix ainsi qu’un certificat d’authenticité signé par l’artiste.
              Chaque œuvre devra être munie d’un système d’accrochage solide et pratique.
              L’association demandera 10% sur les ventes.
            </ol>
          </ul>
          <ul id="insurances">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPeopleCarry} className="listicon2"/>
              Assurances
            </h2>
            <ol>
              Les organisateurs prendront le plus grand soin de vos œuvres. 
              La municipalité et l’association organisatrice de l’exposition ne répondent en aucun cas des dommages qui pourraient survenir aux œuvres pendant la durée de l’exposition. 
              Les artistes sont invités à assurer leurs œuvres contre tout risque. 
              Ils renoncent expressément à tout recours contre l’association.
              Le transport des œuvres aller et retour est à la charge de l’artiste.
            </ol>
          </ul>
          <ul id="permanences">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faInfoCircle} className="listicon2"/>
              Permanances
            </h2>
            <ol>
              Les artistes sont invités à assurer une ou 2 permanences de 14h à 18h. La présence des artistes est un plus pour les échanges avec les visiteurs et favorise les ventes. 
              Les ateliers de démonstrations sont à nouveau mis en place. Contactez nous si vous êtes intéressés.
              Penser à mettre des cartes de visite à disposition.
            </ol>
          </ul>
          <ul id="divers">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faHandsHelping} className="listicon2"/>
              Divers
            </h2>
            <ol>
              Il a été convenu que les seules ventes à l’accueil du salon, seraient les ventes des cartes, affiches, marque-pages appartenant à l’association.
            </ol>
          </ul>
        </Col>
      </Row>
    </section>
  );
};
    
export default Apply;