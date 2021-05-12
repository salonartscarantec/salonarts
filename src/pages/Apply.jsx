import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMailBulk, faPrint } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "components/layout/Sidebar";
import { faEuroSign, 
        faHandsHelping, 
        faInfoCircle, 
        faMoneyCheckAlt, 
        faPalette, 
        faPeopleCarry, 
        faStar } from '@fortawesome/free-solid-svg-icons';

const Apply = ( ) => {
  const { t } = useTranslation();
  const REACT_APP_PRICE = process.env.REACT_APP_PRICE;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;

  return (
    <section className='Apply'>
      <h1 className="titlecustom text-center">{t("registertitle")}</h1>
      <Row className="inlinelist" data-aos="zoom-in-right">
        <Col xs={12} md={12}>
          <ol className="horizontal-list">
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faPrint} size="3x" className="listicon"/> 
              </p>
              <p>
                <span className="ml-2 stepstext">
                  {t("step1")}
                </span>
              </p>
            </li>
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faMailBulk} size="3x" className="listicon"/> 
              </p>
              <p className="ml-2 stepstext">
                <ul className="liststeps">
                  <li>{t("step2")} {t("step2a")} {REACT_APP_PRICE}</li>
                  <li>{t("step2b")}</li>
                  <li>{t("step2c")}</li>
                </ul>
              </p>
            </li>
            <li className="horizontal-list-item">
              <p>
                <FontAwesomeIcon icon={faClock} size="3x" className="listicon"/> 
              </p>
              <p>
                <span className="ml-2 stepstext">
                  {t("step3")}
                </span>
              </p>
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="inlinebutton" data-aos="zoom-in-right">
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownloadpainting">
            {t("linkregisterdownload")}
            {t("painting")}
          </Link>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Link className="btn buttoncustom" to="/pdfdownloadsculpture">
            {t("linkregisterdownload")}
            {t("sculpture")}
          </Link>
        </Col>
      </Row>
      <Row className="organisation">
        <Col xs={12} md={12}>
          <h2 className="titlecustom text-center">
            {t("organisation")}
          </h2>
        </Col>
      </Row>
      <Row className="Applytext">
        <Col md={2} className="sidebar-wrapper" data-aos="zoom-in-right">
          <Sidebar/>
        </Col>
        <Col sx={12} s={12} md={10} className="righttext" data-aos="zoom-in-left">
          <ul id="info">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faStar} className="listicon2"/>
              {t("info")}
            </h2>
            <li>
              {t("openning")}
              <span className="importanttext">{t("openningdate")}</span>
            </li>
            <li>{t("openninghours")}</li>
            <li>
              {t("closure")}
              <span className="importanttext">{t("closuredate")}</span>
            </li>
            <li>{t("privateview")}</li>
            <li className="importanttext">{t("extra")}</li>
          </ul>
          <ul id="artwork">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              Dépôt des œuvres
            </h2>
            <li>
              <span className="font-weight-bold">Peintres</span> : lundi 12 juillet 10h-12h et 14h-16h
            </li>
            <li>
              <span className="font-weight-bold">Sculpteurs</span> : vendredi 16 juillet de 10h à 12h
            </li>
            <li>Accrochage et installation réalisé par l’association.</li>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>  
              Retrait des œuvres
            </h2>
            <li> vendredi 20 août de 10 à 12h</li>
          </ul>
          <ul>
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPalette} className="listicon2"/>
              Infos œuvres
            </h2>
            <li className="mb-2">
              Les œuvres doivent être originales et ne pas avoir été déjà exposées dans notre salon. 
              Dans un souci d’harmonie, les organisateurs se réservent le droit de limiter les œuvres exposées.
              Nous avons besoin de vos photos (avec une bonne définition) pour le choix de l’affiche.
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Peintres</span> : Chaque artiste dispose d’une surface de 1m20x1m80 (panneau horizontal ou vertical).
               Merci de respecter les dimensions car cette année le salon a lieu dans une salle de la mairie plus restreinte que notre salle habituelle.
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Sculpteurs</span> : 4 ou 5 oeuvres originales. Prévoir des socles blancs de préférence.
            </li> 
          </ul>
          <ul id="applications">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faMoneyCheckAlt} className="listicon2"/>
              Candidatures
            </h2>
            <li>
              Le droit d’inscription est de {REACT_APP_PRICE} à régler avec la fiche de candidature par chèque à l’ordre de l’association Salon des Arts.
            </li>
            <li>
              A l’adresse suivante : <span className="importanttext">{REACT_APP_ADDRESS}</span>
            </li>
            <li className="importanttext">
              L’inscription au salon implique obligatoirement l’adhésion totale au présent règlement.
            </li>
            <li className="importanttext">
              L’inscription n’est effective qu'après la réception du dossier complet et la confirmation de l'association.
            </li>
          </ul>
          <ul id="sales">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faEuroSign} className="listicon2"/>
              Ventes
            </h2>
            <li>
              Le prix de vente de chaque œuvre est de la responsabilité de l’artiste.
              Chaque œuvre devra porter au dos : nom, prénom, adresse, le titre de l’œuvre et son prix ainsi qu’un certificat d’authenticité signé par l’artiste.
              Chaque œuvre devra être munie d’un système d’accrochage solide et pratique.
              L’association demandera 10% sur les ventes.
            </li>
          </ul>
          <ul id="insurances">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faPeopleCarry} className="listicon2"/>
              Assurances
            </h2>
            <li>
              Les organisateurs prendront le plus grand soin de vos œuvres. 
              La municipalité et l’association organisatrice de l’exposition ne répondent en aucun cas des dommages qui pourraient survenir aux œuvres pendant la durée de l’exposition. 
              Les artistes sont invités à assurer leurs œuvres contre tout risque. 
              Ils renoncent expressément à tout recours contre l’association.
              Le transport des œuvres aller et retour est à la charge de l’artiste.
            </li>
          </ul>
          <ul id="permanency">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faInfoCircle} className="listicon2"/>
              Permanances
            </h2>
            <li>
              Les artistes sont invités à assurer une ou 2 permanences de 14h à 18h. La présence des artistes est un plus pour les échanges avec les visiteurs et favorise les ventes. 
              Les ateliers de démonstrations sont à nouveau mis en place. Contactez nous si vous êtes intéressés.
              Penser à mettre des cartes de visite à disposition.
            </li>
          </ul>
          <ul id="others">
            <h2 className="subtitlecustom">
              <FontAwesomeIcon icon={faHandsHelping} className="listicon2"/>
              Divers
            </h2>
            <li>
              Il a été convenu que les seules ventes à l’accueil du salon, seraient les ventes des cartes, affiches, marque-pages appartenant à l’association.
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};
    
export default Apply;