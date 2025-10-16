import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const { t } = useTranslation();
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_PHONE = process.env.REACT_APP_PHONE;
  const REACT_APP_PHONE_2 = process.env.REACT_APP_PHONE_2;
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;

  return (
  <footer>
    <Container>
      <Row >
        <Col xs={12} md={4}>
          <ul>
            <li className="footertitle">Salon des Arts - Carantec</li>
            <li>{t("address")} {REACT_APP_ADDRESS}</li>
            <li>{t("phone")} 
              <a className="footerlinkmail" href={`tel:${REACT_APP_PHONE}`}> {REACT_APP_PHONE}</a> / 
              <a className="footerlinkmail" href={`tel:${REACT_APP_PHONE_2}`}> {REACT_APP_PHONE_2}</a>
            </li>
            <li>
              {t("email")} 
              <a className="footerlinkmail" href={`mailto:${REACT_APP_EMAIL}?subject=contact`}>
                {REACT_APP_EMAIL}
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="footernavlink">
          <ul className="text-center">
            <li>
              <Link className="footerlink footerlinkresponsive" to="/">{t("linkhome")}</Link>
            </li>
            <li>
              <Link className="footerlink footerlinkresponsive" to="/apply">{t("linkapply")}</Link>
            </li>
            <li>
              <Link className="footerlink footerlinkresponsive" to="/contacts">{t("linkcontact")}</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="footersocial d-flex justify-content-center">
          <Row>
            <Col>
              <SocialIcon 
                className="socialicon" 
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
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-end">
      <small>
        <Link className="footerlink" to="/mentionslegales">
          Mentions Légales
        </Link> © 2021
      </small>
    </div>
  </footer>
  );
};

export default Footer;
