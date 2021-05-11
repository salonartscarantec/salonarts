import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Player } from '@lottiefiles/react-lottie-player';
import paintbrush from '../assets/images/paintbrush.jpg';

const Contacts = () => {
  const { t } = useTranslation();
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_PHONE = process.env.REACT_APP_PHONE;
    
  return (
    <div className='Contacts m-auto text-center'>
      <h1 className="importanttext">{t("contacttitle")}</h1>
      <Row>
        <Col xs={12} md={6}>
          <ul className="contacttext">
            <ol>{t("address")} {REACT_APP_ADDRESS}</ol>
            <ol>{t("phone")} {REACT_APP_PHONE}</ol>
            <ol>
              {t("email")} 
              <a 
                className="contactlink" 
                href={`mailto:${REACT_APP_EMAIL}?subject=contact`}>
                  {REACT_APP_EMAIL}
              </a>
            </ol>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"
            alt="contact us animation"
            ></Player>
        </Col>
      </Row>
      <Row>
        <Col sx={12} md={6}>
          <img
            className="d-block w-100"
            src={paintbrush}
            alt="brushes full of paint with different colors"
          />
        </Col>
        <Col sx={12} md={6} className="contactbureau">
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