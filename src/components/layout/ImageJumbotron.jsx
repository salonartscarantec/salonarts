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
      <Row className="jumbotext">
        <Col xs={12} md={6}>
          <Row data-aos="flip-up" className="mb-2">
            <Col>
              <SocialIcon className="socialicon facebook" url="https://fr-fr.facebook.com/ArtCarantec/" alt="facebook icon"/>
            </Col>
            <Col>
              <SocialIcon className="socialicon" url="https://instagram.com" alt="instagram icon"/>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h1 data-aos="fade-left" className="title">Salon des Arts Carantec</h1>
              <div data-aos="fade-right" className="box">
                <h2 className="titlecustom subtitle">{t("expo")}</h2>
                <p id="expodate">
                  {REACT_APP_DATE_EXPO} <span id="expoplace"> {REACT_APP_LOCATION}</span>
                </p>
              </div>
              <Link data-aos="fade-left" className="btn buttoncustom bigbutton" to="/apply">
                {t("linkapply")} {t("beforethe")} {REACT_APP_LIMIT_DATE_REGISTER}
              </Link>         
            </Col>
          </Row>
          <Row className="imageposter">
            <Col xs={12} md={6} data-aos="zoom-in" className="m-auto">
              <Image
              src={affiche1}
              alt="Poster adverting Carantec's Salon des Arts"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};
    
export default ImageJumbotron;