import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Player } from '@lottiefiles/react-lottie-player';
import paintbrush from '../assets/images/paintbrush.jpg';
import { Helmet } from "react-helmet";

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
      <h1 className="importanttext">{t("contacttitle")}</h1>
      <Row className="contactaddress">
        <Col xs={12} md={6} data-aos="zoom-in-left">
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
          </ul>
        </Col>
        <Col xs={12} md={6} data-aos="zoom-in-right">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"
            alt="contact us animation"
            ></Player>
        </Col>
      </Row>
      <Row className="rowbureau">
        <Col sx={12} md={6} data-aos="zoom-in-left">
          <img
            className="d-block w-100"
            src={paintbrush}
            alt="brushes full of paint with different colors"
          />
        </Col>
        <Col sx={12} md={6} className="contactbureau" data-aos="zoom-in-right">
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
            <li>Le Conseil d’administration se compose d’une vingtaine de membres.</li> 
          </ul>
        </Col>
      </Row>
    </div>
  );
};
    
export default Contacts;