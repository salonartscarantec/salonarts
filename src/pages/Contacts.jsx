import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import paintbrush from '../assets/images/paintbrush.webp';
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  const { t } = useTranslation();
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_PHONE = process.env.REACT_APP_PHONE;
  const REACT_APP_PHONE_2 = process.env.REACT_APP_PHONE_2;
    
  return (
    <div className='Contacts m-auto text-center'>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="./brush_black_18dp.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Salon des arts de Carantec, 
          les informations pour nous contacter en cas de difficultés."
        />
        <link rel="apple-touch-icon" href="./brush_black_18dp.svg" />
        <link rel="manifest" href="https://www.salonartcarantec.com/manifest.json" />
        <title>Salon des Arts Carantec - Contacts</title>
      </Helmet>
      <h2 className="importanttext">{t("contacttitle")}</h2>
      <Row className="contactaddress d-flex justify-content-center">
        <Col xs={12} md={6} data-aos="zoom-in">
          <ul className="contacttext text-left">
            <li>{t("address")} {REACT_APP_ADDRESS}</li>
            <li>{t("phone")} 
              <a className="contactlink" href={`tel:${REACT_APP_PHONE}`}> {REACT_APP_PHONE}</a> /
              <a className="contactlink" href={`tel:${REACT_APP_PHONE_2}`}> {REACT_APP_PHONE_2}</a>
            </li>
            <li>
              {t("email")} 
              <a 
                className="contactlink" 
                href={`mailto:${REACT_APP_EMAIL}?subject=contact`}>
                  {REACT_APP_EMAIL}
              </a>
            </li>
            <li>
              Blog : <a className="contactlink" href="http://salonartscarantec.kazeo.com/">http://salonartscarantec.kazeo.com/</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="rowbureau d-flex justify-content-center">
        <Col sx={12} md={6} data-aos="zoom-in">
          <img
            className="d-block w-100"
            src={paintbrush}
            alt="brushes full of paint with different colors"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sx={12} md={6} className="contactbureau" data-aos="zoom-in">
          <h5 className="importanttext">Le bureau élu :</h5>
          <br></br>
          <ul className="text-left">
            <li>Président d’honneur : Loyz Laouénan</li>
            <li>Président : J.H. Prigent</li>
            <li>Secrétaires : J.Gauthier et C.Conaté</li>
            <li>Communication : M.Lacut</li>
            <li>Trésorière : M.Querné</li>
            <li>Trésorière adjointe : A. Le Scour</li>
            <br></br>
          </ul>
          <p>Le Conseil d’administration se compose d’une vingtaine de membres.</p> 
        </Col>
      </Row>
    </div>
  );
};
    
export default Contacts;