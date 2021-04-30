import { Row, Col, Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import { SocialIcon } from 'react-social-icons';
import affiche1 from "../../assets/images/affiche1.jpeg";

const ImageJumbotron = () => { 
  const { t } = useTranslation();
  const REACT_APP_DATE_EXPO = process.env.REACT_APP_DATE_EXPO;
  const REACT_APP_LOCATION = process.env.REACT_APP_LOCATION;
  const REACT_APP_LIMIT_DATE_REGISTER = process.env.REACT_APP_LIMIT_DATE_REGISTER;

  return (
    <Jumbotron className="JumbotronDisplay" alt="picture of the bay of Morlaix from Carantec">
      <Row>
        <Col>
          <ul data-aos="flip-up" className="list-inline">
            <ol className="list-inline-item">
              <SocialIcon className="socialicon" url="https://twitter.com" alt="twitter icon"/>
            </ol>
            <ol className="list-inline-item">
              <SocialIcon className="socialicon" url="https://facebook.com" alt="facebook icon"/>
            </ol>
            <ol className="list-inline-item">
              <SocialIcon className="socialicon" url="https://instagram.com" alt="instagram icon"/>
            </ol>
          </ul>
          <div data-aos="zoom-in-right">
            <h2 className="titlecustom">{t("expo")}</h2>
            <p id="expodate">Date : {REACT_APP_DATE_EXPO}</p>
            <p id="expoplace">{t("location")} : {REACT_APP_LOCATION}</p>
            <Link className="btn buttoncustom" to="/apply">
              {t("linkapply")} {t("beforethe")} {REACT_APP_LIMIT_DATE_REGISTER}
            </Link>         
          </div>
        </Col>
        <Col data-aos="zoom-in-left">
          <Image
          src={affiche1}
          alt="Poster adverting Carantec's Salon des Arts"
          />
        </Col>
      </Row>
    </Jumbotron>
  );
};
    
export default ImageJumbotron;