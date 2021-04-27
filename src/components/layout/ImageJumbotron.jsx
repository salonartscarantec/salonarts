import { Button, Row, Col, Image } from "react-bootstrap";
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
    <Jumbotron className="JumbotronDisplay">
      <Row>
        <Col>
          <ul data-aos="flip-up" className="list-inline">
            <ol className="list-inline-item">
              <SocialIcon url="https://twitter.com" />
            </ol>
            <ol className="list-inline-item">
              <SocialIcon url="https://facebook.com" />
            </ol>
            <ol className="list-inline-item">
              <SocialIcon url="https://instagram.com" />
            </ol>
          </ul>
          <div data-aos="zoom-in-right">
            <h2>{t("expo")}</h2>
            <p>Date : {REACT_APP_DATE_EXPO}</p>
            <p>{t("location")} : {REACT_APP_LOCATION}</p>
            <Button>
              <Link className="text-light" to="/register">
                {t("linkregister")} {t("beforethe")} {REACT_APP_LIMIT_DATE_REGISTER}
              </Link>
            </Button>
          </div>
        </Col>
        <Col data-aos="zoom-in-left">
          <Image
          src={affiche1}
          alt="affiche salon des arts carantec"
          />
        </Col>
      </Row>
    </Jumbotron>
  );
};
    
export default ImageJumbotron;