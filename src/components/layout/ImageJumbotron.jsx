import { Row, Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import { SocialIcon } from 'react-social-icons';

const ImageJumbotron = () => { 
  const { t } = useTranslation();

  return (
    <Jumbotron 
      className="JumbotronDisplay" 
      alt="picture of the bay of Morlaix from Carantec"
    >
      <Row className="jumbotext">
        <Col xs={12} md={6} className="leftjumbotext">
          <Row data-aos="flip-up" className="mb-2">
            <Col>
              <SocialIcon 
                className="socialicon facebook" 
                url="https://fr-fr.facebook.com/ArtCarantec/" 
                alt="facebook icon"
                target="_blank" 
                rel="noreferrer noopener"
              />
            </Col>
            <Col>
              <SocialIcon 
                className="socialicon" 
                url="https://www.instagram.com/saloncarantec/" 
                alt="instagram icon"
                target="_blank" 
                rel="noreferrer noopener"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <div className="box">
                <h1 className="title">Salon des Arts Carantec</h1>
                <h2 className="titlecustom subtitle">{t("expo")}</h2>
                <p id="expodate">
                  {t("expodate")}
                </p>
                <p id="expoplace">
                  {t("expoplace")}
                </p>
              </div>
              <Link className="btn buttoncustom bigbutton" to="/apply">
                {t("linkapply")} {t("beforethe")} {t("registrationlimitdate")}
              </Link>         
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Jumbotron>
  );
};
    
export default ImageJumbotron;