import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";

const Apply = () => {
  const { t } = useTranslation();
  const REACT_APP_PRICE = process.env.REACT_APP_PRICE;
    
  return (
    <section className='Apply m-auto text-center'>
      <h1>{t("registertitle")}</h1>
      <Row >
        <Col xs={12}>
          <Link className="btn buttoncustom" to="/pdfdownload">{t("linkregisterdownload")}</Link>
        </Col>
      </Row>
      <Row className="d-block">
        <h2>Organisations:</h2>
      </Row>
      <Row className="d-flex">
        <Col sx={12} md={6}>
          <ul>
            <h2>Dépôt des œuvres:</h2>
            <ol>peintres : lundi 12 juillet 10h-12h et 14h-16h</ol>
            <ol>Sculpteurs : vendredi 16 juillet de 10h à 12h.</ol>
            <ol>Accrochage réalisé par l’association.</ol>
            <ol>Le vernissage n’aura pas lieu à cause du contexte sanitaire.</ol>
            <ol>Ouverture de l’exposition au public : samedi 17 juillet à 15h.</ol>
            <ol>L’exposition sera ouverte tous les jours de 15h à 19h, ainsi que le jeudi matin, jour de marché, de 10h30 à 12h30.</ol>
            <ol>Fin de l’exposition le jeudi 19 août à 19h.</ol>
            <ol>Retrait des œuvres le vendredi 20 août de 10 à 12h.</ol>
          </ul>
        </Col>
      </Row>
      
        <h2></h2>
      
          
        <ul>
          <h2>
            {t("registerrules")}
          </h2>
          <li>
            {t("registerprice")} {REACT_APP_PRICE}
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
          <li>
            blaugaiaoyvaoyvoyv aiuevpaevf
          </li>
        </ul>
    </section>
  );
};
    
export default Apply;