import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const { t } = useTranslation();

  return (
  <footer>
    <Container>
      <Row >
        <Col xs={12} md={4}>
          <ul>
            Salon des Arts - Carantec
            <ol>{t("address")}</ol>
            <ol>{t("phone")}</ol>
            <ol>{t("email")}</ol>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <ul>
            <ol>
              <Link className="footerlink" to="/">{t("linkhome")}</Link>
            </ol>
            <ol>
              <Link className="footerlink" to="/apply">{t("linkapply")}</Link>
            </ol>
            <ol>
              <Link className="footerlink" to="/contacts">{t("linkcontact")}</Link>
            </ol>
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
      <small>Jérémy Querné © 2021</small>
    </div>
  </footer>
  );
};

export default Footer;
