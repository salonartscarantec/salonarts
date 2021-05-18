import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const { t } = useTranslation();
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  const REACT_APP_PHONE = process.env.REACT_APP_PHONE;
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;

  return (
  <footer>
    <Container>
      <Row >
        <Col xs={12} md={4}>
          <ul>
            <li className="footertitle">Salon des Arts - Carantec</li>
            <li>{t("address")} {REACT_APP_ADDRESS}</li>
            <li>{t("phone")} {REACT_APP_PHONE}</li>
            <li>
              {t("email")} 
              <a className="footerlink" href={`mailto:${REACT_APP_EMAIL}?subject=contact`}>
                {REACT_APP_EMAIL}
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <ul>
            <li>
              <Link className="footerlink" to="/">{t("linkhome")}</Link>
            </li>
            <li>
              <Link className="footerlink" to="/apply">{t("linkapply")}</Link>
            </li>
            <li>
              <Link className="footerlink" to="/contacts">{t("linkcontact")}</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Row>
            <Col>
              <SocialIcon className="socialicon" url="https://fr-fr.facebook.com/ArtCarantec/" />
            </Col>
            <Col>
              <SocialIcon className="socialicon" url="https://instagram.com" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-end">
      <small>
        <a className="footerlink" href="https://queje.github.io/">
          Jérémy Querné
        </a> © 2021
      </small>
    </div>
  </footer>
  );
};

export default Footer;
